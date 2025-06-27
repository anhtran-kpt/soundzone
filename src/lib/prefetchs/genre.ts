import { QueryClient } from "@tanstack/react-query";
import { genreKeys } from "@/lib/query-keys";
import { genreApi } from "@/lib/api-client";

export const prefetchgenreDetail = async (
  qc: QueryClient,
  genreSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: genreKeys.detail(genreSlug),
    queryFn: ({ signal }) => genreApi.getBySlug(genreSlug, signal),
  });
};
