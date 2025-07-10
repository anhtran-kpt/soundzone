import { Prisma } from "@/app/generated/prisma";
import { artistInfoSelect } from "../artist/artist-presets";

export const trackInfoSelect = {
  id: true,
  title: true,
  slug: true,
  lyrics: true,
  duration: true,
  isExplicit: true,
  audioPublicId: true,
  trackNumber: true,
  album: {
    select: {
      coverPublicId: true,
    },
  },
  artists: {
    select: {
      artist: {
        select: artistInfoSelect,
      },
    },
  },
} satisfies Prisma.TrackSelect;
