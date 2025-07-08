import { useQuery } from "@tanstack/react-query";
import {
  fetchUserFollowedArtists,
  fetchUserInfo,
  fetchUserPlaylists,
} from "./user.service";

const keys = {
  all: ["users"] as const,
  info: (userSlug: string) => [...keys.all, userSlug, "info"] as const,
  detail: (userSlug: string) => [...keys.all, userSlug, "detail"] as const,
  playlists: (userSlug: string) =>
    [...keys.detail(userSlug), "playlists"] as const,
  followedArtists: (userSlug: string) =>
    [...keys.detail(userSlug), "followed-artists"] as const,
} as const;

export const useUserInfo = (userSlug: string) => {
  return useQuery({
    queryKey: keys.info(userSlug),
    queryFn: ({ signal }) => fetchUserInfo(userSlug, signal),
    enabled: !!userSlug,
  });
};

export const useUserPlaylists = (userSlug: string) => {
  return useQuery({
    queryKey: keys.playlists(userSlug),
    queryFn: ({ signal }) => fetchUserPlaylists(userSlug, signal),
    enabled: !!userSlug,
  });
};

export const useUserFollowedArtists = (userSlug: string) => {
  return useQuery({
    queryKey: keys.followedArtists(userSlug),
    queryFn: ({ signal }) => fetchUserFollowedArtists(userSlug, signal),
    enabled: !!userSlug,
  });
};
