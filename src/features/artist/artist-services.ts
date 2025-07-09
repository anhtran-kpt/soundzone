import { api } from "@/lib/api/api-client";
import { ArtistDiscography, ArtistInfo } from "./artist-types";
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

export const fetchArtistDiscography = async (
  artistSlug: string,
  signal: AbortSignal
) => {
  return await api.get<ArtistDiscography>(
    `/artists/${artistSlug}/discography`,
    signal
  );
};

export const isFollowing = async (artistSlug: string, signal: AbortSignal) => {
  return api.get<boolean>(`/artists/${artistSlug}/followers/me`, signal);
};

export const followArtist = async (artistSlug: string) => {
  return await api.post(`/artists/${artistSlug}/followers`);
};

export const unfollowArtist = async (artistSlug: string) => {
  return await api.delete(`/artists/${artistSlug}/followers`);
};
