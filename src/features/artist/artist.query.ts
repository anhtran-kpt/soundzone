import {
  keepPreviousData,
  usePrefetchQuery,
  useQuery,
} from "@tanstack/react-query";
import { ArtistService } from "./artist.service";
import { PaginationParams } from "../shared";

const keys = {
  all: ["artists"] as const,
  lists: () => [...keys.all, "list"] as const,
  list: (params?: Partial<PaginationParams>) =>
    [...keys.lists(), { params }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (artistId: string) => [...keys.details(), artistId] as const,
} as const;

export const usePrefetchArtists = (params?: Partial<PaginationParams>) => {
  return usePrefetchQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => ArtistService.fetchList(signal, params),
  });
};

export const useArtists = (params?: Partial<PaginationParams>) => {
  return useQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => ArtistService.fetchList(signal, params),
    placeholderData: keepPreviousData,
  });
};

export const useArtistBySlug = (artistId: string) => {
  return useQuery({
    queryKey: keys.detail(artistId),
    queryFn: ({ signal }) => ArtistService.fetchBySlug(artistId, signal),
    placeholderData: keepPreviousData,
    enabled: !!artistId,
  });
};
