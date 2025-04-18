/*
  Warnings:

  - You are about to drop the column `isSingle` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `biography` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `artistId` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FollowedArtist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikedAlbum` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikedPlaylist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikedSong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Listen` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SongPlaylist` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Made the column `albumId` on table `Song` required. This step will fail if there are existing NULL values in that column.
  - Made the column `genreId` on table `Song` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "ArtistRole" AS ENUM ('PRIMARY', 'FEATURING');

-- CreateEnum
CREATE TYPE "ReleaseType" AS ENUM ('ALBUM', 'EP', 'SINGLE');

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_songId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "FollowedArtist" DROP CONSTRAINT "FollowedArtist_artistId_fkey";

-- DropForeignKey
ALTER TABLE "FollowedArtist" DROP CONSTRAINT "FollowedArtist_userId_fkey";

-- DropForeignKey
ALTER TABLE "LikedAlbum" DROP CONSTRAINT "LikedAlbum_albumId_fkey";

-- DropForeignKey
ALTER TABLE "LikedAlbum" DROP CONSTRAINT "LikedAlbum_userId_fkey";

-- DropForeignKey
ALTER TABLE "LikedPlaylist" DROP CONSTRAINT "LikedPlaylist_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "LikedPlaylist" DROP CONSTRAINT "LikedPlaylist_userId_fkey";

-- DropForeignKey
ALTER TABLE "LikedSong" DROP CONSTRAINT "LikedSong_songId_fkey";

-- DropForeignKey
ALTER TABLE "LikedSong" DROP CONSTRAINT "LikedSong_userId_fkey";

-- DropForeignKey
ALTER TABLE "Listen" DROP CONSTRAINT "Listen_songId_fkey";

-- DropForeignKey
ALTER TABLE "Listen" DROP CONSTRAINT "Listen_userId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_artistId_fkey";

-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_genreId_fkey";

-- DropForeignKey
ALTER TABLE "SongPlaylist" DROP CONSTRAINT "SongPlaylist_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "SongPlaylist" DROP CONSTRAINT "SongPlaylist_songId_fkey";

-- AlterTable
ALTER TABLE "Album" DROP COLUMN "isSingle",
ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "releaseType" "ReleaseType" NOT NULL DEFAULT 'SINGLE',
ADD COLUMN     "songCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalDuration" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Artist" DROP COLUMN "biography",
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "born" TIMESTAMP(3),
ADD COLUMN     "followerCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "from" TEXT,
ADD COLUMN     "genre" TEXT;

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "title",
ADD COLUMN     "favorCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "songCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalDuration" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "artistId",
ADD COLUMN     "favorCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "playCount" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "albumId" SET NOT NULL,
ALTER COLUMN "genreId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "refreshToken",
ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "emailVerifiedAt" TIMESTAMP(3),
ADD COLUMN     "passwordResetToken" TEXT,
ADD COLUMN     "passwordResetTokenExpires" TIMESTAMP(3);

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "FollowedArtist";

-- DropTable
DROP TABLE "LikedAlbum";

-- DropTable
DROP TABLE "LikedPlaylist";

-- DropTable
DROP TABLE "LikedSong";

-- DropTable
DROP TABLE "Listen";

-- DropTable
DROP TABLE "SongPlaylist";

-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongArtist" (
    "id" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,
    "role" "ArtistRole" NOT NULL DEFAULT 'PRIMARY',
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SongArtist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaylistSong" (
    "id" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlaylistSong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongFavor" (
    "userId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SongFavor_pkey" PRIMARY KEY ("userId","songId")
);

-- CreateTable
CREATE TABLE "AlbumFavor" (
    "userId" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AlbumFavor_pkey" PRIMARY KEY ("userId","albumId")
);

-- CreateTable
CREATE TABLE "PlaylistFavor" (
    "userId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlaylistFavor_pkey" PRIMARY KEY ("userId","playlistId")
);

-- CreateTable
CREATE TABLE "ArtistFollow" (
    "userId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArtistFollow_pkey" PRIMARY KEY ("userId","artistId")
);

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_token_key" ON "RefreshToken"("token");

-- CreateIndex
CREATE INDEX "RefreshToken_userId_idx" ON "RefreshToken"("userId");

-- CreateIndex
CREATE INDEX "SongArtist_artistId_idx" ON "SongArtist"("artistId");

-- CreateIndex
CREATE UNIQUE INDEX "SongArtist_songId_artistId_key" ON "SongArtist"("songId", "artistId");

-- CreateIndex
CREATE INDEX "PlaylistSong_playlistId_order_idx" ON "PlaylistSong"("playlistId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "PlaylistSong_playlistId_songId_key" ON "PlaylistSong"("playlistId", "songId");

-- CreateIndex
CREATE INDEX "Album_title_idx" ON "Album"("title");

-- CreateIndex
CREATE INDEX "Artist_name_idx" ON "Artist"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE INDEX "Genre_name_idx" ON "Genre"("name");

-- CreateIndex
CREATE INDEX "PlayHistory_userId_idx" ON "PlayHistory"("userId");

-- CreateIndex
CREATE INDEX "PlayHistory_songId_idx" ON "PlayHistory"("songId");

-- CreateIndex
CREATE INDEX "Playlist_userId_idx" ON "Playlist"("userId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongArtist" ADD CONSTRAINT "SongArtist_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongArtist" ADD CONSTRAINT "SongArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistSong" ADD CONSTRAINT "PlaylistSong_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistSong" ADD CONSTRAINT "PlaylistSong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongFavor" ADD CONSTRAINT "SongFavor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongFavor" ADD CONSTRAINT "SongFavor_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumFavor" ADD CONSTRAINT "AlbumFavor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumFavor" ADD CONSTRAINT "AlbumFavor_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistFavor" ADD CONSTRAINT "PlaylistFavor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistFavor" ADD CONSTRAINT "PlaylistFavor_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistFollow" ADD CONSTRAINT "ArtistFollow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistFollow" ADD CONSTRAINT "ArtistFollow_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
