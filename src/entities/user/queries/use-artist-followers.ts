import { artistEndpoints } from "../user-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../user-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistFollowers } from "../user-types";

export const useArtistFollowers = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.followers(artistSlug),
    queryFn: fetcher<TArtistFollowers>(artistEndpoints.followers(artistSlug)),
    enabled: !!artistSlug,
  });
};
