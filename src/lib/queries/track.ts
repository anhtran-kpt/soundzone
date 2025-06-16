import { useQuery } from "@tanstack/react-query";
import { trackKeys } from "./keys";
import { apiClient } from "../api/client/api-client";
import { TRACK_ENDPOINTS } from "../endpoints";
import { FullTrack } from "../types";

export function useTracks(params?: { limit?: number }) {
  return useQuery({
    queryKey: trackKeys.lists(),
    queryFn: () => {
      const queryParams = new URLSearchParams();
      if (params?.limit) {
        queryParams.append("limit", params.limit.toString());
      }

      const url = `${TRACK_ENDPOINTS.list}?${queryParams.toString()}`;
      return apiClient.get<FullTrack[]>(url);
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch tracks");
      }
      return response.data;
    },
  });
}

export function useTrack(id: string) {
  return useQuery({
    queryKey: trackKeys.detail(id),
    queryFn: () => {
      return apiClient.get<FullTrack>(TRACK_ENDPOINTS.detail(id));
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch track");
      }
      return response.data;
    },
    enabled: !!id,
  });
}
