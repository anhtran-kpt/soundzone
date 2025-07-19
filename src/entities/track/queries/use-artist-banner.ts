import { useQuery } from "@tanstack/react-query";
import { artistKeys } from "../track-keys";
import fetcher from "@/lib/api/fetcher";
import { artistEndpoints } from "../track-endpoints";
import { TArtistBanner } from "../track-types";

export const useArtistBanner = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.banner(artistSlug),
    queryFn: fetcher<TArtistBanner>(artistEndpoints.banner(artistSlug)),
    enabled: !!artistSlug,
  });
};
