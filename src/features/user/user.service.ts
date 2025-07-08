import { api } from "@/lib/api/api-client";
import { UserFollowedArtists, UserInfo, UserPlaylists } from "./user.type";

export const fetchUserInfo = async (userSlug: string, signal: AbortSignal) => {
  return await api.get<UserInfo>(`/users/${userSlug}`, signal);
};

export const fetchUserPlaylists = async (
  userSlug: string,
  signal: AbortSignal
) => {
  return await api.get<UserPlaylists>(`/users/${userSlug}/playlists`, signal);
};

export const fetchUserFollowedArtists = async (
  userSlug: string,
  signal: AbortSignal
) => {
  return await api.get<UserFollowedArtists>(
    `/users/${userSlug}/following-artists`,
    signal
  );
};
