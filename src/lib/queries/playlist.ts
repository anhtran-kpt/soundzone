import { api } from "@/lib/api-client";
import { CreatePlaylistInput } from "@/schemas";
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

export const createPlaylist = async (data: CreatePlaylistInput) => {
  return await api.post<CreatePlaylistReturn>(endpoints.create, {
    data,
  });
};
