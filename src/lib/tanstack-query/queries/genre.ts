import apiClient from "@/lib/api-client";
import { CreateGenreInput } from "@/schemas";
import { GetGenresReturn, CreateGenreReturn } from "@/types";

const endpoints = {
  all: "/genres",
  detail: (genreSlug: string) => `/genres/${genreSlug}`,
  create: "/genres",
} as const;

export const getGenres = async (signal: AbortSignal) => {
  return await apiClient.get<GetGenresReturn>(endpoints.all, { signal });
};

export const getGenreBySlug = async (
  genreSlug: string,
  signal: AbortSignal
) => {
  return await apiClient.get<GetGenresReturn>(endpoints.detail(genreSlug), {
    signal,
  });
};

export const createGenre = async (data: CreateGenreInput) => {
  return await apiClient.post<CreateGenreReturn>(endpoints.create, {
    data,
  });
};
