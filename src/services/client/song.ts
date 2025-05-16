import { ApiResponse } from "@/lib/server/api-response";
import { apiClient } from "@/lib/api/api-client";
import { Song } from "@/app/generated/prisma";
import { SONG_ENDPOINTS } from "@/config/endpoints";
import { CreateSongDto, UpdateSongDto } from "@/schemas";

export const songClientService = {
  async getAll(params?: { limit?: number }): Promise<ApiResponse<Song[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${SONG_ENDPOINTS.list}?${queryParams.toString()}`;
    return apiClient.get<Song[]>(url);
  },

  async getBySlug(slug: string): Promise<ApiResponse<Song>> {
    return apiClient.get<Song>(SONG_ENDPOINTS.detail(slug));
  },

  async create(data: CreateSongDto): Promise<ApiResponse<Song>> {
    return apiClient.post<Song>(SONG_ENDPOINTS.create, data);
  },

  async update(slug: string, data: UpdateSongDto): Promise<ApiResponse<Song>> {
    return apiClient.patch<Song>(SONG_ENDPOINTS.update(slug), data);
  },

  async delete(slug: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(SONG_ENDPOINTS.delete(slug));
  },
};
