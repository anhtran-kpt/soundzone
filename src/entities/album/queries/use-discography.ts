import { useQuery } from "@tanstack/react-query";
import { albumKeys } from "../album-keys";
import { TAlbumSlugs, TGetAlbumDiscography } from "../album-types";
import fetcher from "@/lib/api/fetcher";
import { albumEndpoints } from "../album-endpoints";

export const useDiscography = ({ albumSlug, artistSlug }: TAlbumSlugs) => {
  return useQuery({
    queryKey: albumKeys.discography({ albumSlug, artistSlug }),
    queryFn: fetcher<TGetAlbumDiscography>(
      albumEndpoints.discography({ albumSlug, artistSlug })
    ),
    enabled: !!albumSlug && !!artistSlug,
  });
};
