import { artistEndpoints } from "../user-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../user-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistPopularTracks } from "../user-types";

export const useArtistPopularTracks = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.popularTracks(artistSlug),
    queryFn: fetcher<TArtistPopularTracks>(
      artistEndpoints.popularTracks(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
