import {
  useQuery,
  keepPreviousData,
  useQueryClient,
  useMutation,
} from "@tanstack/react-query";
import { getAlbums, getAlbumBySlug, createAlbum } from "@/lib/queries";
import { CreateAlbumInput } from "@/schemas";
import { toast } from "sonner";
import { albumKeys } from "@/lib/query-keys";

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

export function useCreateAlbum() {
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
