import prisma from "../../../prisma/basePrisma";
import { CreateSongDto, UpdateSongDto } from "@/schemas";

export const songService = {
  async getAll(params?: { limit?: number }) {
    return prisma.song.findMany({
      take: params?.limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  async getBySlug(slug: string) {
    return prisma.song.findUnique({
      where: { slug },
    });
  },

  async create(songData: CreateSongDto) {
    return await prisma.$transaction(async (tx) => {
      const newSong = await tx.song.create({
        data: {
          title: songData.title,
          slug: await prisma.song.generateSlug(songData.title),
          duration: songData.duration,
          audioUrl: songData.audioUrl,
          isExplicit: songData.isExplicit,
          trackNumber: songData.trackNumber,
          lyrics: songData.lyrics,
          album: {
            connect: { id: songData.albumId },
          },
        },
      });

      if (songData.artists && songData.artists.length > 0) {
        await Promise.all(
          songData.artists.map((artistData) =>
            tx.songArtist.create({
              data: {
                song: { connect: { id: newSong.id } },
                artist: { connect: { id: artistData.artistId } },
                role: artistData.role,
                order: artistData.order,
              },
            })
          )
        );
      }

      if (songData.genreIds && songData.genreIds.length > 0) {
        await Promise.all(
          songData.genreIds.map((genreId) =>
            tx.songGenre.create({
              data: {
                song: { connect: { id: newSong.id } },
                genre: { connect: { id: genreId } },
              },
            })
          )
        );
        await Promise.all(
          songData.genreIds.map((genreId) =>
            tx.genre.update({
              where: { id: genreId },
              data: { songCount: { increment: 1 } },
            })
          )
        );
      }

      return newSong;
    });
  },

  async update(slug: string, data: UpdateSongDto) {
    return prisma.song.update({
      where: { slug },
      data: {
        ...data,
        slug: data.title ? await prisma.song.generateSlug(data.title) : slug,
      },
    });
  },

  async delete(slug: string) {
    return prisma.song.delete({
      where: { slug },
    });
  },
};
