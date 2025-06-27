import { api } from "@/lib/api-client";
import { CreateAlbumInput } from "@/schemas";
import { Album, CreateAlbumReturn } from "@/types";

const endpoints = {
  all: "/albums",
  detail: (albumSlug: string) => `/albums/${albumSlug}`,
  create: "/albums",
} as const;

export const getAlbums = async (signal: AbortSignal) => {
  return await api.get<Album[]>(endpoints.all, signal);
};

export const getAlbumBySlug = async (
  albumSlug: string,
  signal: AbortSignal
) => {
  return await api.get<Album>(endpoints.detail(albumSlug), signal);
};

export const createAlbum = async (data: CreateAlbumInput) => {
  return await api.post<CreateAlbumReturn>(endpoints.create, { data });
};
