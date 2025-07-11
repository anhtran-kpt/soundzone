import {
  keepPreviousData,
  useMutation,
  usePrefetchQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchAlbumInfo, fetchAlbumList } from "./album-services";
import { PaginationParams } from "../shared/shared.type";

export const albumKeys = {
  all: ["albums"] as const,
  list: (params?: Partial<PaginationParams>) =>
    [...albumKeys.all, "list", params] as const,
  detail: (albumSlug: string) =>
    [...albumKeys.all, albumSlug, "detail"] as const,
  info: (albumSlug: string) => [...albumKeys.all, albumSlug, "info"] as const,
} as const;

export const useAlbumList = (params?: Partial<PaginationParams>) => {
  return useQuery({
    queryKey: albumKeys.list(params),
    queryFn: ({ signal }) => fetchAlbumList(signal, params),
    placeholderData: keepPreviousData,
  });
};

export const useAlbumInfo = (albumSlug: string) => {
  return useQuery({
    queryKey: albumKeys.info(albumSlug),
    queryFn: ({ signal }) => fetchAlbumInfo(albumSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!albumSlug,
  });
};

// export const useCreateAlbum = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (data: CreateAlbumInput) => AlbumService.create(data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: albumKeys.lists(),
//       });

//       toast.success("Album created successfully");
//     },
//     onError: (error) => {
//       toast.error(`Create album failed: ${error.message}`);
//       console.error("Create album failed:", error);
//     },
//   });
// };
