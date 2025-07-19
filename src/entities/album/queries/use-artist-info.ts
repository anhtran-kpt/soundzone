import { artistEndpoints } from "../album-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../album-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistInfo } from "../album-types";

export const useArtistInfo = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.info(artistSlug),
    queryFn: fetcher<TArtistInfo>(artistEndpoints.info(artistSlug)),
    enabled: !!artistSlug,
  });
};
