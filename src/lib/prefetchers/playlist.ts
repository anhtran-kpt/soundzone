import { QueryClient } from "@tanstack/react-query";
import { getPlaylist } from "@/lib/queries";
import { playlistKeys } from "@/lib/query-keys";

export const prefetchPlaylist = async (qc: QueryClient, playlistId: string) => {
  await qc.prefetchQuery({
    queryKey: playlistKeys.detail(playlistId),
    queryFn: ({ signal }) => getPlaylist(playlistId, signal),
  });
};
