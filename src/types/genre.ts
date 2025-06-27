import { createGenreAction, getGenreBySlugAction } from "@/app/actions";

export type Genre = Exclude<
  Awaited<ReturnType<typeof getGenreBySlugAction>>,
  null
>;
export type CreateGenreReturn = Awaited<ReturnType<typeof createGenreAction>>;
