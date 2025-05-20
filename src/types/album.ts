import { ArtistRole, ReleaseType } from "@/app/generated/prisma";

export type Album = {
  id: string;
  title: string;
  description: string | undefined;
  slug: string;
  releaseType: ReleaseType;
  releaseDate: Date | undefined;
  playCount: number;
  totalDuration: number;
  songCount: number;
  likeCount: number;
  coverUrl: string | undefined;
  isExplicit: boolean;
  createdAt: Date;
  updatedAt: Date;
  songs: Song[];
  artist: Artist;
  artistId: string;
  genres: AlbumGenre[];
  // likedByUsers: UserLikedAlbum[];
};

export type Song = {
  id: string;
  title: string;
  slug: string;
  lyrics: string | undefined;
  duration: number;
  playCount: number;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  isExplicit: boolean;
  audioUrl: string;
  trackNumber: number;
  composer: string | undefined;
  lyricist: string | undefined;
  producer: string | undefined;
  album: Album;
  albumId: string;
  // playlists: PlaylistSong[];
  // playHistory: PlayHistory[];
  // likedByUsers: UserLikedSong[];
  artists: SongArtist[];
};

export type Artist = {
  id: string;
  name: string;
  slug: string;
  bio: string | undefined;
  nationality: string | undefined;
  avatarUrl: string | undefined;
  bannerUrl: string | undefined;
  followerCount: number;
  monthlyListeners: number;
  createdAt: Date;
  updatedAt: Date;
  songs: SongArtist[];
  albums: Album[];
  genres: ArtistGenre[];
  // followers: UserFollowedArtist[];
};

export type SongArtist = {
  id: string;
  createdAt: Date;
  song: Song;
  songId: string;
  artist: Artist;
  artistId: string;
  role: ArtistRole;
  order: number;
};

export type AlbumGenre = {
  id: string;
  createdAt: Date;
  album: Album;
  albumId: string;
  genre: Genre;
  genreId: string;
};

export type Genre = {
  id: string;
  name: string;
  description: string | undefined;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  songCount: number;
  artistCount: number;
  albumCount: number;
  albums: AlbumGenre[];
  artists: ArtistGenre[];
};

export type ArtistGenre = {
  id: string;
  createdAt: Date;
  artist: Artist;
  artistId: string;
  genre: Genre;
  genreId: string;
};
