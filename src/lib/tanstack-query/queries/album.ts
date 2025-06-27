import apiClient from "@/lib/api-client";
import { CreateAlbumInput } from "@/schemas";
import { CreateAlbumReturn, GetAlbumsReturn } from "@/types";

const endpoints = {
  all: "/albums",
  detail: (albumSlug: string) => `/albums/${albumSlug}`,
  create: "/albums",
} as const;

export const getAlbums = async (signal: AbortSignal) => {
  return await apiClient.get<GetAlbumsReturn>(endpoints.all, { signal });
};

export const getAlbumBySlug = async (
  albumSlug: string,
  signal: AbortSignal
) => {
  return await apiClient.get<GetAlbumsReturn>(endpoints.detail(albumSlug), {
    signal,
  });
};

export const createAlbum = async (data: CreateAlbumInput) => {
  return await apiClient.post<CreateAlbumReturn>(endpoints.create, { data });
};
