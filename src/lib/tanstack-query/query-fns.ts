import { api } from "../api/api-client";
import { AlbumDetailPage, ArtistDetailPage, UserSidebar } from "../types";

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

export const fetchUserSidebar = async (
  userSlug: string,
  signal: AbortSignal
) => {
  return await api.get<UserSidebar>(`/users/${userSlug}/sidebar`, signal);
};
