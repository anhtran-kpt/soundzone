import { api } from "@/lib/api/api-client";
import {
  UserFollowedArtists,
  UserInfo,
  UserPlaylists,
  UserSignUp,
} from "./user-types";
import { SignUpInput } from "./user-schemas";

export const signUpUser = async (data: SignUpInput) => {
  return api.post<UserSignUp>("/auth/sign-up", data);
};

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
