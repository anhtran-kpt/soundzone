import { QueryClient } from "@tanstack/react-query";
import { getArtistBySlug } from "@/lib/queries";
import { artistKeys } from "@/lib/query-keys";

export const prefetchArtistBySlug = async (
  qc: QueryClient,
  artistSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: artistKeys.detail(artistSlug),
    queryFn: ({ signal }) => getArtistBySlug(artistSlug, signal),
  });
};
