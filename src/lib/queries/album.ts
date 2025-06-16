import { useQuery } from "@tanstack/react-query";
import { albumKeys } from "./keys";
import { FullAlbum } from "../types";
import { apiClient } from "../api/client/api-client";
import { ALBUM_ENDPOINTS } from "../endpoints";

export function useAlbums(params?: { limit?: number }) {
  return useQuery({
    queryKey: albumKeys.lists(),
    queryFn: () => {
      const queryParams = new URLSearchParams();
      if (params?.limit) {
        queryParams.append("limit", params.limit.toString());
      }

      const url = `${ALBUM_ENDPOINTS.list}?${queryParams.toString()}`;
      return apiClient.get<FullAlbum[]>(url);
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch albums");
      }
      return response.data;
    },
  });
}

export function useAlbum(id: string) {
  return useQuery({
    queryKey: albumKeys.detail(id),
    queryFn: () => {
      return apiClient.get<FullAlbum>(ALBUM_ENDPOINTS.detail(id));
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch album");
      }
      return response.data;
    },
    enabled: !!id,
  });
}
