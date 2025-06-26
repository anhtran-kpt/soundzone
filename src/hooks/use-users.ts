import { useMutation } from "@tanstack/react-query";
import { userApi } from "@/lib/api-client";
import { toast } from "sonner";
import { SignUp } from "@/schemas";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useSignUpMutation() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: SignUp) => userApi.signUp(data),
    onSuccess: async ({ user, message }) => {
      toast.success(message);

      await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });

      if (user.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/");
      }
      router.refresh();
    },
    onError: (error) => {
      toast.error(`Signed up failed: ${error.message}`);
      console.error("Signed up failed:", error);
    },
  });
}
