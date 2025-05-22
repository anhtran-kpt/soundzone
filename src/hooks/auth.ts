import { useMutation } from "@tanstack/react-query";
import { authClientService } from "@/services";
import { SignInDto, SignUpDto } from "@/schemas";
import { toast } from "sonner";

// Hook to sign in a user
export function useSignIn() {
  return useMutation({
    mutationFn: (data: SignInDto) => authClientService.signIn(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Signed in successfully");
      } else {
        toast.error(response.error?.message || "Failed to sign in");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error signing in: ${error.message}`);
    },
  });
}

// Hook to sign up a user
export function useSignUp() {
  return useMutation({
    mutationFn: (data: SignUpDto) => authClientService.signUp(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Signed up successfully");
      } else {
        toast.error(response.error?.message || "Failed to sign up");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error signing up: ${error.message}`);
    },
  });
}
