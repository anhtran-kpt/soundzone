import { useMutation } from "@tanstack/react-query";
import { SignUpDto } from "@/dtos/auth-dto";
import { authService } from "@/services/client/auth-service";
export const useSignUp = () => {
  return useMutation({
    mutationFn: (data: SignUpDto) => authService.signUp(data),
  });
};
