/*
  Warnings:

  - You are about to drop the `SongGenre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SongGenre" DROP CONSTRAINT "SongGenre_genreId_fkey";

-- DropForeignKey
ALTER TABLE "SongGenre" DROP CONSTRAINT "SongGenre_songId_fkey";

-- DropTable
DROP TABLE "SongGenre";
