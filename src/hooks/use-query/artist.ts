import { fetchArtistBySlug, artistKeys } from "@/lib/queries/artist";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useFetchArtistBySlug = (artistSlug: string) => {
  return useQuery({
    queryKey: artistKeys.detail(artistSlug),
    queryFn: ({ signal }) => fetchArtistBySlug(artistSlug, signal),
    placeholderData: keepPreviousData,
  });
};
