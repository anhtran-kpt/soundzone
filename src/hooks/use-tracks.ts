import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getTrackBySlug, getTracks } from "@/lib/queries";
import { trackKeys } from "@/lib/query-keys";

export function useTracksQuery() {
  return useQuery({
    queryKey: trackKeys.all,
    queryFn: ({ signal }) => getTracks(signal),
    placeholderData: keepPreviousData,
  });
}

export function useTrackQuery(trackSlug: string) {
  return useQuery({
    queryKey: trackKeys.detail(trackSlug),
    queryFn: ({ signal }) => getTrackBySlug(trackSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!trackSlug,
  });
}
