import { apiClient } from "@/lib/api/client/api-client";
import { FullGenre } from "../types";
import { GENRE_ENDPOINTS } from "../endpoints";

export const genreKeys = {
  all: ["genres"] as const,
  list: (params?: { limit?: number; page?: number }) =>
    [...genreKeys.all, params] as const,
  detail: (slug: string) => [...genreKeys.all, slug] as const,
};

export async function fetchGenres(
  params?: { limit?: number; page?: number },
  signal?: AbortSignal
) {
  return await apiClient.get<FullGenre[]>(GENRE_ENDPOINTS.list(params), {
    params,
    signal,
  });
}

export async function fetchGenreBySlug(slug: string, signal?: AbortSignal) {
  return await apiClient.get<FullGenre>(GENRE_ENDPOINTS.detail(slug), {
    signal,
  });
}
