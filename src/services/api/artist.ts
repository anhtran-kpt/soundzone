import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { CreateArtistInput, UpdateArtistInput } from "@/lib/validations";
import { ARTIST_ENDPOINTS } from "@/lib/endpoints";
import { FullArtist } from "@/lib/types";

export const artistApi = {
  async getAll(params?: {
    limit?: number;
  }): Promise<ApiResponse<FullArtist[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${ARTIST_ENDPOINTS.list}?${queryParams.toString()}`;
    return apiClient.get<FullArtist[]>(url);
  },

  async getBySlug(slug: string): Promise<ApiResponse<FullArtist>> {
    return apiClient.get<FullArtist>(ARTIST_ENDPOINTS.detail(slug));
  },

  async create(data: CreateArtistInput): Promise<ApiResponse<FullArtist>> {
    return apiClient.post<FullArtist>(ARTIST_ENDPOINTS.create, data);
  },

  async update(
    slug: string,
    data: UpdateArtistInput
  ): Promise<ApiResponse<FullArtist>> {
    return apiClient.patch<FullArtist>(ARTIST_ENDPOINTS.update(slug), data);
  },

  async delete(slug: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(ARTIST_ENDPOINTS.delete(slug));
  },
};
