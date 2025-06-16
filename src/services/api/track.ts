import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { TRACK_ENDPOINTS } from "@/lib/endpoints";
import { FullTrack } from "@/lib/types";

export async function getAllTracks(params?: {
  limit?: number;
}): Promise<ApiResponse<FullTrack[]>> {
  const queryParams = new URLSearchParams();
  if (params?.limit) {
    queryParams.append("limit", params.limit.toString());
  }

  const url = `${TRACK_ENDPOINTS.list}?${queryParams.toString()}`;
  return apiClient.get<FullTrack[]>(url);
}

export async function getTrackById(
  id: string
): Promise<ApiResponse<FullTrack>> {
  return apiClient.get<FullTrack>(TRACK_ENDPOINTS.detail(id));
}
