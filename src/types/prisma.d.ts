import { Prisma, Album } from "@/app/generated/prisma";

declare global {
  export type AlbumWithRelations = Album &
    Prisma.AlbumGetPayload<{
      include: {
        songs: {
          include: {
            artists: true;
          };
        };
        artist: true;
        genres: true;
      };
    }>;

  // export type Album = Prisma.AlbumGetPayload<{
  //   include: {
  //     artist: { select: { id: true; name: true; slug: true } };
  //     _count: { select: { songs: true } };
  //   };
  // }>;
}
