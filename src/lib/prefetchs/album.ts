import { QueryClient } from "@tanstack/react-query";
import { albumKeys } from "@/lib/query-keys";
import { albumApi } from "@/lib/api-client";

export const prefetchAlbumDetail = async (
  qc: QueryClient,
  albumSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: albumKeys.detail(albumSlug),
    queryFn: ({ signal }) => albumApi.getBySlug(albumSlug, signal),
  });
};
