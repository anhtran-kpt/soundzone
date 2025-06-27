import { QueryClient } from "@tanstack/react-query";
import { albumKeys, getAlbumBySlug } from "@/lib/tanstack-query";

export const prefetchAlbumDetail = async (
  qc: QueryClient,
  albumSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: albumKeys.detail(albumSlug),
    queryFn: ({ signal }) => getAlbumBySlug(albumSlug, signal),
  });
};
