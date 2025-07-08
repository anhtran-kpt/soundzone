import { api } from "@/lib/api/api-client";
import { UserInfo } from "./user.type";
import { PlaylistList } from "../playlist";

export const fetchUserInfo = async (userSlug: string, signal: AbortSignal) => {
  return await api.get<UserInfo>(`/users/${userSlug}`, signal);
};

export const fetchUserPlaylists = async (
  userSlug: string,
  signal: AbortSignal
) => {
  return await api.get<PlaylistList>(`/users/${userSlug}/playlists`, signal);
};

export const fetchUserFollowedArtists = async (
  userSlug: string,
  signal: AbortSignal
) => {
  return await api.get<PlaylistList>(
    `/users/${userSlug}/following-artists`,
    signal
  );
};
