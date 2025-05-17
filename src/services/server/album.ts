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
    return await prisma.$transaction(async (tx) => {
      const newAlbum = await tx.album.create({
        data: {
          title: albumData.title,
          description: albumData.description,
          slug: await prisma.album.generateSlug(albumData.title),
          releaseType: albumData.releaseType,
          releaseDate: albumData.releaseDate,
          coverUrl: albumData.coverUrl,
          isExplicit: albumData.isExplicit,
          artist: {
            connect: { id: albumData.artistId },
          },
        },
      });

      if (albumData.genreIds && albumData.genreIds.length > 0) {
        await Promise.all(
          albumData.genreIds.map((genreId) =>
            tx.albumGenre.create({
              data: {
                album: { connect: { id: newAlbum.id } },
                genre: { connect: { id: genreId } },
              },
            })
          )
        );
      }

      return newAlbum;
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
