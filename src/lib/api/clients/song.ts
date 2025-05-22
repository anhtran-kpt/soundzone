import { ApiResponse } from "@/lib/server/api-response";
import { apiClient } from "@/lib/api/config/client/api-client";
import { SONG_ENDPOINTS } from "@/config/endpoints";
import { CreateSongDto, UpdateSongDto } from "@/schemas";
import { Song } from "@/app/generated/prisma";

export const getAllSongs = async (params?: {
  limit?: number;
}): Promise<ApiResponse<Song[]>> => {
  const queryParams = new URLSearchParams();
  if (params?.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  const url = `${SONG_ENDPOINTS.list}?${queryParams.toString()}`;
  return apiClient.get<Song[]>(url);
};

export const getSongBySlug = async (
  slug: string
): Promise<ApiResponse<Song>> => {
  return apiClient.get<Song>(SONG_ENDPOINTS.detail(slug));
};

export const createSong = async (
  data: CreateSongDto
): Promise<ApiResponse<Song>> => {
  return apiClient.post<Song>(SONG_ENDPOINTS.create, data);
};

export const updateSong = async (
  slug: string,
  data: UpdateSongDto
): Promise<ApiResponse<Song>> => {
  return apiClient.patch<Song>(SONG_ENDPOINTS.update(slug), data);
};

export const deleteSong = async (slug: string): Promise<ApiResponse<void>> => {
  return apiClient.delete<void>(SONG_ENDPOINTS.delete(slug));
};
