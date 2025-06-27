import { createPlaylistAction, getPlaylistBySlugAction } from "@/app/actions";

export type Playlist = Exclude<
  Awaited<ReturnType<typeof getPlaylistBySlugAction>>,
  null
>;
export type CreatePlaylistReturn = Awaited<
  ReturnType<typeof createPlaylistAction>
>;
