import { artistEndpoints } from "../track-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../track-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistDiscography } from "../track-types";

export const useArtistDiscography = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.discography(artistSlug),
    queryFn: fetcher<TArtistDiscography>(
      artistEndpoints.discography(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
