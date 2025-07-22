import { useQuery } from "@tanstack/react-query";
import { albumKeys } from "../album-keys";
import { TAlbumSlugs, TGetAlbumTracks } from "../album-types";
import fetcher from "@/lib/api/fetcher";
import { albumEndpoints } from "../album-endpoints";

export const useTracks = ({ albumSlug, artistSlug }: TAlbumSlugs) => {
  return useQuery({
    queryKey: albumKeys.tracks({ albumSlug, artistSlug }),
    queryFn: fetcher<TGetAlbumTracks>(
      albumEndpoints.tracks({ albumSlug, artistSlug })
    ),
    enabled: !!albumSlug && !!artistSlug,
  });
};
