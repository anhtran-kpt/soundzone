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
  title: true,
  slug: true,
  duration: true,
  isExplicit: true,
  audioPublicId: true,
  trackNumber: true,
  composer: true,
  lyricist: true,
  producer: true,
});
