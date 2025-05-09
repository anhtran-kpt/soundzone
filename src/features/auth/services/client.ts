import { ApiResponse } from "@/lib/server/api-response";
import { apiClient } from "@/lib/api/api-client";
import { AUTH_ENDPOINTS } from "../endpoints";
import { SignInDto, SignUpDto } from "../schemas";
import { User } from "@/app/generated/prisma";

export const authClientService = {
  // Sign up a new user
  async signUp(data: SignUpDto): Promise<ApiResponse<User>> {
    return apiClient.post<User>(AUTH_ENDPOINTS.signUp, data);
  },

  // Sign in a user
  async signIn(data: SignInDto): Promise<ApiResponse<User>> {
    return apiClient.post<User>(AUTH_ENDPOINTS.signIn, data);
  },
};
