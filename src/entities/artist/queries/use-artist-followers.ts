import { artistEndpoints } from "../artist-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../artist-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistFollowers } from "../artist-types";

export const useArtistFollowers = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.followers(artistSlug),
    queryFn: fetcher<TArtistFollowers>(artistEndpoints.followers(artistSlug)),
    enabled: !!artistSlug,
  });
};
