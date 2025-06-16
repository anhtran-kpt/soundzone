import { Prisma } from "@/app/generated/prisma";

export const fullUserInclude = Prisma.validator<Prisma.UserInclude>()({
  playlists: true,
  likedTracks: true,
  playHistory: true,
});

export const minimalUserSelect = Prisma.validator<Prisma.UserSelect>()({
  id: true,
});
