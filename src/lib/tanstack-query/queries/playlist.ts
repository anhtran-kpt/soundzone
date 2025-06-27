import apiClient from "@/lib/api-client";
import { CreatePlaylistInput } from "@/schemas";
import { CreatePlaylistReturn, GetPlaylistsReturn } from "@/types";

const endpoints = {
  list: "/playlists",
  detail: (playlistSlug: string) => `/playlists/${playlistSlug}`,
  create: "/playlists",
} as const;

export const getPlaylists = async (signal: AbortSignal) => {
  return await apiClient.get<GetPlaylistsReturn>(endpoints.list, { signal });
};

export const getPlaylistBySlug = async (
  playlistSlug: string,
  signal: AbortSignal
) => {
  return await apiClient.get<GetPlaylistsReturn>(
    endpoints.detail(playlistSlug),
    {
      signal,
    }
  );
};

export const createPlaylist = async (data: CreatePlaylistInput) => {
  return await apiClient.post<CreatePlaylistReturn>(endpoints.create, {
    data,
  });
};
