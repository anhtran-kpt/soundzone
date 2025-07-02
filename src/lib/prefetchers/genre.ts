import { QueryClient } from "@tanstack/react-query";
import { getGenreBySlug, getGenres } from "@/lib/queries";
import { genreKeys } from "@/lib/query-keys";

export const prefetchGenreBySlug = async (
  qc: QueryClient,
  genreSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: genreKeys.detail(genreSlug),
    queryFn: ({ signal }) => getGenreBySlug(genreSlug, signal),
  });
};

export const prefetchGenres = async (qc: QueryClient) => {
  await qc.prefetchQuery({
    queryKey: genreKeys.all,
    queryFn: ({ signal }) => getGenres(signal),
  });
};
