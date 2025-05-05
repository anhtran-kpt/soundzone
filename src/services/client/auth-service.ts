import API_ENDPOINTS from "@/config/api-endpoints";
import { apiClient } from "@/lib/api/api-client";
import { ApiResponse } from "@/types/api-type";
import { SignUpDto } from "@/types/auth-type";

export const AuthService = {
  async signUp(data: SignUpDto): Promise<ApiResponse<SignUpDto>> {
    return apiClient.post<SignUpDto>(API_ENDPOINTS.auth.signup, data);
  },

  async checkEmailExists(email: string): Promise<ApiResponse<string>> {
    return apiClient.post<string>(API_ENDPOINTS.auth.checkEmailExists, email);
  },
};
