import { QueryClient } from "@tanstack/react-query";
import { getGenreBySlug } from "@/lib/queries";
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
