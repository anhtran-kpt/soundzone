import { artistEndpoints } from "../artist-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../artist-keys";
import { useQuery } from "@tanstack/react-query";
import { TPopularTracks } from "../artist-types";

export const usePopularTracks = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.popularTracks(artistSlug),
    queryFn: fetcher<TPopularTracks>(artistEndpoints.popularTracks(artistSlug)),
    enabled: !!artistSlug,
  });
};
