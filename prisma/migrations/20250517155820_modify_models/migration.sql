/*
  Warnings:

  - The values [PRIMARY] on the enum `ArtistRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `artistId` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `composers` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `lyricists` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `producers` on the `Song` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CreditRole" AS ENUM ('COMPOSER', 'LYRICIST', 'PRODUCER', 'MIXER', 'MASTERING', 'VOCALIST', 'INSTRUMENTALIST', 'ARRANGER', 'ENGINEER');

-- AlterEnum
BEGIN;
CREATE TYPE "ArtistRole_new" AS ENUM ('MAIN', 'FEATURED');
ALTER TABLE "SongArtist" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "SongArtist" ALTER COLUMN "role" TYPE "ArtistRole_new" USING ("role"::text::"ArtistRole_new");
ALTER TYPE "ArtistRole" RENAME TO "ArtistRole_old";
ALTER TYPE "ArtistRole_new" RENAME TO "ArtistRole";
DROP TYPE "ArtistRole_old";
ALTER TABLE "SongArtist" ALTER COLUMN "role" SET DEFAULT 'MAIN';
COMMIT;

-- AlterEnum
ALTER TYPE "ReleaseType" ADD VALUE 'COMPILATION';

-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_artistId_fkey";

-- AlterTable
ALTER TABLE "Album" DROP COLUMN "artistId",
ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "songCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Artist" DROP COLUMN "dateOfBirth",
ADD COLUMN     "followerCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Genre" ADD COLUMN     "albumCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "artistCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "songCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "playCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "songCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "composers",
DROP COLUMN "lyricists",
DROP COLUMN "producers",
ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "SongArtist" ALTER COLUMN "role" SET DEFAULT 'MAIN';

-- CreateTable
CREATE TABLE "Credit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "CreditRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "songId" TEXT NOT NULL,
    "artistId" TEXT,

    CONSTRAINT "Credit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumArtist" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "albumId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "AlbumArtist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Credit_songId_idx" ON "Credit"("songId");

-- CreateIndex
CREATE INDEX "Credit_artistId_idx" ON "Credit"("artistId");

-- CreateIndex
CREATE UNIQUE INDEX "Credit_songId_name_role_key" ON "Credit"("songId", "name", "role");

-- CreateIndex
CREATE UNIQUE INDEX "AlbumArtist_albumId_artistId_key" ON "AlbumArtist"("albumId", "artistId");

-- AddForeignKey
ALTER TABLE "Credit" ADD CONSTRAINT "Credit_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credit" ADD CONSTRAINT "Credit_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumArtist" ADD CONSTRAINT "AlbumArtist_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumArtist" ADD CONSTRAINT "AlbumArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
