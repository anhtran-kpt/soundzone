import {
  getUserFollowedArtists,
  getUserInfo,
  getUserPlaylists,
  signUp,
} from "./user-actions";

export type UserInfo = Awaited<ReturnType<typeof getUserInfo>>;
export type UserSignUp = Awaited<ReturnType<typeof signUp>>;
export type UserPlaylists = Awaited<ReturnType<typeof getUserPlaylists>>;
export type UserFollowedArtists = Awaited<
  ReturnType<typeof getUserFollowedArtists>
>;
