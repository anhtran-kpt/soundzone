import { UseQueryOptions } from "@tanstack/react-query";
import {
  fetchUserFollowedArtists,
  fetchUserInfo,
  fetchUserPlaylists,
} from "./user.service";
import { PaginationParams } from "../shared";

const keys = {
  all: ["users"] as const,
  lists: () => [...keys.all, "list"] as const,
  list: (params?: Partial<PaginationParams>) =>
    [...keys.lists(), { params }] as const,
  info: (userSlug: string) => [...keys.all, userSlug, "info"] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (userSlug: string) => [...keys.details(), userSlug] as const,
  playlists: (userSlug: string) =>
    [...keys.detail(userSlug), "playlists"] as const,
  followedArtists: (userSlug: string) =>
    [...keys.detail(userSlug), "followed-artists"] as const,
} as const;

export const userInfoQuery = (userSlug: string) =>
  ({
    queryKey: keys.info(userSlug),
    queryFn: ({ signal }) => fetchUserInfo(userSlug, signal),
    enabled: !!userSlug,
  } satisfies UseQueryOptions);

export const userPlaylistsQuery = (userSlug: string) =>
  ({
    queryKey: keys.playlists(userSlug),
    queryFn: ({ signal }) => fetchUserPlaylists(userSlug, signal),
    enabled: !!userSlug,
  } satisfies UseQueryOptions);

export const userFollowedArtistsQuery = (userSlug: string) =>
  ({
    queryKey: keys.playlists(userSlug),
    queryFn: ({ signal }) => fetchUserFollowedArtists(userSlug, signal),
    enabled: !!userSlug,
  } satisfies UseQueryOptions);
