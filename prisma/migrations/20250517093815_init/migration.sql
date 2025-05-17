-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "ReleaseType" AS ENUM ('SINGLE', 'ALBUM', 'EP');

-- CreateEnum
CREATE TYPE "ArtistRole" AS ENUM ('PRIMARY', 'FEATURED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "bio" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "nationality" TEXT,
    "avatarUrl" TEXT,
    "bannerUrl" TEXT,
    "monthlyListeners" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Song" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "lyrics" TEXT,
    "duration" INTEGER NOT NULL,
    "playCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isExplicit" BOOLEAN NOT NULL DEFAULT false,
    "audioUrl" TEXT NOT NULL,
    "composers" TEXT[],
    "producers" TEXT[],
    "lyricists" TEXT[],
    "trackNumber" INTEGER NOT NULL DEFAULT 1,
    "albumId" TEXT NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Album" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "releaseType" "ReleaseType" NOT NULL DEFAULT 'ALBUM',
    "releaseDate" TIMESTAMP(3),
    "playCount" INTEGER NOT NULL DEFAULT 0,
    "totalDuration" INTEGER NOT NULL DEFAULT 0,
    "coverUrl" TEXT,
    "isExplicit" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playlist" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "totalDuration" INTEGER NOT NULL DEFAULT 0,
    "coverUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayHistory" (
    "id" TEXT NOT NULL,
    "playedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "playDuration" INTEGER NOT NULL DEFAULT 0,
    "completedPlay" BOOLEAN NOT NULL DEFAULT false,
    "sourceType" TEXT,
    "sourceId" TEXT,
    "deviceType" TEXT,
    "songId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PlayHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongArtist" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "songId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,
    "role" "ArtistRole" NOT NULL DEFAULT 'PRIMARY',
    "order" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "SongArtist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaylistSong" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "playlistId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "PlaylistSong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongGenre" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "songId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "SongGenre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlbumGenre" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "albumId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "AlbumGenre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtistGenre" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "artistId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "ArtistGenre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLikedSong" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,

    CONSTRAINT "UserLikedSong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLikedAlbum" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,

    CONSTRAINT "UserLikedAlbum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLikedPlaylist" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,

    CONSTRAINT "UserLikedPlaylist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFollowedArtist" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "UserFollowedArtist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_slug_key" ON "Artist"("slug");

-- CreateIndex
CREATE INDEX "Artist_slug_idx" ON "Artist"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Song_slug_key" ON "Song"("slug");

-- CreateIndex
CREATE INDEX "Song_slug_idx" ON "Song"("slug");

-- CreateIndex
CREATE INDEX "Song_albumId_idx" ON "Song"("albumId");

-- CreateIndex
CREATE UNIQUE INDEX "Album_slug_key" ON "Album"("slug");

-- CreateIndex
CREATE INDEX "Album_slug_idx" ON "Album"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_slug_key" ON "Playlist"("slug");

-- CreateIndex
CREATE INDEX "Playlist_slug_idx" ON "Playlist"("slug");

-- CreateIndex
CREATE INDEX "Playlist_userId_idx" ON "Playlist"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_slug_key" ON "Genre"("slug");

-- CreateIndex
CREATE INDEX "Genre_slug_idx" ON "Genre"("slug");

-- CreateIndex
CREATE INDEX "PlayHistory_userId_playedAt_idx" ON "PlayHistory"("userId", "playedAt");

-- CreateIndex
CREATE INDEX "PlayHistory_songId_idx" ON "PlayHistory"("songId");

-- CreateIndex
CREATE UNIQUE INDEX "SongArtist_songId_artistId_key" ON "SongArtist"("songId", "artistId");

-- CreateIndex
CREATE UNIQUE INDEX "PlaylistSong_playlistId_songId_key" ON "PlaylistSong"("playlistId", "songId");

-- CreateIndex
CREATE UNIQUE INDEX "SongGenre_songId_genreId_key" ON "SongGenre"("songId", "genreId");

-- CreateIndex
CREATE UNIQUE INDEX "AlbumGenre_albumId_genreId_key" ON "AlbumGenre"("albumId", "genreId");

-- CreateIndex
CREATE UNIQUE INDEX "ArtistGenre_artistId_genreId_key" ON "ArtistGenre"("artistId", "genreId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLikedSong_userId_songId_key" ON "UserLikedSong"("userId", "songId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLikedAlbum_userId_albumId_key" ON "UserLikedAlbum"("userId", "albumId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLikedPlaylist_userId_playlistId_key" ON "UserLikedPlaylist"("userId", "playlistId");

-- CreateIndex
CREATE UNIQUE INDEX "UserFollowedArtist_userId_artistId_key" ON "UserFollowedArtist"("userId", "artistId");

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayHistory" ADD CONSTRAINT "PlayHistory_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayHistory" ADD CONSTRAINT "PlayHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongArtist" ADD CONSTRAINT "SongArtist_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongArtist" ADD CONSTRAINT "SongArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistSong" ADD CONSTRAINT "PlaylistSong_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistSong" ADD CONSTRAINT "PlaylistSong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongGenre" ADD CONSTRAINT "SongGenre_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongGenre" ADD CONSTRAINT "SongGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumGenre" ADD CONSTRAINT "AlbumGenre_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlbumGenre" ADD CONSTRAINT "AlbumGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistGenre" ADD CONSTRAINT "ArtistGenre_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistGenre" ADD CONSTRAINT "ArtistGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLikedSong" ADD CONSTRAINT "UserLikedSong_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLikedSong" ADD CONSTRAINT "UserLikedSong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLikedAlbum" ADD CONSTRAINT "UserLikedAlbum_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLikedAlbum" ADD CONSTRAINT "UserLikedAlbum_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLikedPlaylist" ADD CONSTRAINT "UserLikedPlaylist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLikedPlaylist" ADD CONSTRAINT "UserLikedPlaylist_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFollowedArtist" ADD CONSTRAINT "UserFollowedArtist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFollowedArtist" ADD CONSTRAINT "UserFollowedArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
