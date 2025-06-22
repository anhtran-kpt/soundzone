import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client/api-client";
import { TRACK_ENDPOINTS } from "../endpoints";
import { FullTrack } from "../types";

const keys = {
  all: ["tracks"] as const,
  lists: (params: { limit?: number } = {}) =>
    [...keys.all, "list", params] as const,
  list: (filters: Record<string, unknown>) =>
    [...keys.lists({}), { filters }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (slug: string) => [...keys.details(), slug] as const,
};

export function useTracks(params?: { limit?: number }) {
  return useQuery({
    queryKey: keys.lists(params),
    queryFn: ({ signal }) =>
      apiClient.get<FullTrack[]>(TRACK_ENDPOINTS.list, {
        params,
        signal,
      }),
    placeholderData: keepPreviousData,
  });
}

export function useTrack(slug: string) {
  return useQuery({
    queryKey: keys.detail(slug),
    queryFn: ({ signal }) =>
      apiClient.get<FullTrack>(TRACK_ENDPOINTS.detail(slug), {
        signal,
      }),
    enabled: !!slug,
    placeholderData: keepPreviousData,
  });
}
