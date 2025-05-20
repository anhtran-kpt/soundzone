import prisma from "@/lib/prisma";
import { CreateAlbumDto, UpdateAlbumDto } from "@/schemas";

export const albumService = {
  async getAll(params?: { limit?: number }) {
    return prisma.album.findMany({
      take: params?.limit,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        artist: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        genres: {
          select: {
            genreId: true,
          },
        },
      },
    });
  },

  async getBySlug(slug: string) {
    return prisma.album.findUnique({
      where: { slug },
      include: {
        genres: {
          select: {
            genreId: true,
          },
        },
      },
    });
  },

  async create(albumData: CreateAlbumDto) {
    const {
      title,
      description,
      releaseType,
      releaseDate,
      coverUrl,
      isExplicit,
      artistId,
      genreIds,
      songs,
    } = albumData;

    return await prisma.$transaction(async (tx) => {
      const albumSlug = await tx.album.generateSlug(title);

      const album = await tx.album.create({
        data: {
          title,
          slug: albumSlug,
          description,
          releaseType,
          releaseDate,
          coverUrl,
          isExplicit,
          artist: {
            connect: { id: artistId },
          },
        },
      });

      for (const songData of songs) {
        const songSlug = await tx.song.generateSlug(songData.title);

        const song = await tx.song.create({
          data: {
            title: songData.title,
            slug: songSlug,
            duration: songData.duration,
            audioUrl: songData.audioUrl,
            trackNumber: songData.trackNumber,
            isExplicit: songData.isExplicit,
            lyrics: songData.lyrics,
            album: { connect: { id: album.id } },
            composer: songData.composer,
            lyricist: songData.lyricist,
            producer: songData.producer,
          },
        });

        await Promise.all(
          songData.artists.map((artistInput) =>
            tx.songArtist.create({
              data: {
                song: { connect: { id: song.id } },
                artist: { connect: { id: artistInput.artistId } },
                role: artistInput.role,
                order: artistInput.order,
              },
            })
          )
        );
      }

      if (genreIds.length > 0) {
        await Promise.all(
          genreIds.map((genreId) =>
            tx.albumGenre.create({
              data: {
                album: { connect: { id: album.id } },
                genre: { connect: { id: genreId } },
              },
            })
          )
        );
      }

      return await tx.album.findUnique({
        where: { id: album.id },
        include: {
          songs: {
            include: {
              artists: {
                include: {
                  artist: true,
                },
                orderBy: {
                  order: "asc",
                },
              },
            },
            orderBy: {
              trackNumber: "asc",
            },
          },
          artist: true,
          genres: {
            include: {
              genre: true,
            },
          },
        },
      });
    });
  },

  async update(slug: string, data: UpdateAlbumDto) {
    return prisma.album.update({
      where: { slug },
      data: {
        ...data,
        slug: data.title ? await prisma.album.generateSlug(data.title) : slug,
      },
    });
  },

  async delete(slug: string) {
    return prisma.album.delete({
      where: { slug },
    });
  },
};
