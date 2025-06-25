import { apiClient } from "@/lib/api-client";
import { FullGenre } from "@/lib/types";

export const genreKeys = {
  list: (params: { offset: number; limit: number }) =>
    ["genres", "paginated", params.offset, params.limit] as const,
  detail: (slug: string) => ["genres", slug] as const,
};

export async function fetchGenres(
  params: { offset: number; limit: number },
  signal: AbortSignal
) {
  return await apiClient.get<FullGenre[]>("/genres", {
    params,
    signal,
  });
}

export async function fetchGenreBySlug(genreSlug: string, signal: AbortSignal) {
  return await apiClient.get<FullGenre>(`/genres/${genreSlug}`, {
    signal,
  });
}
