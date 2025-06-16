import { useQuery } from "@tanstack/react-query";
import { genreKeys } from "./keys";
import { GENRE_ENDPOINTS } from "../endpoints";
import { FullGenre } from "../types";
import { apiClient } from "../api/client/api-client";

export function useGenres(params?: { limit?: number }) {
  return useQuery({
    queryKey: genreKeys.lists(),
    queryFn: () => {
      const queryParams = new URLSearchParams();
      if (params?.limit) {
        queryParams.append("limit", params.limit.toString());
      }

      const url = `${GENRE_ENDPOINTS.list}?${queryParams.toString()}`;
      return apiClient.get<FullGenre[]>(url);
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch genres");
      }
      return response.data;
    },
  });
}

export function useGenre(id: string) {
  return useQuery({
    queryKey: genreKeys.detail(id),
    queryFn: () => {
      return apiClient.get<FullGenre>(GENRE_ENDPOINTS.detail(id));
    },
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch genre");
      }
      return response.data;
    },
    enabled: !!id,
  });
}
