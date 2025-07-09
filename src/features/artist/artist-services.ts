import { api } from "@/lib/api/api-client";
import { ArtistInfo } from "./artist-types";
import { PaginationParams } from "../shared";

export const fetchArtistInfo = async (
  artistSlug: string,
  signal: AbortSignal
) => {
  return await api.get<ArtistInfo>(`/artists/${artistSlug}`, signal);
};

export const fetchArtistPopularTracks = async (
  artistSlug: string,
  signal: AbortSignal,
  params?: Partial<PaginationParams>
) => {
  return await api.getWithMeta<ArtistInfo>(
    `/artists/${artistSlug}/popular-tracks`,
    signal,
    params
  );
};

export const toggleFollow = async (
  artistSlug: string,
  isFollowing: boolean
) => {
  if (!isFollowing) {
    return await api.post(`/artist/${artistSlug}/followers`);
  } else {
    return await api.delete(`/artist/${artistSlug}/followers`);
  }
};
