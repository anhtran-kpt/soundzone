import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getTrack, getTracks } from "@/lib/queries";
import { trackKeys } from "@/lib/query-keys";

export function useTracksQuery() {
  return useQuery({
    queryKey: trackKeys.all,
    queryFn: ({ signal }) => getTracks(signal),
    placeholderData: keepPreviousData,
  });
}

export function useTrackQuery(trackId: string) {
  return useQuery({
    queryKey: trackKeys.detail(trackId),
    queryFn: ({ signal }) => getTrack(trackId, signal),
    placeholderData: keepPreviousData,
    enabled: !!trackId,
  });
}
