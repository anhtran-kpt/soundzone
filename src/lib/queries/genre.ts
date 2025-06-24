import { apiClient } from "@/lib/api-client";
import { PaginationParams } from "@/lib/type";
import { FullGenre } from "@/lib/types";

export const genreKeys = {
  all: ["genres"] as const,
  list: (params?: PaginationParams) => [...genreKeys.all, params] as const,
  detail: (slug: string) => [...genreKeys.all, slug] as const,
};

export async function fetchGenres(
  params?: PaginationParams,
  signal?: AbortSignal
) {
  return await apiClient.get<FullGenre[]>("/genres", {
    params,
    signal,
  });
}

export async function fetchGenreBySlug(
  genreSlug: string,
  signal?: AbortSignal
) {
  return await apiClient.get<FullGenre>(`/genres/${genreSlug}`, {
    signal,
  });
}
