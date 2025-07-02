import { QueryClient } from "@tanstack/react-query";
import { getTrack } from "@/lib/queries";
import { trackKeys } from "@/lib/query-keys";

export const prefetchTrack = async (qc: QueryClient, trackId: string) => {
  await qc.prefetchQuery({
    queryKey: trackKeys.detail(trackId),
    queryFn: ({ signal }) => getTrack(trackId, signal),
  });
};
