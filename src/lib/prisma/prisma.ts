import basePrisma from "./basePrisma";
import { generateSlug } from "../../../prisma/extensions/generateSlug";

const prisma = basePrisma
  // .$extends(updateAlbumStats)
  // .$extends(updateGenreCount)
  // .$extends(updatePlaylistStats)
  // .$extends(updateArtistFollowerCount)
  .$extends(generateSlug);

export default prisma;
