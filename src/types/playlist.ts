import {
  createPlaylistAction,
  getPlaylistBySlugAction,
  getPlaylistsAction,
} from "@/app/actions";

export type GetPlaylistsReturn = Awaited<ReturnType<typeof getPlaylistsAction>>;
export type GetPlaylistBySlugReturn = Awaited<
  ReturnType<typeof getPlaylistBySlugAction>
>;
export type CreatePlaylistReturn = Awaited<
  ReturnType<typeof createPlaylistAction>
>;
