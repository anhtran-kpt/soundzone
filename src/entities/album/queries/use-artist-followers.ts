import { artistEndpoints } from "../album-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../album-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistFollowers } from "../album-types";

export const useArtistFollowers = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.followers(artistSlug),
    queryFn: fetcher<TArtistFollowers>(artistEndpoints.followers(artistSlug)),
    enabled: !!artistSlug,
  });
};
