"use server";

import { isEntityExists } from "@/entities/shared/is-entity-exists";
import { withErrorHandler } from "@/entities/shared/with-error-handler";
import db from "@/lib/prisma/db";

export const getBanner = withErrorHandler(
  async ({
    playlistSlug,
    userSlug,
  }: {
    playlistSlug: string;
    userSlug: string;
  }) => {
    const user = await isEntityExists("user", "slug", userSlug);

    const playlist = await db.playlist.findUniqueOrThrow({
      where: {
        userId_slug: {
          userId: user.id,
          slug: playlistSlug,
        },
      },
      select: {
        coverPublicId: true,
        isPublic: true,
        title: true,
        description: true,
        user: {
          select: {
            imagePublicId: true,
            name: true,
          },
        },
        tracks: {
          select: {
            createdAt: true,
            track: {
              select: {
                album: {
                  select: {
                    coverPublicId: true,
                    title: true,
                    slug: true,
                  },
                },
                title: true,
                duration: true,
              },
            },
          },
        },
      },
    });

    const tracks = playlist.tracks.map((track) => ({
      ...track.track,
      dateAdded: track.createdAt,
      coverPublicId: track.track.album.coverPublicId,
    }));

    return {
      ...playlist,
      tracks,
      totalDuration: tracks.reduce((acc, track) => acc + track.duration, 0),
    };
  }
);
