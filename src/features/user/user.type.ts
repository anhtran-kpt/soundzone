import {
  getUserFollowedArtists,
  getUserInfo,
  getUserPlaylists,
} from "./user.actions";

// export type UserDetail = Awaited<ReturnType<typeof getUserBySlug>>;
// export type UserList = Awaited<ReturnType<typeof getUserList>>;
export type UserInfo = Awaited<ReturnType<typeof getUserInfo>>;
export type UserPlaylists = Awaited<ReturnType<typeof getUserPlaylists>>;
export type UserFollowedArtists = Awaited<
  ReturnType<typeof getUserFollowedArtists>
>;
