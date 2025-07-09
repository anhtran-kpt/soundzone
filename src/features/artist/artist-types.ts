import { getArtistDiscography, getArtistInfo } from "./artist-actions";

export type ArtistInfo = Awaited<ReturnType<typeof getArtistInfo>>;
export type ArtistDiscography = Awaited<
  ReturnType<typeof getArtistDiscography>
>;
