/*
  Warnings:

  - You are about to drop the column `fileUrl` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `UserFollowsArtist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserLikedAlbum` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserLikedPlaylist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserLikedSong` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Album` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Playlist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Song` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `audioUrl` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserFollowsArtist" DROP CONSTRAINT "UserFollowsArtist_artistId_fkey";

-- DropForeignKey
ALTER TABLE "UserFollowsArtist" DROP CONSTRAINT "UserFollowsArtist_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserLikedAlbum" DROP CONSTRAINT "UserLikedAlbum_albumId_fkey";

-- DropForeignKey
ALTER TABLE "UserLikedAlbum" DROP CONSTRAINT "UserLikedAlbum_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserLikedPlaylist" DROP CONSTRAINT "UserLikedPlaylist_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "UserLikedPlaylist" DROP CONSTRAINT "UserLikedPlaylist_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserLikedSong" DROP CONSTRAINT "UserLikedSong_songId_fkey";

-- DropForeignKey
ALTER TABLE "UserLikedSong" DROP CONSTRAINT "UserLikedSong_userId_fkey";

-- AlterTable
ALTER TABLE "Album" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "fileUrl",
ADD COLUMN     "audioUrl" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "refreshToken" TEXT;

-- DropTable
DROP TABLE "UserFollowsArtist";

-- DropTable
DROP TABLE "UserLikedAlbum";

-- DropTable
DROP TABLE "UserLikedPlaylist";

-- DropTable
DROP TABLE "UserLikedSong";

-- CreateTable
CREATE TABLE "LikedSong" (
    "userId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "likedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikedSong_pkey" PRIMARY KEY ("userId","songId")
);

-- CreateTable
CREATE TABLE "LikedAlbum" (
    "userId" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,
    "likedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikedAlbum_pkey" PRIMARY KEY ("userId","albumId")
);

-- CreateTable
CREATE TABLE "LikedPlaylist" (
    "userId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "likedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikedPlaylist_pkey" PRIMARY KEY ("userId","playlistId")
);

-- CreateTable
CREATE TABLE "FollowedArtist" (
    "userId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,
    "followedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FollowedArtist_pkey" PRIMARY KEY ("userId","artistId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Album_slug_key" ON "Album"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_slug_key" ON "Artist"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_slug_key" ON "Playlist"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Song_slug_key" ON "Song"("slug");

-- AddForeignKey
ALTER TABLE "LikedSong" ADD CONSTRAINT "LikedSong_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedSong" ADD CONSTRAINT "LikedSong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedAlbum" ADD CONSTRAINT "LikedAlbum_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedAlbum" ADD CONSTRAINT "LikedAlbum_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedPlaylist" ADD CONSTRAINT "LikedPlaylist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedPlaylist" ADD CONSTRAINT "LikedPlaylist_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowedArtist" ADD CONSTRAINT "FollowedArtist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowedArtist" ADD CONSTRAINT "FollowedArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
