import {
  useQuery,
  keepPreviousData,
  useQueryClient,
  useMutation,
} from "@tanstack/react-query";
import { getAlbums, getAlbum, createAlbum } from "@/lib/queries";
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

export function useGetAlbum(albumId: string) {
  return useQuery({
    queryKey: albumKeys.detail(albumId),
    queryFn: ({ signal }) => getAlbum(albumId, signal),
    placeholderData: keepPreviousData,
    enabled: !!albumId,
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
