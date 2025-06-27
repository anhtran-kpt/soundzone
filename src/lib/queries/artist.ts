import { api } from "@/lib/api-client";
import { CreateArtistInput } from "@/schemas";
import {
  CreateArtistReturn,
  GetArtistsReturn,
  GetArtistBySlugReturn,
} from "@/types";

const endpoints = {
  all: "/artists",
  detail: (artistSlug: string) => `/artists/${artistSlug}`,
  create: "/artists",
} as const;

export const getArtists = async (signal: AbortSignal) => {
  return await api.get<GetArtistsReturn>(endpoints.all, signal);
};

export const getArtistBySlug = async (
  artistSlug: string,
  signal: AbortSignal
) => {
  return await api.get<GetArtistBySlugReturn>(
    endpoints.detail(artistSlug),
    signal
  );
};

export const createArtist = async (data: CreateArtistInput) => {
  return await api.post<CreateArtistReturn>(endpoints.create, {
    data,
  });
};
