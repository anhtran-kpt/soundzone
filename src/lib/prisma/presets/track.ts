import { Prisma } from "@/app/generated/prisma";

export const fullTrackInclude = Prisma.validator<Prisma.TrackInclude>()({
  album: true,
  artists: {
    include: {
      artist: true,
    },
  },
  genres: true,
  likedByUsers: true,
  playHistory: true,
  playlists: true,
});

export const minimalTrackSelect = Prisma.validator<Prisma.TrackSelect>()({
  id: true,
  name: true,
  slug: true,
  duration: true,
  playCount: true,
  likeCount: true,
  isExplicit: true,
  audioUrl: true,
  trackNumber: true,
  composer: true,
  lyricist: true,
  producer: true,
});
