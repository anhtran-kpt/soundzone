import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
  keepPreviousData,
} from "@tanstack/react-query";
import { playlistApi, ApiClientError } from "@/lib/api-client";
import { toast } from "sonner";
import { playlistKeys } from "@/lib/query-keys";

export function usePlaylistsQuery(
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: playlistKeys.all,
    queryFn: ({ signal }) => playlistApi.getPlaylists(signal),
    placeholderData: keepPreviousData,
    ...options,
  });
}

export function usePlaylistQuery(
  playlistSlug: string,
  options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: playlistKeys.detail(playlistSlug),
    queryFn: ({ signal }) =>
      playlistApi.getPlaylistBySlug(playlistSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!playlistSlug,
    ...options,
  });
}

export function useCreatePlaylistMutation(
  options?: UseMutationOptions<
    unknown,
    ApiClientError,
    Parameters<typeof playlistApi.createPlaylist>[0]
  >
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: playlistApi.createPlaylist,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: playlistKeys.all,
      });

      // queryClient.setQueryData(queryKeys.playlistsDetail(data.playlist.id), data);
      toast.success("Playlist created successfully");
      options?.onSuccess?.(data, variables, undefined);
    },
    onError: (error, variables, context) => {
      toast.error(`Create playlist failed: ${error.message}`);
      console.error("Create playlist failed:", error);
      options?.onError?.(error, variables, context);
    },
    ...options,
  });
}
