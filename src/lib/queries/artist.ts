import { useQuery } from "@tanstack/react-query";
import { artistKeys } from "./keys";
import { apiClient } from "../api/client/api-client";
import { FullArtist } from "../types";
import { ARTIST_ENDPOINTS } from "../endpoints";

export function useArtists(params?: { limit?: number }) {
  return useQuery({
    queryKey: artistKeys.lists(),
    queryFn: () => {
      const queryParams = new URLSearchParams();
      if (params?.limit) {
        queryParams.append("limit", params.limit.toString());
      }

      const url = `${ARTIST_ENDPOINTS.list}?${queryParams.toString()}`;
      return apiClient.get<FullArtist[]>(url);
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch artists");
      }
      return response.data;
    },
  });
}

export function useArtist(id: string) {
  return useQuery({
    queryKey: artistKeys.detail(id),
    queryFn: () => {
      return apiClient.get<FullArtist>(ARTIST_ENDPOINTS.detail(id));
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch artist");
      }
      return response.data;
    },
    enabled: !!id,
  });
}
