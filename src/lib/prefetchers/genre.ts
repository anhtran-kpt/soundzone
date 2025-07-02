import { QueryClient } from "@tanstack/react-query";
import { getGenre, getGenres } from "@/lib/queries";
import { genreKeys } from "@/lib/query-keys";

export const prefetchGenre = async (qc: QueryClient, genreId: string) => {
  await qc.prefetchQuery({
    queryKey: genreKeys.detail(genreId),
    queryFn: ({ signal }) => getGenre(genreId, signal),
  });
};

export const prefetchGenres = async (qc: QueryClient) => {
  await qc.prefetchQuery({
    queryKey: genreKeys.all,
    queryFn: ({ signal }) => getGenres(signal),
  });
};
