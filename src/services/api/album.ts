import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { Album, CreateAlbumRequest, UpdateAlbumRequest } from "@/schemas";
import { ALBUM_ENDPOINTS } from "@/lib/endpoints";

export const albumApi = {
  async getAll(params?: { limit?: number }): Promise<ApiResponse<Album[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${ALBUM_ENDPOINTS.list}?${queryParams.toString()}`;
    return apiClient.get<Album[]>(url);
  },

  async getBySlug(slug: string): Promise<ApiResponse<Album>> {
    return apiClient.get<Album>(ALBUM_ENDPOINTS.detail(slug));
  },

  async create(data: CreateAlbumRequest): Promise<ApiResponse<Album>> {
    return apiClient.post<Album>(ALBUM_ENDPOINTS.create, data);
  },

  async update(
    slug: string,
    data: UpdateAlbumRequest
  ): Promise<ApiResponse<Album>> {
    return apiClient.patch<Album>(ALBUM_ENDPOINTS.update(slug), data);
  },

  async delete(slug: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(ALBUM_ENDPOINTS.delete(slug));
  },
};
