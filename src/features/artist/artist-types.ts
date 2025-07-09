import { ArtistActions } from "./artist-actions";

export type ArtistDetail = Awaited<ReturnType<typeof ArtistActions.getBySlug>>;
export type ArtistList = Awaited<ReturnType<typeof ArtistActions.getList>>;
export type ArtistInfo = Awaited<ReturnType<typeof ArtistActions.getInfo>>;
