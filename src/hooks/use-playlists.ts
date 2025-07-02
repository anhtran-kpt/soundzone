import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { createPlaylist, getPlaylistBySlug, getPlaylists } from "@/lib/queries";
import { playlistKeys } from "@/lib/query-keys";
import { useRouter } from "next/navigation";

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

export function useCreatePlaylist() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () => createPlaylist(),
    onSuccess: (playlist) => {
      queryClient.invalidateQueries({
        queryKey: playlistKeys.detail(playlist.slug),
      });

      router.push(`/users/${playlist.user?.slug}/playlists/${playlist.slug}`);
    },
    onError: (error) => {
      toast.error(`Create playlist failed: ${error.message}`);
      console.error("Create playlist failed:", error);
    },
  });
}

export function useAddTrackToPlaylist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (trackId) => addTrackToPlaylist(trackId),
    onSuccess: (playlist) => {
      queryClient.invalidateQueries({
        queryKey: playlistKeys.detail(playlist.slug),
      });
    },
    onError: (error) => {
      toast.error(`Add track failed: ${error.message}`);
      console.error("Add track failed:", error);
    },
  });
}
