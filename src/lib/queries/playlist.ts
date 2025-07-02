import { api } from "@/lib/api-client";
import { CreatePlaylistReturn, Playlist } from "@/types";

const endpoints = {
  all: "/playlists",
  detail: (playlistId: string) => `/playlists/${playlistId}`,
  create: "/playlists",
} as const;

export const getPlaylists = async (signal: AbortSignal) => {
  return await api.get<Playlist[]>(endpoints.all, signal);
};

export const getPlaylist = async (playlistId: string, signal: AbortSignal) => {
  return await api.get<Playlist>(endpoints.detail(playlistId), signal);
};

export const createPlaylist = async () => {
  return await api.post<CreatePlaylistReturn>(endpoints.create);
};
