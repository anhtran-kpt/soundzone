import { ApiResponse } from "@/lib/api/config/server/api-response";
import { apiClient } from "@/lib/api/config/client/api-client";
import { Album } from "@/schemas";
import { ALBUM_ENDPOINTS } from "@/config/endpoints";
import { CreateAlbumDto, UpdateAlbumDto } from "@/schemas";

export const albumQueries = {
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

  async create(data: CreateAlbumDto): Promise<ApiResponse<Album>> {
    return apiClient.post<Album>(ALBUM_ENDPOINTS.create, data);
  },

  async update(
    slug: string,
    data: UpdateAlbumDto
  ): Promise<ApiResponse<Album>> {
    return apiClient.patch<Album>(ALBUM_ENDPOINTS.update(slug), data);
  },

  async delete(slug: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(ALBUM_ENDPOINTS.delete(slug));
  },
};
