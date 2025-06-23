import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { FullAlbum } from "@/lib/types";
import { apiClient } from "@/lib/api/client/api-client";
import { ALBUM_ENDPOINTS } from "@/lib/endpoints";

export const albumKeys = {
  all: ["albums"] as const,
  lists: (params: { limit?: number } = {}) =>
    [...albumKeys.all, "list", params] as const,
  list: (filters: Record<string, unknown>) =>
    [...albumKeys.lists({}), { filters }] as const,
  details: () => [...albumKeys.all, "detail"] as const,
  detail: (slug: string) => [...albumKeys.details(), slug] as const,
};

export function useAlbums(params?: { limit?: number }) {
  return useQuery({
    queryKey: albumKeys.lists(params),
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
    queryKey: albumKeys.detail(slug),
    queryFn: ({ signal }) =>
      apiClient.get<FullAlbum>(ALBUM_ENDPOINTS.detail(slug), {
        signal,
      }),
    enabled: !!slug,
    placeholderData: keepPreviousData,
  });
}
