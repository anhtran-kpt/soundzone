import { useQuery } from "@tanstack/react-query";
import fetcher from "@/lib/api/fetcher";
import { userKeys } from "@/entities/user/user-keys";
import { userEndpoints } from "@/entities/user/user-endpoints";
import { TUserPlaylistBanner } from "@/entities/user/user-types";

export const useBanner = ({
  userSlug,
  playlistSlug,
}: {
  userSlug: string;
  playlistSlug: string;
}) => {
  return useQuery({
    queryKey: userKeys.playlistBanner({ userSlug, playlistSlug }),
    queryFn: fetcher<TUserPlaylistBanner>(
      userEndpoints.playlistBanner({ userSlug, playlistSlug })
    ),
    enabled: !!userSlug && !!playlistSlug,
  });
};
