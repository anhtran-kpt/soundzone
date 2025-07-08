import {
  keepPreviousData,
  usePrefetchQuery,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { UserService } from "./user.service";
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

export const UserQueries = {
  fetchInfo: (userSlug: string) =>
    ({
      queryKey: keys.info(userSlug),
      queryFn: ({ signal }) => UserService.fetchInfo(userSlug, signal),
      enabled: !!userSlug,
    } satisfies UseQueryOptions),

  fetchPlaylists: (userSlug: string) =>
    ({
      queryKey: keys.playlists(userSlug),
      queryFn: ({ signal }) => UserService.fetchPlaylists(userSlug, signal),
      enabled: !!userSlug,
    } satisfies UseQueryOptions),

  fetchFollowedArtists: (userSlug: string) =>
    ({
      queryKey: keys.playlists(userSlug),
      queryFn: ({ signal }) =>
        UserService.fetchFollowedArtists(userSlug, signal),
      enabled: !!userSlug,
    } satisfies UseQueryOptions),
};

// export const usePrefetchUsers = (params?: Partial<PaginationParams>) => {
//   return usePrefetchQuery({
//     queryKey: keys.list(params),
//     queryFn: ({ signal }) => UserService.fetchList(signal, params),
//   });
// };

// export const useUsers = (params?: Partial<PaginationParams>) => {
//   return useQuery({
//     queryKey: keys.list(params),
//     queryFn: ({ signal }) => UserService.fetchList(signal, params),
//     placeholderData: keepPreviousData,
//   });
// };

// export const useUserPlaylists = (userSlug: string) => {
//   return useQuery({
//     queryKey: keys.playlists(userSlug),
//     queryFn: ({ signal }) =>
//       UserService.fetchPlaylistsByUserSlug(userSlug, signal),
//     placeholderData: keepPreviousData,
//     enabled: !!userSlug,
//   });
// };

// export const useUserInfo = (userSlug: string) => {
//   return useQuery({
//     queryKey: keys.playlists(userSlug),
//     queryFn: ({ signal }) => UserService.fetchUserInfo(userSlug, signal),
//     placeholderData: keepPreviousData,
//     enabled: !!userSlug,
//   });
// };
