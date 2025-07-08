import { PlaylistActions } from "./playlist.actions";

export type PlaylistDetail = Awaited<
  ReturnType<typeof PlaylistActions.getBySlug>
>;
export type PlaylistList = Awaited<ReturnType<typeof PlaylistActions.getList>>;
