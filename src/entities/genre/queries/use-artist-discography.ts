import { artistEndpoints } from "../genre-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../genre-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistDiscography } from "../genre-types";

export const useArtistDiscography = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.discography(artistSlug),
    queryFn: fetcher<TArtistDiscography>(
      artistEndpoints.discography(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
