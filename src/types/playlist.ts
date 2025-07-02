import { createPlaylistAction, getPlaylistAction } from "@/app/actions";

export type Playlist = Exclude<
  Awaited<ReturnType<typeof getPlaylistAction>>,
  null
>;
export type CreatePlaylistReturn = Awaited<
  ReturnType<typeof createPlaylistAction>
>;
