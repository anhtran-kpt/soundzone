import { useQuery } from "@tanstack/react-query";
import { artistKeys } from "../artist-keys";
import fetcher from "@/lib/api/fetcher";
import { artistEndpoints } from "../artist-endpoints";
import { TArtistOthers } from "../artist-types";

export const useOthers = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.others(artistSlug),
    queryFn: fetcher<TArtistOthers>(artistEndpoints.others(artistSlug)),
    enabled: !!artistSlug,
  });
};
