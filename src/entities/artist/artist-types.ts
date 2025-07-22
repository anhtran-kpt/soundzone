import {
  getDiscography,
  getInfo,
  getPopularTracks,
  getBanner,
} from "@/entities/artist/actions";

export type TArtistInfo = Awaited<ReturnType<typeof getInfo>>;
export type TPopularTracks = Awaited<ReturnType<typeof getPopularTracks>>;
export type TArtistDiscography = Awaited<ReturnType<typeof getDiscography>>;
export type TArtistBanner = Awaited<ReturnType<typeof getBanner>>;
