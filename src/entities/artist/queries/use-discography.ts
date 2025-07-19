import { artistEndpoints } from "../artist-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../artist-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistDiscography } from "../artist-types";

export const useDiscography = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.discography(artistSlug),
    queryFn: fetcher<TArtistDiscography>(
      artistEndpoints.discography(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
