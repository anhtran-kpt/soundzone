/*
  Warnings:

  - A unique constraint covering the columns `[userId,slug]` on the table `Playlist` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Playlist_slug_key";

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_userId_slug_key" ON "Playlist"("userId", "slug");
