import { QueryClient } from "@tanstack/react-query";
import { getTrackBySlug, trackKeys } from "@/lib/tanstack-query";

export const prefetchTrackDetail = async (
  qc: QueryClient,
  trackSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: trackKeys.detail(trackSlug),
    queryFn: ({ signal }) => getTrackBySlug(trackSlug, signal),
  });
};
