import { getArtistAction, createArtistAction } from "@/app/actions";

export type Artist = Exclude<Awaited<ReturnType<typeof getArtistAction>>, null>;
export type CreateArtistReturn = Awaited<ReturnType<typeof createArtistAction>>;
