import { artistEndpoints } from "../playlist-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../playlist-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistDiscography } from "../playlist-types";

export const useArtistDiscography = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.discography(artistSlug),
    queryFn: fetcher<TArtistDiscography>(
      artistEndpoints.discography(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
