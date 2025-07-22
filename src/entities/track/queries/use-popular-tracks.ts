import fetcher from "@/lib/api/fetcher";
import { useQuery } from "@tanstack/react-query";
import { TPopularTracks } from "../track-types";
import { artistKeys } from "@/entities/artist/artist-keys";
import { artistEndpoints } from "@/entities/artist/artist-endpoints";

export const usePopularTracks = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.popularTracks(artistSlug),
    queryFn: fetcher<TPopularTracks>(artistEndpoints.popularTracks(artistSlug)),
    enabled: !!artistSlug,
  });
};
