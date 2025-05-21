-- AlterTable
ALTER TABLE "Genre" ADD COLUMN     "playlistCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "PlaylistGenre" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "playlistId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "PlaylistGenre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlaylistGenre_playlistId_genreId_key" ON "PlaylistGenre"("playlistId", "genreId");

-- AddForeignKey
ALTER TABLE "PlaylistGenre" ADD CONSTRAINT "PlaylistGenre_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistGenre" ADD CONSTRAINT "PlaylistGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
