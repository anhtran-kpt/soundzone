import { QueryClient } from "@tanstack/react-query";
import { artistKeys } from "@/lib/query-keys";
import { artistApi } from "@/lib/api-client";

export const prefetchArtistDetail = async (
  qc: QueryClient,
  artistSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: artistKeys.detail(artistSlug),
    queryFn: ({ signal }) => artistApi.getBySlug(artistSlug, signal),
  });
};
