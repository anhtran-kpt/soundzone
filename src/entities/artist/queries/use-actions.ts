import { useQuery } from "@tanstack/react-query";
import { artistKeys } from "../artist-keys";
import fetcher from "@/lib/api/fetcher";
import { artistEndpoints } from "../artist-endpoints";
import { TArtistActions } from "../artist-types";

export const useActions = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.actions(artistSlug),
    queryFn: fetcher<TArtistActions>(artistEndpoints.actions(artistSlug)),
    enabled: !!artistSlug,
  });
};
