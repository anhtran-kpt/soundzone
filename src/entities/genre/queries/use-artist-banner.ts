import { useQuery } from "@tanstack/react-query";
import { artistKeys } from "../genre-keys";
import fetcher from "@/lib/api/fetcher";
import { artistEndpoints } from "../genre-endpoints";
import { TArtistBanner } from "../genre-types";

export const useArtistBanner = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.banner(artistSlug),
    queryFn: fetcher<TArtistBanner>(artistEndpoints.banner(artistSlug)),
    enabled: !!artistSlug,
  });
};
