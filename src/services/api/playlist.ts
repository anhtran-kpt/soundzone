import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { FullPlaylist } from "@/lib/types";
import { PLAYLIST_ENDPOINTS } from "@/lib/endpoints";

export async function getAllPlaylists(params?: {
  limit?: number;
}): Promise<ApiResponse<FullPlaylist[]>> {
  const queryParams = new URLSearchParams();
  if (params?.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  const url = `${PLAYLIST_ENDPOINTS.list}?${queryParams.toString()}`;
  return apiClient.get<FullPlaylist[]>(url);
}

export async function getPlaylistById(
  id: string
): Promise<ApiResponse<FullPlaylist>> {
  return apiClient.get<FullPlaylist>(PLAYLIST_ENDPOINTS.detail(id));
}
