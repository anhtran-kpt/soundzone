import { artistEndpoints } from "../track-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../track-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistPopularTracks } from "../track-types";

export const useArtistPopularTracks = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.popularTracks(artistSlug),
    queryFn: fetcher<TArtistPopularTracks>(
      artistEndpoints.popularTracks(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
