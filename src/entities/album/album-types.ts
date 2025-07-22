import {
  create,
  getActions,
  getBanner,
  getDiscography,
  getTracks,
} from "./actions";

export type TAlbumSlugs = {
  albumSlug?: string;
  artistSlug: string;
};

export type TCreateAlbum = Awaited<ReturnType<typeof create>>;
export type TGetAlbumBanner = Awaited<ReturnType<typeof getBanner>>;
export type TGetAlbumTracks = Awaited<ReturnType<typeof getTracks>>;
export type TGetAlbumActions = Awaited<ReturnType<typeof getActions>>;
export type TGetAlbumDiscography = Awaited<ReturnType<typeof getDiscography>>;
