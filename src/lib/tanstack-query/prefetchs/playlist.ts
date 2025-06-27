import { QueryClient } from "@tanstack/react-query";
import { getPlaylistBySlug, playlistKeys } from "@/lib/tanstack-query";

export const prefetchPlaylistDetail = async (
  qc: QueryClient,
  playlistSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: playlistKeys.detail(playlistSlug),
    queryFn: ({ signal }) => getPlaylistBySlug(playlistSlug, signal),
  });
};
