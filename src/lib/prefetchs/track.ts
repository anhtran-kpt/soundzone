import { QueryClient } from "@tanstack/react-query";
import { trackKeys } from "../query-keys";
import { trackApi } from "../api-client";

export const prefetchTrackDetail = async (
  qc: QueryClient,
  trackSlug: string
) => {
  await qc.prefetchQuery({
    queryKey: trackKeys.detail(trackSlug),
    queryFn: ({ signal }) => trackApi.getTrackBySlug(trackSlug, signal),
  });
};
