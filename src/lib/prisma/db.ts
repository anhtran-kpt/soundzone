import prisma from "./prisma";
import { generateSlug } from "../../../prisma/extensions/generateSlug";

const db = prisma
  // .$extends(updateAlbumStats)
  // .$extends(updateGenreCount)
  // .$extends(updatePlaylistStats)
  // .$extends(updateArtistFollowerCount)
  .$extends(generateSlug);

export default db;
