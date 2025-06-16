import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { GENRE_ENDPOINTS } from "@/lib/endpoints";
import { FullGenre } from "@/lib/types";

export async function getAllGenres(params?: {
  limit?: number;
}): Promise<ApiResponse<FullGenre[]>> {
  const queryParams = new URLSearchParams();
  if (params?.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  const url = `${GENRE_ENDPOINTS.list}?${queryParams.toString()}`;
  return apiClient.get<FullGenre[]>(url);
}

export async function getGenreById(
  id: string
): Promise<ApiResponse<FullGenre>> {
  return apiClient.get<FullGenre>(GENRE_ENDPOINTS.detail(id));
}
