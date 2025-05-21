/*
  Warnings:

  - You are about to drop the column `avatarUrl` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "coverUrl" TEXT,
ALTER COLUMN "duration" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatarUrl",
ADD COLUMN     "image" TEXT;

-- CreateTable
CREATE TABLE "SongGenre" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "songId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "SongGenre_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SongGenre" ADD CONSTRAINT "SongGenre_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongGenre" ADD CONSTRAINT "SongGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
