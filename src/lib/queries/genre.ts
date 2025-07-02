import { api } from "@/lib/api-client";
import { CreateGenreInput } from "@/schemas";
import { CreateGenreReturn, Genre } from "@/types";

const endpoints = {
  all: "/genres",
  detail: (genreId: string) => `/genres/${genreId}`,
  create: "/genres",
} as const;

export const getGenres = async (signal: AbortSignal) => {
  return await api.get<Genre[]>(endpoints.all, signal);
};

export const getGenre = async (genreId: string, signal: AbortSignal) => {
  return await api.get<Genre>(endpoints.detail(genreId), signal);
};

export const createGenre = async (data: CreateGenreInput) => {
  return await api.post<CreateGenreReturn>(endpoints.create, data);
};
