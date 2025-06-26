import {
  useQuery,
  UseQueryOptions,
  keepPreviousData,
} from "@tanstack/react-query";
import { trackApi } from "@/lib/api-client";
import { trackKeys } from "@/lib/query-keys";

export function useTracksQuery(
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: trackKeys.all,
    queryFn: ({ signal }) => trackApi.getTracks(signal),
    placeholderData: keepPreviousData,
    ...options,
  });
}

export function useTrackQuery(
  trackSlug: string,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: trackKeys.detail(trackSlug),
    queryFn: ({ signal }) => trackApi.getTrackBySlug(trackSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!trackSlug,
    ...options,
  });
}
