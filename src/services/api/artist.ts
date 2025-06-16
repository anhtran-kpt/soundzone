import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { ARTIST_ENDPOINTS } from "@/lib/endpoints";
import { FullArtist } from "@/lib/types";

export async function getAllArtists(params?: {
  limit?: number;
}): Promise<ApiResponse<FullArtist[]>> {
  const queryParams = new URLSearchParams();
  if (params?.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  const url = `${ARTIST_ENDPOINTS.list}?${queryParams.toString()}`;
  return apiClient.get<FullArtist[]>(url);
}

export async function getArtistById(
  id: string
): Promise<ApiResponse<FullArtist>> {
  return apiClient.get<FullArtist>(ARTIST_ENDPOINTS.detail(id));
}
