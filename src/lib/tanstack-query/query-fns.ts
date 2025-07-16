import { api } from "../api/api-client";
import { AlbumDetailPage, ArtistDetailPage } from "../types";

export const fetchArtistDetailPage = async (
  artistSlug: string,
  signal: AbortSignal
) => {
  return await api.get<ArtistDetailPage>(
    `/pages/artists/${artistSlug}`,
    signal
  );
};

export const fetchAlbumDetailPage = async (
  artistSlug: string,
  albumSlug: string,
  signal: AbortSignal
) => {
  return await api.get<AlbumDetailPage>(
    `/pages/artists/${artistSlug}/albums/${albumSlug}`,
    signal
  );
};
