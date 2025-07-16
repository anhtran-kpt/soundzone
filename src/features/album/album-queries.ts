import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchAlbumDetail, fetchAlbumList } from "./album-services";
import { PaginationParams } from "../shared/shared.type";

export const useAlbumList = (params?: Partial<PaginationParams>) => {
  return useQuery({
    queryKey: albumKeys.list(params),
    queryFn: ({ signal }) => fetchAlbumList(signal, params),
    placeholderData: keepPreviousData,
  });
};

export const useAlbumDetail = (albumSlug: string) => {
  return useQuery({
    queryKey: albumKeys.info(albumSlug),
    queryFn: ({ signal }) => fetchAlbumDetail(albumSlug, signal),
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
