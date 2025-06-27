import { QueryClient } from "@tanstack/react-query";
import { getAlbumBySlug } from "@/lib/queries";
import { albumKeys } from "@/lib/query-keys";

export const prefetchAlbumBySlug = async (
  qc: QueryClient,
  albumSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: albumKeys.detail(albumSlug),
    queryFn: ({ signal }) => getAlbumBySlug(albumSlug, signal),
  });
};
