import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { USER_ENDPOINTS } from "@/lib/endpoints";
import { User, UpdateUserDto } from "@/lib/validations";

export const userApi = {
  async getAll(params?: { limit?: number }): Promise<ApiResponse<User[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${USER_ENDPOINTS.list}?${queryParams.toString()}`;
    return apiClient.get<User[]>(url);
  },

  async getBySlug(slug: string): Promise<ApiResponse<User>> {
    return apiClient.get<User>(USER_ENDPOINTS.detail(slug));
  },

  async update(slug: string, data: UpdateUserDto): Promise<ApiResponse<User>> {
    return apiClient.put<User>(USER_ENDPOINTS.update(slug), data);
  },

  async delete(slug: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(USER_ENDPOINTS.delete(slug));
  },
};
