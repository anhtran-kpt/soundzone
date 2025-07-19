import { create } from "./actions";

export type TCreateAlbum = Awaited<ReturnType<typeof create>>;
