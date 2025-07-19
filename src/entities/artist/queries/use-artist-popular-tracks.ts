import { artistEndpoints } from "../artist-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../artist-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistPopularTracks } from "../artist-types";

export const useArtistPopularTracks = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.popularTracks(artistSlug),
    queryFn: fetcher<TArtistPopularTracks>(
      artistEndpoints.popularTracks(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
