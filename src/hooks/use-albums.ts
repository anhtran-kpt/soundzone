import {
  useQuery,
  keepPreviousData,
  useQueryClient,
  useMutation,
} from "@tanstack/react-query";
import {
  getAlbums,
  albumKeys,
  getAlbumBySlug,
  createAlbum,
} from "@/lib/tanstack-query";
import { CreateAlbumInput } from "@/schemas";
import { toast } from "sonner";

export function useGetAlbums() {
  return useQuery({
    queryKey: albumKeys.all,
    queryFn: ({ signal }) => getAlbums(signal),
    placeholderData: keepPreviousData,
  });
}

export function useGetAlbumBySlug(albumSlug: string) {
  return useQuery({
    queryKey: albumKeys.detail(albumSlug),
    queryFn: ({ signal }) => getAlbumBySlug(albumSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!albumSlug,
  });
}

export function useCreateAlbumMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateAlbumInput) => createAlbum(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: albumKeys.all,
      });

      toast.success("Album created successfully");
    },
    onError: (error) => {
      toast.error(`Create album failed: ${error.message}`);
      console.error("Create album failed:", error);
    },
  });
}
