import { api } from "@/lib/api-client";
import { CreateArtistInput } from "@/schemas";
import { Artist, CreateArtistReturn } from "@/types";

const endpoints = {
  all: "/artists",
  detail: (artistId: string) => `/artists/${artistId}`,
  create: "/artists",
} as const;

export const getArtists = async (signal: AbortSignal) => {
  return await api.get<Artist[]>(endpoints.all, signal);
};

export const getArtist = async (artistId: string, signal: AbortSignal) => {
  return await api.get<Artist>(endpoints.detail(artistId), signal);
};

export const createArtist = async (data: CreateArtistInput) => {
  return await api.post<CreateArtistReturn>(endpoints.create, data);
};
