import { QueryClient } from "@tanstack/react-query";
import { albumKeys } from "../query-keys";
import { albumApi } from "../api-client";

export const prefetchAlbumDetail = async (
  qc: QueryClient,
  albumSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: albumKeys.detail(albumSlug),
    queryFn: ({ signal }) => albumApi.getAlbumBySlug(albumSlug, signal),
  });
};
