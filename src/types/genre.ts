import { createGenreAction, getGenreAction } from "@/app/actions";

export type Genre = Exclude<Awaited<ReturnType<typeof getGenreAction>>, null>;
export type CreateGenreReturn = Awaited<ReturnType<typeof createGenreAction>>;
