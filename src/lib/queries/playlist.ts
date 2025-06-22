import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client/api-client";
import { FullPlaylist } from "../types";
import { PLAYLIST_ENDPOINTS } from "../endpoints";

const keys = {
  all: ["playlists"] as const,
  lists: (params: { limit?: number } = {}) =>
    [...keys.all, "list", params] as const,
  list: (filters: Record<string, unknown>) =>
    [...keys.lists({}), { filters }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (slug: string) => [...keys.details(), slug] as const,
};

export function usePlaylists(params?: { limit?: number }) {
  return useQuery({
    queryKey: keys.lists(params),
    queryFn: ({ signal }) =>
      apiClient.get<FullPlaylist[]>(PLAYLIST_ENDPOINTS.list, {
        params,
        signal,
      }),
    placeholderData: keepPreviousData,
  });
}

export function usePlaylist(slug: string) {
  return useQuery({
    queryKey: keys.detail(slug),
    queryFn: ({ signal }) =>
      apiClient.get<FullPlaylist>(PLAYLIST_ENDPOINTS.detail(slug), {
        signal,
      }),
    enabled: !!slug,
    placeholderData: keepPreviousData,
  });
}
