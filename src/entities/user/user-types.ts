import { getFollowingArtists, getPlaylists } from "./actions";

export type TUserPlaylist = Awaited<ReturnType<typeof getPlaylists>>;
export type TUserFollowingArtists = Awaited<
  ReturnType<typeof getFollowingArtists>
>;
