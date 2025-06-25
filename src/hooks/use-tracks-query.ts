import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import { artistApi, ApiClientError } from "@/lib/api-client";
import {
  queryKeys,
  invalidateQueries,
  TrackListParams,
} from "@/lib/query-keys";
import { toast } from "sonner";

export function useTracksQuery(
  params?: TrackListParams,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: queryKeys.artistsList(params),
    queryFn: () => artistApi.getTracks(params),
    ...options,
  });
}

export function useTrackQuery(
  slug: string,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: queryKeys.artistsDetail(slug),
    queryFn: () => artistApi.getTrack(slug),
    enabled: !!slug,
    ...options,
  });
}

// export function useTracksInfiniteQuery(params?: {
//   limit?: number;
//   q?: string;
//   sortBy?: string;
//   sortOrder?: "asc" | "desc";
// }) {
//   return useInfiniteQuery({
//     queryKey: queryKeys.artistsInfinite(params),
//     queryFn: ({ pageParam = 1 }) =>
//       artistApi.getTracks({ ...params, page: pageParam }),
//     getNextPageParam: (lastPage) => {
//       const { pagination } = lastPage.meta || {};
//       if (!pagination) return undefined;

//       return pagination.page < pagination.totalPages
//         ? pagination.page + 1
//         : undefined;
//     },
//     getPreviousPageParam: (firstPage) => {
//       const { pagination } = firstPage.meta || {};
//       if (!pagination) return undefined;

//       return pagination.page > 1 ? pagination.page - 1 : undefined;
//     },
//   });
// }

export function useCreateTrackMutation(
  options?: UseMutationOptions<
    unknown,
    ApiClientError,
    Parameters<typeof artistApi.createTrack>[0]
  >
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: artistApi.createTrack,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: invalidateQueries.artists(),
      });

      // queryClient.setQueryData(queryKeys.artistsDetail(data.track.id), data);
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

// export function useOptimisticUpdateTrackMutation() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: ({ id, data }: { id: string; data: unknown }) =>
//       artistApi.updateTrack(id, data),

//     onMutate: async ({ id, data }) => {
//       // Cancel outgoing queries
//       await queryClient.cancelQueries({
//         queryKey: queryKeys.artistsDetail(id),
//       });

//       // Snapshot current value
//       const previousTrack = queryClient.getQueryData(
//         queryKeys.artistsDetail(id)
//       );

//       // Optimistically update
//       queryClient.setQueryData(queryKeys.artistsDetail(id), (old: unknown) => ({
//         ...old,
//         track: { ...old?.track, ...data },
//       }));

//       return { previousTrack };
//     },

//     onError: (error, { id }, context) => {
//       // Rollback on error
//       if (context?.previousTrack) {
//         queryClient.setQueryData(
//           queryKeys.artistsDetail(id),
//           context.previousTrack
//         );
//       }
//     },

//     onSettled: (data, error, { id }) => {
//       // Always refetch after mutation
//       queryClient.invalidateQueries({
//         queryKey: queryKeys.artistsDetail(id),
//       });
//     },
//   });
// }

export function usePrefetchTrack() {
  const queryClient = useQueryClient();

  return (slug: string) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.artistsDetail(slug),
      queryFn: () => artistApi.getTrack(slug),
      staleTime: 1000 * 60 * 5,
    });
  };
}
