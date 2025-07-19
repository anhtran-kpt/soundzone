import { useQuery } from "@tanstack/react-query";
import { userKeys } from "../user-keys";
import fetcher from "@/lib/api/fetcher";
import { TUserPlaylist } from "../user-types";
import { userEndpoints } from "../user-endpoints";

export const usePlaylists = (userSlug: string) => {
  return useQuery({
    queryKey: userKeys.playlists(userSlug),
    queryFn: fetcher<TUserPlaylist>(userEndpoints.playlists(userSlug)),
    enabled: !!userSlug,
  });
};
