import basePrisma from "./basePrisma";
import {
  updatePlaylistStats,
  updateGenreCount,
  updateAlbumStats,
  updateArtistFollowerCount,
} from "./extensions";

export const prisma = basePrisma
  .$extends(updateAlbumStats)
  .$extends(updateGenreCount)
  .$extends(updatePlaylistStats)
  .$extends(updateArtistFollowerCount);
