import {
  getArtistDiscography,
  getArtistFollowers,
  getArtistInfo,
  getArtistPopularTracks,
} from "@/entities/artist/actions";
import { getArtistBanner } from "./actions/get-artist-banner";

export type TArtistFollowers = Awaited<ReturnType<typeof getArtistFollowers>>;
export type TArtistInfo = Awaited<ReturnType<typeof getArtistInfo>>;
export type TArtistPopularTracks = Awaited<
  ReturnType<typeof getArtistPopularTracks>
>;
export type TArtistDiscography = Awaited<
  ReturnType<typeof getArtistDiscography>
>;
export type TArtistBanner = Awaited<ReturnType<typeof getArtistBanner>>;
