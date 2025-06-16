import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { FullAlbum } from "@/lib/types";
import { ALBUM_ENDPOINTS } from "@/lib/endpoints";

export async function getAllAlbums(params?: {
  limit?: number;
}): Promise<ApiResponse<FullAlbum[]>> {
  const queryParams = new URLSearchParams();
  if (params?.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  const url = `${ALBUM_ENDPOINTS.list}?${queryParams.toString()}`;
  return apiClient.get<FullAlbum[]>(url);
}

export async function getAlbumById(
  id: string
): Promise<ApiResponse<FullAlbum>> {
  return apiClient.get<FullAlbum>(ALBUM_ENDPOINTS.detail(id));
}
