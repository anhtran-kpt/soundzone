import { useQuery } from "@tanstack/react-query";
import { artistKeys } from "../artist-keys";
import fetcher from "@/lib/api/fetcher";
import { artistEndpoints } from "../artist-endpoints";
import { TArtistAbout } from "../artist-types";

export const useAbout = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.about(artistSlug),
    queryFn: fetcher<TArtistAbout>(artistEndpoints.about(artistSlug)),
    enabled: !!artistSlug,
  });
};
