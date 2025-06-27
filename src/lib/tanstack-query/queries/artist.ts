import apiClient from "@/lib/api-client";
import { CreateArtistInput } from "@/schemas";
import { CreateArtistReturn, GetArtistsReturn } from "@/types";

const endpoints = {
  all: "/artists",
  detail: (artistSlug: string) => `/artists/${artistSlug}`,
  create: "/artists",
} as const;

export const getArtists = async (signal: AbortSignal) => {
  return await apiClient.get<GetArtistsReturn>(endpoints.all, { signal });
};

export const getArtistBySlug = async (
  artistSlug: string,
  signal: AbortSignal
) => {
  return await apiClient.get<GetArtistsReturn>(endpoints.detail(artistSlug), {
    signal,
  });
};

export const createArtist = async (data: CreateArtistInput) => {
  return await apiClient.post<CreateArtistReturn>(endpoints.create, {
    data,
  });
};
