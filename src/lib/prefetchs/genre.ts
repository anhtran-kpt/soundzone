import { QueryClient } from "@tanstack/react-query";
import { genreKeys } from "../query-keys";
import { genreApi } from "../api-client";

export const prefetchgenreDetail = async (
  qc: QueryClient,
  genreSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: genreKeys.detail(genreSlug),
    queryFn: ({ signal }) => genreApi.getGenreBySlug(genreSlug, signal),
  });
};
