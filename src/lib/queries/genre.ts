import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GENRE_ENDPOINTS } from "../endpoints";
import { FullGenre } from "../types";
import { apiClient } from "../api/client/api-client";

const keys = {
  all: ["genres"] as const,
  lists: (params: { limit?: number } = {}) =>
    [...keys.all, "list", params] as const,
  list: (filters: Record<string, unknown>) =>
    [...keys.lists({}), { filters }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (id: string) => [...keys.details(), id] as const,
};

export function useGenres(params?: { limit?: number }) {
  return useQuery({
    queryKey: keys.lists(params),
    queryFn: ({ signal }) =>
      apiClient.get<FullGenre[]>(GENRE_ENDPOINTS.list, {
        params,
        signal,
      }),
    placeholderData: keepPreviousData,
  });
}

export function useGenre(id: string) {
  return useQuery({
    queryKey: keys.detail(id),
    queryFn: ({ signal }) =>
      apiClient.get<FullGenre>(GENRE_ENDPOINTS.detail(id), { signal }),
    enabled: !!id,
    placeholderData: keepPreviousData,
  });
}
