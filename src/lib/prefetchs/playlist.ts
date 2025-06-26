import { QueryClient } from "@tanstack/react-query";
import { playlistApi } from "../api-client";
import { playlistKeys } from "../query-keys";

export const prefetchPlaylistDetail = async (
  qc: QueryClient,
  playlistSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: playlistKeys.detail(playlistSlug),
    queryFn: ({ signal }) =>
      playlistApi.getPlaylistBySlug(playlistSlug, signal),
  });
};
