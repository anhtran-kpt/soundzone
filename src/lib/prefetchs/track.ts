import { QueryClient } from "@tanstack/react-query";
import { trackKeys } from "@/lib/query-keys";
import { trackApi } from "@/lib/api-client";

export const prefetchTrackDetail = async (
  qc: QueryClient,
  trackSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: trackKeys.detail(trackSlug),
    queryFn: ({ signal }) => trackApi.getBySlug(trackSlug, signal),
  });
};
