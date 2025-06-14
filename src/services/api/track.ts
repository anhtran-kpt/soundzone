import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { TRACK_ENDPOINTS } from "@/lib/endpoints";
import { Track } from "@/types/database";

export const trackApi = {
  async getAll(params?: { limit?: number }): Promise<ApiResponse<Track[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${TRACK_ENDPOINTS.list}?${queryParams.toString()}`;
    return apiClient.get<Track[]>(url);
  },

  async getBySlug(slug: string): Promise<ApiResponse<Track>> {
    return apiClient.get<Track>(TRACK_ENDPOINTS.detail(slug));
  },

  async delete(slug: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(TRACK_ENDPOINTS.delete(slug));
  },
};
