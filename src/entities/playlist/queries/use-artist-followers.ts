import { artistEndpoints } from "../playlist-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../playlist-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistFollowers } from "../playlist-types";

export const useArtistFollowers = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.followers(artistSlug),
    queryFn: fetcher<TArtistFollowers>(artistEndpoints.followers(artistSlug)),
    enabled: !!artistSlug,
  });
};
