import { createPlaylistAction, getPlaylistBySlugAction } from "@/app/actions";

export type Playlist = Awaited<ReturnType<typeof getPlaylistBySlugAction>>;
export type CreatePlaylistReturn = Awaited<
  ReturnType<typeof createPlaylistAction>
>;
