import { ArtistActions } from "./artist.actions";

export type ArtistDetail = Awaited<ReturnType<typeof ArtistActions.getById>>;
export type ArtistList = Awaited<ReturnType<typeof ArtistActions.getList>>;
