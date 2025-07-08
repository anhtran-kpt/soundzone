import {
  keepPreviousData,
  useMutation,
  usePrefetchQuery,
  useQuery,
} from "@tanstack/react-query";
import { PlaylistService } from "./playlist.service";
import { PaginationParams } from "../shared";

const keys = {
  all: ["playlists"] as const,
  lists: () => [...keys.all, "list"] as const,
  list: (params?: Partial<PaginationParams>) =>
    [...keys.lists(), { params }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (playlistSlug: string) => [...keys.details(), playlistSlug] as const,
} as const;

export const usePrefetchPlaylists = (params?: Partial<PaginationParams>) => {
  return usePrefetchQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => PlaylistService.fetchList(signal, params),
  });
};

export const usePlaylists = (params?: Partial<PaginationParams>) => {
  return useQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => PlaylistService.fetchList(signal, params),
    placeholderData: keepPreviousData,
  });
};

export const usePlaylistBySlug = (playlistSlug: string) => {
  return useQuery({
    queryKey: keys.detail(playlistSlug),
    queryFn: ({ signal }) => PlaylistService.fetchBySlug(playlistSlug, signal),
    placeholderData: keepPreviousData,
    enabled: !!playlistSlug,
  });
};

export const useCreatePlaylist = () => {
  return useMutation({
    mutationFn: (userSlug: string) => PlaylistService.create(userSlug),
  });
};
