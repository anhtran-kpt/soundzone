import { artistEndpoints } from "../playlist-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../playlist-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistInfo } from "../playlist-types";

export const useArtistInfo = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.info(artistSlug),
    queryFn: fetcher<TArtistInfo>(artistEndpoints.info(artistSlug)),
    enabled: !!artistSlug,
  });
};
