import { api } from "@/lib/api-client";
import { CreatePlaylistReturn, Playlist } from "@/types";

const endpoints = {
  all: "/playlists",
  detail: (playlistSlug: string) => `/playlists/${playlistSlug}`,
  create: "/playlists",
} as const;

export const getPlaylists = async (signal: AbortSignal) => {
  return await api.get<Playlist[]>(endpoints.all, signal);
};

export const getPlaylistBySlug = async (
  playlistSlug: string,
  signal: AbortSignal
) => {
  return await api.get<Playlist>(endpoints.detail(playlistSlug), signal);
};

export const createPlaylist = async () => {
  return await api.post<CreatePlaylistReturn>(endpoints.create);
};
