/*
  Warnings:

  - You are about to drop the column `albumId` on the `Comment` table. All the data in the column will be lost.
  - Made the column `songId` on table `Comment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_songId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_genreId_fkey";

-- DropIndex
DROP INDEX "Artist_name_idx";

-- DropIndex
DROP INDEX "Comment_albumId_idx";

-- DropIndex
DROP INDEX "Comment_songId_idx";

-- DropIndex
DROP INDEX "Listen_userId_songId_idx";

-- DropIndex
DROP INDEX "SongPlaylist_playlistId_songId_idx";

-- DropIndex
DROP INDEX "User_email_idx";

-- AlterTable
ALTER TABLE "Album" ADD COLUMN     "description" TEXT,
ADD COLUMN     "isSingle" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "albumId",
ALTER COLUMN "songId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Listen" ADD COLUMN     "device" TEXT,
ADD COLUMN     "location" TEXT;

-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "coverUrl" TEXT,
ALTER COLUMN "genreId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
