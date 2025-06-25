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
  ArtistListParams,
} from "@/lib/query-keys";
import { toast } from "sonner";

export function useArtistsQuery(
  params?: ArtistListParams,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: queryKeys.artistsList(params),
    queryFn: () => artistApi.getArtists(params),
    ...options,
  });
}

export function useArtistQuery(
  slug: string,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: queryKeys.artistsDetail(slug),
    queryFn: () => artistApi.getArtist(slug),
    enabled: !!slug,
    ...options,
  });
}

// export function useArtistsInfiniteQuery(params?: {
//   limit?: number;
//   q?: string;
//   sortBy?: string;
//   sortOrder?: "asc" | "desc";
// }) {
//   return useInfiniteQuery({
//     queryKey: queryKeys.artistsInfinite(params),
//     queryFn: ({ pageParam = 1 }) =>
//       artistApi.getArtists({ ...params, page: pageParam }),
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

export function useCreateArtistMutation(
  options?: UseMutationOptions<
    unknown,
    ApiClientError,
    Parameters<typeof artistApi.createArtist>[0]
  >
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: artistApi.createArtist,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: invalidateQueries.artists(),
      });

      // queryClient.setQueryData(queryKeys.artistsDetail(data.artist.id), data);
      toast.success("Artist created successfully");
      options?.onSuccess?.(data, variables, undefined);
    },
    onError: (error, variables, context) => {
      toast.error(`Create artist failed: ${error.message}`);
      console.error("Create artist failed:", error);
      options?.onError?.(error, variables, context);
    },
    ...options,
  });
}

// export function useOptimisticUpdateArtistMutation() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: ({ id, data }: { id: string; data: unknown }) =>
//       artistApi.updateArtist(id, data),

//     onMutate: async ({ id, data }) => {
//       // Cancel outgoing queries
//       await queryClient.cancelQueries({
//         queryKey: queryKeys.artistsDetail(id),
//       });

//       // Snapshot current value
//       const previousArtist = queryClient.getQueryData(
//         queryKeys.artistsDetail(id)
//       );

//       // Optimistically update
//       queryClient.setQueryData(queryKeys.artistsDetail(id), (old: unknown) => ({
//         ...old,
//         artist: { ...old?.artist, ...data },
//       }));

//       return { previousArtist };
//     },

//     onError: (error, { id }, context) => {
//       // Rollback on error
//       if (context?.previousArtist) {
//         queryClient.setQueryData(
//           queryKeys.artistsDetail(id),
//           context.previousArtist
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

export function usePrefetchArtist() {
  const queryClient = useQueryClient();

  return (slug: string) => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.artistsDetail(slug),
      queryFn: () => artistApi.getArtist(slug),
      staleTime: 1000 * 60 * 5,
    });
  };
}
