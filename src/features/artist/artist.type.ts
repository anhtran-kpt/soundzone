import { fetchArtistByIdAction, fetchArtistsAction } from "./artist.actions";

export type ArtistDetail = Awaited<ReturnType<typeof fetchArtistByIdAction>>;
export type ArtistList = Awaited<ReturnType<typeof fetchArtistsAction>>;

export type ArtistFilters = {
  page?: number;
  limit?: number;
  artistId?: string;
};
