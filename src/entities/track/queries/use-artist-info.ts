import { artistEndpoints } from "../track-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../track-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistInfo } from "../track-types";

export const useArtistInfo = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.info(artistSlug),
    queryFn: fetcher<TArtistInfo>(artistEndpoints.info(artistSlug)),
    enabled: !!artistSlug,
  });
};
