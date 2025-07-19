import { artistEndpoints } from "../genre-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../genre-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistPopularTracks } from "../genre-types";

export const useArtistPopularTracks = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.popularTracks(artistSlug),
    queryFn: fetcher<TArtistPopularTracks>(
      artistEndpoints.popularTracks(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
