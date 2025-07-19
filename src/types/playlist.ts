import { createPlaylist } from "@/app/actions/playlist";

export type CreatePlaylistReturn = Awaited<ReturnType<typeof createPlaylist>>;
