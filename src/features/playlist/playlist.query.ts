import {
  keepPreviousData,
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
  detail: (playlistId: string) => [...keys.details(), playlistId] as const,
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

export const usePlaylistById = (playlistId: string) => {
  return useQuery({
    queryKey: keys.detail(playlistId),
    queryFn: ({ signal }) => PlaylistService.fetchById(playlistId, signal),
    placeholderData: keepPreviousData,
    enabled: !!playlistId,
  });
};
