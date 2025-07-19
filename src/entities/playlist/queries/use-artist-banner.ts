import { useQuery } from "@tanstack/react-query";
import { artistKeys } from "../playlist-keys";
import fetcher from "@/lib/api/fetcher";
import { artistEndpoints } from "../playlist-endpoints";
import { TArtistBanner } from "../playlist-types";

export const useArtistBanner = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.banner(artistSlug),
    queryFn: fetcher<TArtistBanner>(artistEndpoints.banner(artistSlug)),
    enabled: !!artistSlug,
  });
};
