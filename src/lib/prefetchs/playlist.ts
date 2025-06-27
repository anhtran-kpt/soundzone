import { QueryClient } from "@tanstack/react-query";
import { playlistApi } from "@/lib/api-client";
import { playlistKeys } from "@/lib/query-keys";

export const prefetchPlaylistDetail = async (
  qc: QueryClient,
  playlistSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: playlistKeys.detail(playlistSlug),
    queryFn: ({ signal }) => playlistApi.getBySlug(playlistSlug, signal),
  });
};
