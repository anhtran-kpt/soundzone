import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client/api-client";
import { FullTrack } from "../types";

const keys = {
  all: ["tracks"] as const,
  lists: (params: { limit?: number } = {}) =>
    [...keys.all, "list", params] as const,
  list: (filters: Record<string, unknown>) =>
    [...keys.lists({}), { filters }] as const,
  popular: (params: { limit?: number } = {}) =>
    [...keys.all, "popular", params] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (slug: string) => [...keys.details(), slug] as const,
};

const endpoints = {
  list: "/tracks",
  detail: (slug: string) => `/tracks/${slug}`,
  popular: (slug: string) => `/tracks/popular/${slug}`,
  update: (slug: string) => `/tracks/${slug}`,
  delete: (slug: string) => `/tracks/${slug}`,
};

export function useTracks(params?: { limit?: number }) {
  return useQuery({
    queryKey: keys.lists(params),
    queryFn: ({ signal }) =>
      apiClient.get<FullTrack[]>(endpoints.list, {
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
      apiClient.get<FullTrack>(endpoints.detail(slug), {
        signal,
      }),
    enabled: !!slug,
    placeholderData: keepPreviousData,
  });
}

export function useTrackPopular(params?: { limit?: number }) {
  return useQuery({
    queryKey: keys.popular(params),
    queryFn: ({ signal }) =>
      apiClient.get<FullTrack[]>(endpoints.popular, {
        params,
        signal,
      }),
    placeholderData: keepPreviousData,
  });
}
