import { ApiResponse } from "@/lib/server/api-response";
import { apiClient } from "@/lib/api/config/client/api-client";
import { Artist } from "@/schemas";
import { ARTIST_ENDPOINTS } from "@/config/endpoints";
import { CreateArtistDto, UpdateArtistDto } from "@/schemas";

export const getAllArtists = async (params?: {
  limit?: number;
}): Promise<ApiResponse<Artist[]>> => {
  const queryParams = new URLSearchParams();
  if (params?.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  const url = `${ARTIST_ENDPOINTS.list}?${queryParams.toString()}`;
  return apiClient.get<Artist[]>(url);
};

export const getArtistBySlug = async (
  slug: string
): Promise<ApiResponse<Artist>> => {
  return apiClient.get<Artist>(ARTIST_ENDPOINTS.detail(slug));
};

export const createArtist = async (
  data: CreateArtistDto
): Promise<ApiResponse<Artist>> => {
  return apiClient.post<Artist>(ARTIST_ENDPOINTS.create, data);
};

export const updateArtist = async (
  slug: string,
  data: UpdateArtistDto
): Promise<ApiResponse<Artist>> => {
  return apiClient.patch<Artist>(ARTIST_ENDPOINTS.update(slug), data);
};

export const deleteArtist = async (
  slug: string
): Promise<ApiResponse<void>> => {
  return apiClient.delete<void>(ARTIST_ENDPOINTS.delete(slug));
};
