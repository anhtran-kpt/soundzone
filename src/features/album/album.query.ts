import {
  keepPreviousData,
  useMutation,
  usePrefetchQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AlbumService } from "./album.service";
import { toast } from "sonner";
import { CreateAlbumInput } from "./album.schema";
import { PaginationParams } from "../shared";

const keys = {
  all: ["albums"] as const,
  lists: () => [...keys.all, "list"] as const,
  list: (params?: Partial<PaginationParams>) =>
    [...keys.lists(), { params }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (albumId: string) => [...keys.details(), albumId] as const,
} as const;

export const usePrefetchAlbums = (params?: Partial<PaginationParams>) => {
  return usePrefetchQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => AlbumService.fetchList(signal, params),
  });
};

export const useAlbums = (params?: Partial<PaginationParams>) => {
  return useQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => AlbumService.fetchList(signal, params),
    placeholderData: keepPreviousData,
  });
};

export const useAlbumById = (albumId: string) => {
  return useQuery({
    queryKey: keys.detail(albumId),
    queryFn: ({ signal }) => AlbumService.fetchById(albumId, signal),
    placeholderData: keepPreviousData,
    enabled: !!albumId,
  });
};

export const useCreateAlbum = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateAlbumInput) => AlbumService.create(data),
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
};
