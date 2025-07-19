import { getFollowingArtists, getPlaylists } from "./actions";

export type TUserPlaylists = Awaited<ReturnType<typeof getPlaylists>>;
export type TUserFollowingArtists = Awaited<
  ReturnType<typeof getFollowingArtists>
>;
