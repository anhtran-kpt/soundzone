import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client/api-client";
import { FullArtist } from "../types";
import { ARTIST_ENDPOINTS } from "../endpoints";

export const keys = {
  all: ["artists"] as const,
  lists: (params: { limit?: number } = {}) =>
    [...keys.all, "list", params] as const,
  list: (filters: Record<string, unknown>) =>
    [...keys.lists({}), { filters }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (id: string) => [...keys.details(), id] as const,
};

export function useArtists(params?: { limit?: number }) {
  return useQuery({
    queryKey: keys.lists(params),
    queryFn: ({ signal }) =>
      apiClient.get<FullArtist[]>(ARTIST_ENDPOINTS.list, {
        params,
        signal,
      }),
    placeholderData: keepPreviousData,
  });
}

export function useArtist(slug: string) {
  return useQuery({
    queryKey: keys.detail(slug),
    queryFn: ({ signal }) =>
      apiClient.get<FullArtist>(ARTIST_ENDPOINTS.detail(slug), {
        signal,
      }),
    enabled: !!slug,
    placeholderData: keepPreviousData,
  });
}
