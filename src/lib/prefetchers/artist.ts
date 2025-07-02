import { QueryClient } from "@tanstack/react-query";
import { getArtist } from "@/lib/queries";
import { artistKeys } from "@/lib/query-keys";

export const prefetchArtist = async (qc: QueryClient, artistId: string) => {
  await qc.prefetchQuery({
    queryKey: artistKeys.detail(artistId),
    queryFn: ({ signal }) => getArtist(artistId, signal),
  });
};
