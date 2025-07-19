import {
  getArtistDiscography,
  getArtistFollowers,
  getArtistInfo,
  getArtistPopularTracks,
} from "@/entities/artist/actions";
import { getPlaylists } from "./actions";

export type TUserPlaylist = Awaited<ReturnType<typeof getPlaylists>>;
