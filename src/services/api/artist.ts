import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { Artist, CreateArtistRequest, UpdateArtistRequest } from "@/schemas";
import { ARTIST_ENDPOINTS } from "@/lib/endpoints";

export const artistApi = {
  async getAll(params?: { limit?: number }): Promise<ApiResponse<Artist[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${ARTIST_ENDPOINTS.list}?${queryParams.toString()}`;
    return apiClient.get<Artist[]>(url);
  },

  async getBySlug(slug: string): Promise<ApiResponse<Artist>> {
    return apiClient.get<Artist>(ARTIST_ENDPOINTS.detail(slug));
  },

  async create(data: CreateArtistRequest): Promise<ApiResponse<Artist>> {
    return apiClient.post<Artist>(ARTIST_ENDPOINTS.create, data);
  },

  async update(
    slug: string,
    data: UpdateArtistRequest
  ): Promise<ApiResponse<Artist>> {
    return apiClient.patch<Artist>(ARTIST_ENDPOINTS.update(slug), data);
  },

  async delete(slug: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(ARTIST_ENDPOINTS.delete(slug));
  },
};
