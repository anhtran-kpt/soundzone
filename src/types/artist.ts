import {
  createArtist,
  followArtist,
  getArtistInfo,
  getDiscography,
  getPopularTracks,
  unfollowArtist,
  updateArtist,
} from "@/app/actions/artist";

export type CreateArtistReturn = Awaited<ReturnType<typeof createArtist>>;
export type UpdateArtistReturn = Awaited<ReturnType<typeof updateArtist>>;
export type FollowArtistReturn = Awaited<ReturnType<typeof followArtist>>;
export type UnfollowArtistReturn = Awaited<ReturnType<typeof unfollowArtist>>;
export type ArtistInfo = Awaited<ReturnType<typeof getArtistInfo>>;
export type Discography = Awaited<ReturnType<typeof getDiscography>>;
export type PopularTracks = Awaited<ReturnType<typeof getPopularTracks>>;
