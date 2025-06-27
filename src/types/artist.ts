import { getArtistBySlugAction, createArtistAction } from "@/app/actions";

export type Artist = Awaited<ReturnType<typeof getArtistBySlugAction>>;
export type CreateArtistReturn = Awaited<ReturnType<typeof createArtistAction>>;
