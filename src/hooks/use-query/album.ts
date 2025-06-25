import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { albumKeys, fetchAlbumsByArtistSlug } from "@/lib/queries/album";

export function useFetchAlbumsByArtistSlug(
  artistSlug: string,
  params: { offset: number; limit: number }
) {
  return useQuery({
    queryKey: albumKeys.paginatedByArtist(
      artistSlug,
      params.offset,
      params.limit
    ),
    queryFn: ({ signal }) =>
      fetchAlbumsByArtistSlug(artistSlug, params, signal),
    placeholderData: keepPreviousData,
  });
}
