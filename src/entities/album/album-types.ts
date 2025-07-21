import { create, getBanner } from "./actions";

export type TAlbumSlugs = {
  albumSlug?: string;
  artistSlug: string;
};

export type TCreateAlbum = Awaited<ReturnType<typeof create>>;
export type TGetAlbumBanner = Awaited<ReturnType<typeof getBanner>>;
