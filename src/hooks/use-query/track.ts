import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchTracksByArtistSlug, trackKeys } from "@/lib/queries/track";
import { PaginationParams } from "@/lib/type";

export function useFetchTracksByArtistSlug(
  artistSlug: string,
  params?: PaginationParams
) {
  return useQuery({
    queryKey: trackKeys.paginatedByArtist(
      artistSlug,
      params?.offset,
      params?.limit
    ),
    queryFn: ({ signal }) =>
      fetchTracksByArtistSlug(artistSlug, params, signal),
    enabled: !!artistSlug,
    placeholderData: keepPreviousData,
  });
}
