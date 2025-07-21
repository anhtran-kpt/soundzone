import { useQuery } from "@tanstack/react-query";
import { albumKeys } from "../album-keys";
import { TAlbumSlugs, TGetAlbumBanner } from "../album-types";
import fetcher from "@/lib/api/fetcher";
import { albumEndpoints } from "../album-endpoints";

export const useBanner = ({ albumSlug, artistSlug }: TAlbumSlugs) => {
  return useQuery({
    queryKey: albumKeys.banner({ albumSlug, artistSlug }),
    queryFn: fetcher<TGetAlbumBanner>(
      albumEndpoints.banner({ albumSlug, artistSlug })
    ),
    enabled: !!albumSlug && !!artistSlug,
  });
};
