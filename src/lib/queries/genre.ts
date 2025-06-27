import { api } from "@/lib/api-client";
import { CreateGenreInput } from "@/schemas";
import { CreateGenreReturn, Genre } from "@/types";

const endpoints = {
  all: "/genres",
  detail: (genreSlug: string) => `/genres/${genreSlug}`,
  create: "/genres",
} as const;

export const getGenres = async (signal: AbortSignal) => {
  return await api.get<Genre[]>(endpoints.all, signal);
};

export const getGenreBySlug = async (
  genreSlug: string,
  signal: AbortSignal
) => {
  return await api.get<Genre>(endpoints.detail(genreSlug), signal);
};

export const createGenre = async (data: CreateGenreInput) => {
  return await api.post<CreateGenreReturn>(endpoints.create, {
    data,
  });
};
