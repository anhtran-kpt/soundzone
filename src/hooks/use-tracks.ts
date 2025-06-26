import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
  keepPreviousData,
} from "@tanstack/react-query";
import { trackApi, ApiClientError } from "@/lib/api-client";
import { queryKeys, invalidateQueries } from "@/lib/query-keys";
import { toast } from "sonner";

export function useTracksQuery(
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: queryKeys.tracksList(),
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
    queryKey: queryKeys.trackDetail(trackSlug),
    queryFn: ({ signal }) => trackApi.getTrackBySlug(trackSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!trackSlug,
    ...options,
  });
}

export function useCreateTrackMutation(
  options?: UseMutationOptions<
    unknown,
    ApiClientError,
    Parameters<typeof trackApi.createTrack>[0]
  >
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: trackApi.createTrack,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: invalidateQueries.tracks(),
      });

      // queryClient.setQueryData(queryKeys.tracksDetail(data.track.id), data);
      toast.success("Track created successfully");
      options?.onSuccess?.(data, variables, undefined);
    },
    onError: (error, variables, context) => {
      toast.error(`Create track failed: ${error.message}`);
      console.error("Create track failed:", error);
      options?.onError?.(error, variables, context);
    },
    ...options,
  });
}

export function usePrefetchTrack() {
  const queryClient = useQueryClient();

  return (trackSlug: string) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.trackDetail(trackSlug),
      queryFn: ({ signal }) => trackApi.getTrackBySlug(trackSlug, signal),
    });
  };
}
