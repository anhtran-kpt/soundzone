import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { SignUpInput } from "@/schemas";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getUserBySlug, getUsers, signUp } from "@/lib/tanstack-query";
import { userKeys } from "@/lib/tanstack-query";

export function useGetUsers() {
  return useQuery({
    queryKey: userKeys.all,
    queryFn: ({ signal }) => getUsers(signal),
    placeholderData: keepPreviousData,
  });
}

export function useGetuserBySlug(userSlug: string) {
  return useQuery({
    queryKey: userKeys.detail(userSlug),
    queryFn: ({ signal }) => getUserBySlug(userSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!userSlug,
  });
}

export const useSignUpMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: SignUpInput) => signUp(data),
    onSuccess: async () => {
      toast.success("Signed up successfully");

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
};
