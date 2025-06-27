import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { toast } from "sonner";
import {
  playlistKeys,
  createPlaylist,
  getPlaylistBySlug,
  getPlaylists,
} from "@/lib/tanstack-query";
import { CreatePlaylistInput } from "@/schemas";

export function useGetPlaylists() {
  return useQuery({
    queryKey: playlistKeys.all,
    queryFn: ({ signal }) => getPlaylists(signal),
    placeholderData: keepPreviousData,
  });
}

export function useGetPlaylistBySlug(playlistSlug: string) {
  return useQuery({
    queryKey: playlistKeys.detail(playlistSlug),
    queryFn: ({ signal }) => getPlaylistBySlug(playlistSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!playlistSlug,
  });
}

export function useCreatePlaylistMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePlaylistInput) => createPlaylist(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: playlistKeys.all,
      });

      toast.success("Playlist created successfully");
    },
    onError: (error) => {
      toast.error(`Create playlist failed: ${error.message}`);
      console.error("Create playlist failed:", error);
    },
  });
}
