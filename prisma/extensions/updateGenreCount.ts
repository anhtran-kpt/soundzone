import { Prisma } from "@prisma/client";
import basePrisma from "../../src/lib/prisma/basePrisma";

export const updateGenreCount = Prisma.defineExtension({
  name: "updateGenreCount",
  query: {
    songGenre: {
      async create({ args, query }) {
        const result = await query(args);

        const genreId = args.data?.genreId;

        if (genreId) {
          await basePrisma.$transaction(async (tx) => {
            const songCount = await tx.songGenre.count({
              where: { genreId },
            });

            await tx.genre.update({
              where: { id: genreId },
              data: { songCount },
            });
          });
        }

        return result;
      },

      async delete({ args, query }) {
        const result = await query(args);

        const relation = await basePrisma.songGenre.findUnique({
          where: { id: args.where?.id },
          select: { genreId: true },
        });
        const genreId = relation?.genreId;

        if (genreId) {
          await basePrisma.$transaction(async (tx) => {
            const songCount = await tx.songGenre.count({
              where: { genreId },
            });

            await tx.genre.update({
              where: { id: genreId },
              data: { songCount },
            });
          });
        }

        return result;
      },
    },
    albumGenre: {
      async create({ args, query }) {
        const result = await query(args);

        const genreId = args.data?.genreId;

        if (genreId) {
          await basePrisma.$transaction(async (tx) => {
            const albumCount = await tx.albumGenre.count({
              where: { genreId },
            });

            await tx.genre.update({
              where: { id: genreId },
              data: { albumCount },
            });
          });
        }

        return result;
      },

      async delete({ args, query }) {
        const result = await query(args);

        const relation = await basePrisma.albumGenre.findUnique({
          where: { id: args.where?.id },
          select: { genreId: true },
        });
        const genreId = relation?.genreId;

        if (genreId) {
          await basePrisma.$transaction(async (tx) => {
            const albumCount = await tx.albumGenre.count({
              where: { genreId },
            });

            await tx.genre.update({
              where: { id: genreId },
              data: { albumCount },
            });
          });
        }

        return result;
      },
    },

    artistGenre: {
      async create({ args, query }) {
        const result = await query(args);

        const genreId = args.data?.genreId;

        if (genreId) {
          await basePrisma.$transaction(async (tx) => {
            const artistCount = await tx.artistGenre.count({
              where: { genreId },
            });

            await tx.genre.update({
              where: { id: genreId },
              data: { artistCount },
            });
          });
        }

        return result;
      },

      async delete({ args, query }) {
        const result = await query(args);

        const relation = await basePrisma.artistGenre.findUnique({
          where: { id: args.where?.id },
          select: { genreId: true },
        });
        const genreId = relation?.genreId;

        if (genreId) {
          await basePrisma.$transaction(async (tx) => {
            const artistCount = await tx.artistGenre.count({
              where: { genreId },
            });

            await tx.genre.update({
              where: { id: genreId },
              data: { artistCount },
            });
          });
        }

        return result;
      },
    },

    playlistGenre: {
      async create({ args, query }) {
        const result = await query(args);

        const genreId = args.data?.genreId;

        if (genreId) {
          await basePrisma.$transaction(async (tx) => {
            const playlistCount = await tx.playlistGenre.count({
              where: { genreId },
            });

            await tx.genre.update({
              where: { id: genreId },
              data: { playlistCount },
            });
          });
        }

        return result;
      },

      async delete({ args, query }) {
        const result = await query(args);

        const relation = await basePrisma.playlistGenre.findUnique({
          where: { id: args.where?.id },
          select: { genreId: true },
        });
        const genreId = relation?.genreId;

        if (genreId) {
          await basePrisma.$transaction(async (tx) => {
            const playlistCount = await tx.playlistGenre.count({
              where: { genreId },
            });

            await tx.genre.update({
              where: { id: genreId },
              data: { playlistCount },
            });
          });
        }

        return result;
      },
    },
  },
});
