import prisma from "@/lib/prisma";
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

  async create(data: CreateSongDto) {
    return prisma.song.create({
      data: {
        ...data,
        slug: await prisma.song.generateSlug(data.title),
      },
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
