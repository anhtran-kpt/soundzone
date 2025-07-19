import { artistEndpoints } from "../playlist-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../playlist-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistPopularTracks } from "../playlist-types";

export const useArtistPopularTracks = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.popularTracks(artistSlug),
    queryFn: fetcher<TArtistPopularTracks>(
      artistEndpoints.popularTracks(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
