import { ArtistRole, ReleaseType } from "@/app/generated/prisma";

export type Album = {
  id: string;
  title: string;
  description: string | null;
  slug: string;
  releaseType: ReleaseType;
  releaseDate: Date | null;
  playCount: number;
  totalDuration: number;
  songCount: number;
  likeCount: number;
  coverUrl: string | null;
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
  lyrics: string | null;
  duration: number;
  playCount: number;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  isExplicit: boolean;
  audioUrl: string;
  trackNumber: number;
  composer: string | null;
  lyricist: string | null;
  producer: string | null;
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
  bio: string | null;
  nationality: string | null;
  avatarUrl: string | null;
  bannerUrl: string | null;
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
  description: string | null;
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
