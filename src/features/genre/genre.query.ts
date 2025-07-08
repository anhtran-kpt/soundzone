import {
  keepPreviousData,
  usePrefetchQuery,
  useQuery,
} from "@tanstack/react-query";
import { GenreService } from "./genre.service";
import { PaginationParams } from "../shared";

const keys = {
  all: ["genres"] as const,
  lists: () => [...keys.all, "list"] as const,
  list: (params?: Partial<PaginationParams>) =>
    [...keys.lists(), { params }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (genreId: string) => [...keys.details(), genreId] as const,
} as const;

export const usePrefetchGenres = (params?: Partial<PaginationParams>) => {
  return usePrefetchQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => GenreService.fetchList(signal, params),
  });
};

export const useGenres = (params?: Partial<PaginationParams>) => {
  return useQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => GenreService.fetchList(signal, params),
    placeholderData: keepPreviousData,
  });
};

export const useGenreBySlug = (genreId: string) => {
  return useQuery({
    queryKey: keys.detail(genreId),
    queryFn: ({ signal }) => GenreService.fetchBySlug(genreId, signal),
    placeholderData: keepPreviousData,
    enabled: !!genreId,
  });
};
