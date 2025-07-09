import { getArtistInfo } from "./artist-actions";

export type ArtistInfo = Awaited<ReturnType<typeof getArtistInfo>>;
