import prisma from "@/lib/prisma";
import { CreateArtistDto, UpdateArtistDto } from "@/schemas";

export const artistService = {
  async getAll(params?: { limit?: number }) {
    return prisma.artist.findMany({
      take: params?.limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  async getBySlug(slug: string) {
    return prisma.genre.findUnique({
      where: { slug },
    });
  },

  async create(data: CreateArtistDto) {
    return prisma.artist.create({
      data: {
        ...data,
        slug: await prisma.genre.generateSlug(data.name),
      },
    });
  },

  async update(slug: string, data: UpdateArtistDto) {
    return prisma.artist.update({
      where: { slug },
      data: {
        ...data,
        slug: data.name ? await prisma.genre.generateSlug(data.name) : slug,
      },
    });
  },

  async delete(slug: string) {
    return prisma.genre.delete({
      where: { slug },
    });
  },
};
