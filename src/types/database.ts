import { Prisma } from "@/app/generated/prisma";

export type Track = Prisma.TrackGetPayload<{
  include: {
    genres: true;
    album: true;
    playlists: true;
    playHistory: true;
    likedByUsers: true;
    artists: true;
  };
}>;

export type Album = Prisma.AlbumGetPayload<{
  include: {
    genres: true;
    tracks: {
      include: {
        artists: true;
      };
    };
    artists: true;
    likedByUsers: true;
  };
}>;

export type Artist = Prisma.ArtistGetPayload<{
  include: {
    albums: true;
    genres: true;
    tracks: true;
    followers: true;
  };
}>;

export type Playlist = Prisma.PlaylistGetPayload<{
  include: {
    tracks: true;
    genres: true;
    likedByUsers: true;
    user: true;
  };
}>;

export type Genre = Prisma.GenreGetPayload<{
  include: {
    tracks: true;
    albums: true;
    artists: true;
    playlists: true;
  };
}>;

export type User = Prisma.UserGetPayload<{
  include: {
    playlists: true;
    playHistory: true;
    likedTracks: true;
    likedAlbums: true;
    likedPlaylists: true;
    followedArtists: true;
  };
}>;
