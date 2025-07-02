import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { SignUpInput } from "@/schemas";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getUser, getUsers, signUp } from "@/lib/queries";
import { userKeys } from "@/lib/query-keys";

export function useGetUsers() {
  return useQuery({
    queryKey: userKeys.all,
    queryFn: ({ signal }) => getUsers(signal),
    placeholderData: keepPreviousData,
  });
}

export function useGetUser(userId: string) {
  return useQuery({
    queryKey: userKeys.detail(userId),
    queryFn: ({ signal }) => getUser(userId, signal),
    placeholderData: keepPreviousData,
    enabled: !!userId,
  });
}

export const useSignUp = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: SignUpInput) => signUp(data),
    onSuccess: async (user) => {
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
