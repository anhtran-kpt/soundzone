import {
  keepPreviousData,
  useMutation,
  usePrefetchQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  fetchAlbumByIdService,
  fetchAlbumsService,
  createAlbumService,
} from "./artist.service";
import { AlbumFilters } from "./artist.type";
import { toast } from "sonner";
import { CreateAlbumInput } from "./artist.schema";

const keys = {
  all: ["albums"] as const,
  lists: () => [...keys.all, "list"] as const,
  list: (filters: AlbumFilters) => [...keys.lists(), { filters }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (id: string) => [...keys.details(), id] as const,
} as const;

export const usePrefetchAlbums = (filters: AlbumFilters) => {
  return usePrefetchQuery({
    queryKey: keys.list(filters),
    queryFn: ({ signal }) => fetchAlbumsService(signal, filters),
  });
};

export const useFetchAlbums = (filters: AlbumFilters) => {
  return useQuery({
    queryKey: keys.list(filters),
    queryFn: ({ signal }) => fetchAlbumsService(signal, filters),
    placeholderData: keepPreviousData,
  });
};

export const useFetchAlbumById = (albumId: string) => {
  return useQuery({
    queryKey: keys.detail(albumId),
    queryFn: ({ signal }) => fetchAlbumByIdService(albumId, signal),
    placeholderData: keepPreviousData,
    enabled: !!albumId,
  });
};

export function useCreateAlbum() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateAlbumInput) => createAlbumService(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.lists(),
      });

      toast.success("Album created successfully");
    },
    onError: (error) => {
      toast.error(`Create album failed: ${error.message}`);
      console.error("Create album failed:", error);
    },
  });
}
