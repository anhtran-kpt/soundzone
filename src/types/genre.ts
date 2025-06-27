import {
  createGenreAction,
  getGenreBySlugAction,
  getGenresAction,
} from "@/app/actions";

export type GetGenresReturn = Awaited<ReturnType<typeof getGenresAction>>;
export type GetGenreBySlugReturn = Awaited<
  ReturnType<typeof getGenreBySlugAction>
>;
export type CreateGenreReturn = Awaited<ReturnType<typeof createGenreAction>>;
