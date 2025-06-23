import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchGenreBySlug, fetchGenres, genreKeys } from "@/lib/queries/genre";

export function useFetchGenres(params?: { limit?: number; page?: number }) {
  return useQuery({
    queryKey: genreKeys.list(params),
    queryFn: ({ signal }) => fetchGenres(params, signal),
    placeholderData: keepPreviousData,
  });
}

export function useFetchGenreBySlug(slug: string) {
  return useQuery({
    queryKey: genreKeys.detail(slug),
    queryFn: ({ signal }) => fetchGenreBySlug(slug, signal),
    placeholderData: keepPreviousData,
  });
}
