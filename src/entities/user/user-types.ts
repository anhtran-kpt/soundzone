import { getBanner } from "../playlist/actions";
import { getFollowingArtists, getPlaylists } from "./actions";

export type TUserPlaylists = Awaited<ReturnType<typeof getPlaylists>>;
export type TUserFollowingArtists = Awaited<
  ReturnType<typeof getFollowingArtists>
>;

export type TUserPlaylistBanner = Awaited<ReturnType<typeof getBanner>>;
