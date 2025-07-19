import { artistEndpoints } from "../genre-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../genre-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistInfo } from "../genre-types";

export const useArtistInfo = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.info(artistSlug),
    queryFn: fetcher<TArtistInfo>(artistEndpoints.info(artistSlug)),
    enabled: !!artistSlug,
  });
};
