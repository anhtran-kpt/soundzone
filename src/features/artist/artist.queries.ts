import { useQuery } from "@tanstack/react-query";
import { fetchArtistInfo } from "./artist.service";

const keys = {
  all: ["artists"] as const,
  detail: (artistSlug: string) => [...keys.all, artistSlug, "detail"] as const,
  info: (artistSlug: string) => [...keys.all, artistSlug, "info"] as const,
} as const;

export const useArtistInfo = (artistSlug: string) => {
  return useQuery({
    queryKey: keys.info(artistSlug),
    queryFn: ({ signal }) => fetchArtistInfo(artistSlug, signal),
    enabled: !!artistSlug,
  });
};

// export const usePrefetchArtists = (params?: Partial<PaginationParams>) => {
//   return usePrefetchQuery({
//     queryKey: keys.list(params),
//     queryFn: ({ signal }) => ArtistService.fetchList(signal, params),
//   });
// };

// export const useArtists = (params?: Partial<PaginationParams>) => {
//   return useQuery({
//     queryKey: keys.list(params),
//     queryFn: ({ signal }) => ArtistService.fetchList(signal, params),
//     placeholderData: keepPreviousData,
//   });
// };

// export const useArtistBySlug = (artistId: string) => {
//   return useQuery({
//     queryKey: keys.detail(artistId),
//     queryFn: ({ signal }) => ArtistService.fetchBySlug(artistId, signal),
//     placeholderData: keepPreviousData,
//     enabled: !!artistId,
//   });
// };
