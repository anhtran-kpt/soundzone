import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
  keepPreviousData,
} from "@tanstack/react-query";
import { albumApi, ApiClientError } from "@/lib/api-client";
import { queryKeys, invalidateQueries } from "@/lib/query-keys";
import { toast } from "sonner";

export function useAlbumsQuery(
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: queryKeys.albumsList(),
    queryFn: ({ signal }) => albumApi.getAlbums(signal),
    placeholderData: keepPreviousData,
    ...options,
  });
}

export function useAlbumQuery(
  albumSlug: string,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: queryKeys.albumDetail(albumSlug),
    queryFn: ({ signal }) => albumApi.getAlbumBySlug(albumSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!albumSlug,
    ...options,
  });
}

export function useCreateAlbumMutation(
  options?: UseMutationOptions<
    unknown,
    ApiClientError,
    Parameters<typeof albumApi.createAlbum>[0]
  >
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: albumApi.createAlbum,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: invalidateQueries.albums(),
      });

      // queryClient.setQueryData(queryKeys.albumsDetail(data.album.id), data);
      toast.success("Album created successfully");
      options?.onSuccess?.(data, variables, undefined);
    },
    onError: (error, variables, context) => {
      toast.error(`Create album failed: ${error.message}`);
      console.error("Create album failed:", error);
      options?.onError?.(error, variables, context);
    },
    ...options,
  });
}
