import API_ENDPOINTS from "@/config/api-endpoints";
import { apiClient } from "@/lib/api/api-client";
import { ApiResponse } from "@/types/api-type";
import { ValidateEmailDto, SignUpDto, SignInDto } from "@/dtos/auth-dto";

export const authService = {
  async signIn(data: SignInDto): Promise<ApiResponse<SignInDto>> {
    return apiClient.post<SignInDto>(API_ENDPOINTS.auth.signin, data);
  },

  async signUp(data: SignUpDto): Promise<ApiResponse<SignUpDto>> {
    return apiClient.post<SignUpDto>(API_ENDPOINTS.auth.signup, data);
  },

  async validateEmail(
    email: ValidateEmailDto
  ): Promise<ApiResponse<ValidateEmailDto>> {
    return apiClient.post<ValidateEmailDto>(
      API_ENDPOINTS.auth.validateEmail(email),
      email
    );
  },
};
