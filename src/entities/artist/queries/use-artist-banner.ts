import { useQuery } from "@tanstack/react-query";
import { artistKeys } from "../artist-keys";
import fetcher from "@/lib/api/fetcher";
import { artistEndpoints } from "../artist-endpoints";
import { TArtistBanner } from "../artist-types";

export const useArtistBanner = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.banner(artistSlug),
    queryFn: fetcher<TArtistBanner>(artistEndpoints.banner(artistSlug)),
    enabled: !!artistSlug,
  });
};
