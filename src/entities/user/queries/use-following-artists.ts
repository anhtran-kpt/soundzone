import { useQuery } from "@tanstack/react-query";
import { userKeys } from "../user-keys";
import fetcher from "@/lib/api/fetcher";
import { TUserFollowingArtists } from "../user-types";
import { userEndpoints } from "../user-endpoints";

export const useFollowingArtists = (userSlug: string) => {
  return useQuery({
    queryKey: userKeys.followingArtists(userSlug),
    queryFn: fetcher<TUserFollowingArtists>(
      userEndpoints.followingArtists(userSlug)
    ),
    enabled: !!userSlug,
  });
};
