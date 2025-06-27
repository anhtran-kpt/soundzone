import { QueryClient } from "@tanstack/react-query";
import { genreKeys, getGenreBySlug } from "@/lib/tanstack-query";

export const prefetchgenreDetail = async (
  qc: QueryClient,
  genreSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: genreKeys.detail(genreSlug),
    queryFn: ({ signal }) => getGenreBySlug(genreSlug, signal),
  });
};
