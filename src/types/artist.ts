import {
  getArtistsAction,
  getArtistBySlugAction,
  createArtistAction,
} from "@/app/actions";

export type GetArtistsReturn = Awaited<ReturnType<typeof getArtistsAction>>;
export type GetArtistBySlugReturn = Awaited<
  ReturnType<typeof getArtistBySlugAction>
>;
export type CreateArtistReturn = Awaited<ReturnType<typeof createArtistAction>>;
