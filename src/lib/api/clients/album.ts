import { ApiResponse } from "@/lib/server/api-response";
import { apiClient } from "@/lib/api/config/client/api-client";
import { Album } from "@/schemas";
import { ALBUM_ENDPOINTS } from "@/config/endpoints";
import { CreateAlbumDto, UpdateAlbumDto } from "@/schemas";

export const getAllAlbums = async (params?: {
  limit?: number;
}): Promise<ApiResponse<Album[]>> => {
  const queryParams = new URLSearchParams();
  if (params?.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  const url = `${ALBUM_ENDPOINTS.list}?${queryParams.toString()}`;
  return apiClient.get<Album[]>(url);
};

export const getAlbumBySlug = async (
  slug: string
): Promise<ApiResponse<Album>> => {
  return apiClient.get<Album>(ALBUM_ENDPOINTS.detail(slug));
};

export const createAlbum = async (
  data: CreateAlbumDto
): Promise<ApiResponse<Album>> => {
  return apiClient.post<Album>(ALBUM_ENDPOINTS.create, data);
};

export const updateAlbum = async (
  slug: string,
  data: UpdateAlbumDto
): Promise<ApiResponse<Album>> => {
  return apiClient.patch<Album>(ALBUM_ENDPOINTS.update(slug), data);
};

export const deleteAlbum = async (slug: string): Promise<ApiResponse<void>> => {
  return apiClient.delete<void>(ALBUM_ENDPOINTS.delete(slug));
};
