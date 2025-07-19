import { artistEndpoints } from "../track-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../track-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistFollowers } from "../track-types";

export const useArtistFollowers = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.followers(artistSlug),
    queryFn: fetcher<TArtistFollowers>(artistEndpoints.followers(artistSlug)),
    enabled: !!artistSlug,
  });
};
