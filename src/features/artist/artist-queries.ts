import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchArtistInfo,
  fetchArtistPopularTracks,
  toggleFollow,
} from "./artist-services";
import { PaginationParams } from "../shared";
import { toast } from "sonner";

const keys = {
  all: ["artists"] as const,
  detail: (artistSlug: string) => [...keys.all, artistSlug, "detail"] as const,
  info: (artistSlug: string) => [...keys.all, artistSlug, "info"] as const,
  popularTracks: (artistSlug: string, params?: Partial<PaginationParams>) =>
    [...keys.all, artistSlug, "popular-tracks", params] as const,
} as const;

export const useArtistInfo = (artistSlug: string) => {
  return useQuery({
    queryKey: keys.info(artistSlug),
    queryFn: ({ signal }) => fetchArtistInfo(artistSlug, signal),
    enabled: !!artistSlug,
  });
};

export const useArtistPopularTracks = (
  artistSlug: string,
  params?: Partial<PaginationParams>
) => {
  return useQuery({
    queryKey: keys.popularTracks(artistSlug, params),
    queryFn: ({ signal }) =>
      fetchArtistPopularTracks(artistSlug, signal, params),
    enabled: !!artistSlug,
  });
};

export const useToggleFollow = () => {
  return useMutation({
    mutationFn: () => toggleFollow(artistId, isFollowing),
    onError: (error) => {
      toast.error(`Follow failed: ${error.message}`);
      console.error("Follow failed:", error);
    },
  });
};
