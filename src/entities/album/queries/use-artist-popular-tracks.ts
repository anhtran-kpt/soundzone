import { artistEndpoints } from "../album-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../album-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistPopularTracks } from "../album-types";

export const useArtistPopularTracks = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.popularTracks(artistSlug),
    queryFn: fetcher<TArtistPopularTracks>(
      artistEndpoints.popularTracks(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
