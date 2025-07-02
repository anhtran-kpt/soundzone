import { QueryClient } from "@tanstack/react-query";
import { getAlbum } from "@/lib/queries";
import { albumKeys } from "@/lib/query-keys";

export const prefetchAlbum = async (qc: QueryClient, albumId: string) => {
  await qc.prefetchQuery({
    queryKey: albumKeys.detail(albumId),
    queryFn: ({ signal }) => getAlbum(albumId, signal),
  });
};
