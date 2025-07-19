import { artistEndpoints } from "../user-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../user-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistInfo } from "../user-types";

export const useArtistInfo = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.info(artistSlug),
    queryFn: fetcher<TArtistInfo>(artistEndpoints.info(artistSlug)),
    enabled: !!artistSlug,
  });
};
