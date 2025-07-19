import { useQuery } from "@tanstack/react-query";
import { userKeys } from "../user-keys";
import fetcher from "@/lib/api/fetcher";
import { TUserPlaylists } from "../user-types";
import { userEndpoints } from "../user-endpoints";

export const useUserPlaylists = (userSlug: string) => {
  return useQuery({
    queryKey: userKeys.playlists(userSlug),
    queryFn: fetcher<TUserPlaylists>(userEndpoints.playlists(userSlug)),
    enabled: !!userSlug,
  });
};
