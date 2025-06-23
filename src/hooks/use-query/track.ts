import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchTracksByArtistSlug, trackKeys } from "@/lib/queries/track";

export function useFetchTracksByArtistSlug(
  artistSlug: string,
  params?: { limit?: number; page?: number }
) {
  return useQuery({
    queryKey: trackKeys.listByArtistSlug(artistSlug),
    queryFn: ({ signal }) =>
      fetchTracksByArtistSlug(artistSlug, params, signal),
    enabled: !!artistSlug,
    placeholderData: keepPreviousData,
  });
}
