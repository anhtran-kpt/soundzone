import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { FullAlbum } from "../types";
import { apiClient } from "../api/client/api-client";
import { ALBUM_ENDPOINTS } from "../endpoints";

const keys = {
  all: ["albums"] as const,
  lists: (params: { limit?: number } = {}) =>
    [...keys.all, "list", params] as const,
  list: (filters: Record<string, unknown>) =>
    [...keys.lists({}), { filters }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (slug: string) => [...keys.details(), slug] as const,
};

export function useAlbums(params?: { limit?: number }) {
  return useQuery({
    queryKey: keys.lists(params),
    queryFn: ({ signal }) =>
      apiClient.get<FullAlbum[]>(ALBUM_ENDPOINTS.list, {
        params,
        signal,
      }),
    placeholderData: keepPreviousData,
  });
}

export function useAlbum(slug: string) {
  return useQuery({
    queryKey: keys.detail(slug),
    queryFn: ({ signal }) =>
      apiClient.get<FullAlbum>(ALBUM_ENDPOINTS.detail(slug), {
        signal,
      }),
    enabled: !!slug,
    placeholderData: keepPreviousData,
  });
}
