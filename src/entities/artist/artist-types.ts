import {
  getDiscography,
  getInfo,
  getPopularTracks,
  getBanner,
  getActions,
  isFollowing,
  follow,
  unfollow,
  getAbout,
  getOthers,
} from "@/entities/artist/actions";

export type TArtistInfo = Awaited<ReturnType<typeof getInfo>>;
export type TPopularTracks = Awaited<ReturnType<typeof getPopularTracks>>;
export type TArtistDiscography = Awaited<ReturnType<typeof getDiscography>>;
export type TArtistBanner = Awaited<ReturnType<typeof getBanner>>;
export type TArtistActions = Awaited<ReturnType<typeof getActions>>;
export type TIsFollowing = Awaited<ReturnType<typeof isFollowing>>;
export type TFollow = Awaited<ReturnType<typeof follow>>;
export type TUnfollow = Awaited<ReturnType<typeof unfollow>>;
export type TArtistAbout = Awaited<ReturnType<typeof getAbout>>;
export type TArtistOthers = Awaited<ReturnType<typeof getOthers>>;
