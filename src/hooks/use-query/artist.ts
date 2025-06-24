import {
  fetchArtistBySlug,
  artistKeys,
  fetchArtists,
} from "@/lib/queries/artist";
import { PaginationParams } from "@/lib/type";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useFetchArtists = (params?: PaginationParams) => {
  return useQuery({
    queryKey: artistKeys.list(params),
    queryFn: ({ signal }) => fetchArtists(params, signal),
    placeholderData: keepPreviousData,
  });
};

export const useFetchArtistBySlug = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.detail(artistSlug),
    queryFn: ({ signal }) => fetchArtistBySlug(artistSlug, signal),
    placeholderData: keepPreviousData,
  });
};
