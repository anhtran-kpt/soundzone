"use server";

import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";
import { PaginationParams } from "../shared";
import { parseParams } from "@/lib/utils";

export const PlaylistActions = {
  getList: async (params?: Partial<PaginationParams>) => {
    const { page, limit } = parseParams(params);

    const data = await db.playlist.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = data.length;
    const totalPages = Math.ceil(total / limit);

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    };
  },

  getById: async (playlistId: string) => {
    const playlistDetail = await db.playlist.findUnique({
      where: {
        id: playlistId,
      },
      include: {
        album: {
          include: {
            artist: true,
          },
        },
        artists: {
          select: {
            artist: true,
          },
        },
        playHistory: true,
      },
    });

    if (!playlistDetail) {
      throw new Error(`Playlist with id ${playlistId} not found`);
    }

    return {
      ...playlistDetail,
      artists: flattenRelation(playlistDetail.artists, "artist"),
    };
  },

  create: async (userId: string) => {
    return await db.$transaction(async (tx) => {
      const count = await tx.playlist.count({
        where: {
          userId,
          type: "USER",
        },
      });

      const title = `My Playlist #${count + 1}`;

      const slug = await tx.playlist.generateSlug(title);

      return await tx.playlist.create({
        data: {
          title,
          slug,
          type: "USER",
          userId,
        },
        include: {
          user: true,
        },
      });
    });
  },

  addTrack: async (trackId: string, playlistId: string) => {
    return db.$transaction(async (tx) => {
      if (
        !(await tx.track.findUnique({
          where: {
            id: trackId,
          },
        }))
      ) {
        throw new Error("Track not found");
      }

      if (
        !(await tx.playlistTrack.findUnique({
          where: {
            playlistId_trackId: {
              playlistId,
              trackId,
            },
          },
        }))
      ) {
        throw new Error("Track existed in playlist");
      }

      const lastTrack = await tx.playlistTrack.findFirst({
        where: { playlistId },
        orderBy: { order: "desc" },
      });

      const newOrder = (lastTrack?.order || 0) + 1;

      const playlistTrack = await tx.playlistTrack.create({
        data: {
          playlistId,
          trackId,
          order: newOrder,
        },
        include: {
          track: true,
        },
      });

      return playlistTrack;
    });
  },

  removeTrack: async (trackId: string, playlistId: string) => {
    return db.$transaction(async (tx) => {
      if (
        !(await tx.track.findUnique({
          where: {
            id: trackId,
          },
        }))
      ) {
        throw new Error("Track not found");
      }

      return await tx.playlistTrack.delete({
        where: {
          playlistId_trackId: {
            playlistId,
            trackId,
          },
        },
      });
    });
  },
};
