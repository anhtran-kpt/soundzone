import { ApiResponse } from "@/lib/server/api-response";
import { apiClient } from "@/lib/api/config/client/api-client";
import { USER_ENDPOINTS } from "@/config/endpoints";
import { UpdateUserDto } from "@/schemas";
import { User } from "@/app/generated/prisma";

export const getAllUsers = async (params?: {
  limit?: number;
}): Promise<ApiResponse<User[]>> => {
  const queryParams = new URLSearchParams();
  if (params?.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  const url = `${USER_ENDPOINTS.list}?${queryParams.toString()}`;
  return apiClient.get<User[]>(url);
};

export const getUserBySlug = async (
  slug: string
): Promise<ApiResponse<User>> => {
  return apiClient.get<User>(USER_ENDPOINTS.detail(slug));
};

export const updateUser = async (
  slug: string,
  data: UpdateUserDto
): Promise<ApiResponse<User>> => {
  return apiClient.put<User>(USER_ENDPOINTS.update(slug), data);
};

export const deleteUser = async (slug: string): Promise<ApiResponse<void>> => {
  return apiClient.delete<void>(USER_ENDPOINTS.delete(slug));
};
