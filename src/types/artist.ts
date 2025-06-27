import { getArtistBySlugAction, createArtistAction } from "@/app/actions";

export type Artist = Exclude<
  Awaited<ReturnType<typeof getArtistBySlugAction>>,
  null
>;
export type CreateArtistReturn = Awaited<ReturnType<typeof createArtistAction>>;
