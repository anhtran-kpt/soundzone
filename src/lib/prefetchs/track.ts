import { QueryClient } from "@tanstack/react-query";
import { getTrackBySlug } from "@/lib/queries";
import { trackKeys } from "@/lib/query-keys";

export const prefetchTrackBySlug = async (
  qc: QueryClient,
  trackSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: trackKeys.detail(trackSlug),
    queryFn: ({ signal }) => getTrackBySlug(trackSlug, signal),
  });
};
