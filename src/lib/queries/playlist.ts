import { useQuery } from "@tanstack/react-query";
import { playlistKeys } from "./keys";
import { apiClient } from "../api/client/api-client";
import { FullPlaylist } from "../types";
import { PLAYLIST_ENDPOINTS } from "../endpoints";

export function usePlaylists(params?: { limit?: number }) {
  return useQuery({
    queryKey: playlistKeys.lists(),
    queryFn: () => {
      const queryParams = new URLSearchParams();
      if (params?.limit) {
        queryParams.append("limit", params.limit.toString());
      }

      const url = `${PLAYLIST_ENDPOINTS.list}?${queryParams.toString()}`;
      return apiClient.get<FullPlaylist[]>(url);
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch Playlists");
      }
      return response.data;
    },
  });
}

export function usePlaylist(id: string) {
  return useQuery({
    queryKey: playlistKeys.detail(id),
    queryFn: () => {
      return apiClient.get<FullPlaylist>(PLAYLIST_ENDPOINTS.detail(id));
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch Playlist");
      }
      return response.data;
    },
    enabled: !!id,
  });
}
