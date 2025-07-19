import { artistEndpoints } from "../user-endpoints";
import fetcher from "@/lib/api/fetcher";
import { artistKeys } from "../user-keys";
import { useQuery } from "@tanstack/react-query";
import { TArtistDiscography } from "../user-types";

export const useArtistDiscography = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.discography(artistSlug),
    queryFn: fetcher<TArtistDiscography>(
      artistEndpoints.discography(artistSlug)
    ),
    enabled: !!artistSlug,
  });
};
