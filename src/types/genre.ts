import { createGenreAction, getGenreBySlugAction } from "@/app/actions";

export type Genre = Awaited<ReturnType<typeof getGenreBySlugAction>>;
export type CreateGenreReturn = Awaited<ReturnType<typeof createGenreAction>>;
