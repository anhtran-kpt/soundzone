import { artistEndpoints } from "../genre-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../genre-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistFollowers } from "../genre-types";

export const useArtistFollowers = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.followers(artistSlug),
    queryFn: fetcher<TArtistFollowers>(artistEndpoints.followers(artistSlug)),
    enabled: !!artistSlug,
  });
};
