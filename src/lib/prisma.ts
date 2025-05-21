import basePrisma from "./basePrisma";
import // updatePlaylistStats,
// updateGenreCount,
// updateAlbumStats,
// updateArtistFollowerCount,
"../../prisma/extensions";
import { generateSlug } from "../../prisma/extensions/generateSlug";

export const prisma = basePrisma
  // .$extends(updateAlbumStats)
  // .$extends(updateGenreCount)
  // .$extends(updatePlaylistStats)
  // .$extends(updateArtistFollowerCount)
  .$extends(generateSlug);
