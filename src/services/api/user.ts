import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { USER_ENDPOINTS } from "@/lib/endpoints";
import { FullUser } from "@/lib/types";

export async function getAllUsers(params?: {
  limit?: number;
}): Promise<ApiResponse<FullUser[]>> {
  const queryParams = new URLSearchParams();
  if (params?.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  const url = `${USER_ENDPOINTS.list}?${queryParams.toString()}`;
  return apiClient.get<FullUser[]>(url);
}

export async function getUserById(id: string): Promise<ApiResponse<FullUser>> {
  return apiClient.get<FullUser>(USER_ENDPOINTS.detail(id));
}
