import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { albumKeys, fetchAlbumsByArtistSlug } from "@/lib/queries/album";
import { PaginationParams } from "@/lib/type";

export function useAlbumsByArtistSlug(
  artistSlug: string,
  params?: PaginationParams
) {
  return useQuery({
    queryKey: albumKeys.paginatedByArtist(
      artistSlug,
      params?.offset,
      params?.limit
    ),
    queryFn: ({ signal }) =>
      fetchAlbumsByArtistSlug(artistSlug, params, signal),
    placeholderData: keepPreviousData,
  });
}
