import prisma from "@/lib/prisma";
import { CreateAlbumDto, UpdateAlbumDto } from "@/schemas";

export const albumService = {
  async getAll(params?: { limit?: number }) {
    return prisma.album.findMany({
      take: params?.limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  async getBySlug(slug: string) {
    return prisma.album.findUnique({
      where: { slug },
    });
  },

  async create(data: CreateAlbumDto) {
    return prisma.album.create({
      data: {
        ...data,
        slug: await prisma.album.generateSlug(data.title),
      },
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
