import { createUserPlaylist } from "./actions";

export type TCreateUserPlaylist = Awaited<
  ReturnType<typeof createUserPlaylist>
>;
