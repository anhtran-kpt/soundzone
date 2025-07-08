import { GenreActions } from "./genre.actions";

export type GenreDetail = Awaited<ReturnType<typeof GenreActions.getById>>;
export type GenreList = Awaited<ReturnType<typeof GenreActions.getList>>;
