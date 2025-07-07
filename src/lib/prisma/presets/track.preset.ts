import { Prisma } from "@/app/generated/prisma";

export const trackSelect = {
  id: true,
  title: true,
  slug: true,
  lyrics: true,
  duration: true,
  isExplicit: true,
  audioPublicId: true,
  genres: true,
  trackNumber: true,
  credits: true,
  album: true,
  albumId: true,
  playlists: true,
  playHistory: true,
  likedByUsers: true,
  artists: true,
} satisfies Prisma.TrackSelect;
