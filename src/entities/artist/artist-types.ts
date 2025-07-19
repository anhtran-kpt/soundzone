import {
  getFollowers,
  getInfo,
  getPopularTracks,
} from "@/entities/artist/actions";

export type TArtistFollowers = Awaited<ReturnType<typeof getFollowers>>;
export type TArtistInfo = Awaited<ReturnType<typeof getInfo>>;
export type TArtistPopularTracks = Awaited<ReturnType<typeof getPopularTracks>>;
