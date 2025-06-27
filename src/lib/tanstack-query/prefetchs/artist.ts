import { QueryClient } from "@tanstack/react-query";
import { artistKeys, getArtistBySlug } from "@/lib/tanstack-query";

export const prefetchArtistDetail = async (
  qc: QueryClient,
  artistSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: artistKeys.detail(artistSlug),
    queryFn: ({ signal }) => getArtistBySlug(artistSlug, signal),
  });
};
