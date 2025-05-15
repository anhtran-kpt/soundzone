import { ApiResponse } from "@/lib/server/api-response";
import { apiClient } from "@/lib/api/api-client";
import { USER_ENDPOINTS } from "@/config/endpoints";
import { UpdateUserDto } from "@/schemas";
import { User } from "@/app/generated/prisma";

export const userClientService = {
  // Get all users
  async getAll(params?: { limit?: number }): Promise<ApiResponse<User[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${USER_ENDPOINTS.list}?${queryParams.toString()}`;
    return apiClient.get<User[]>(url);
  },

  // Get a single user by ID
  async getById(id: string): Promise<ApiResponse<User>> {
    return apiClient.get<User>(USER_ENDPOINTS.detail(id));
  },

  // Update an user
  async update(id: string, data: UpdateUserDto): Promise<ApiResponse<User>> {
    return apiClient.put<User>(USER_ENDPOINTS.update(id), data);
  },

  // Delete an user
  async delete(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(USER_ENDPOINTS.delete(id));
  },
};
