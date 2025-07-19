import { artistEndpoints } from "../album-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../album-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistDiscography } from "../album-types";

export const useArtistDiscography = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.discography(artistSlug),
    queryFn: fetcher<TArtistDiscography>(
      artistEndpoints.discography(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
