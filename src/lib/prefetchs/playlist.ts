import { QueryClient } from "@tanstack/react-query";
import { getPlaylistBySlug } from "@/lib/queries";
import { playlistKeys } from "@/lib/query-keys";

export const prefetchPlaylistBySlug = async (
  qc: QueryClient,
  playlistSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: playlistKeys.detail(playlistSlug),
    queryFn: ({ signal }) => getPlaylistBySlug(playlistSlug, signal),
  });
};
