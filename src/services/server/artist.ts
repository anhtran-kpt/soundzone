import prisma from "../../lib/basePrisma";
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
    return prisma.artist.findUnique({
      where: { slug },
    });
  },

  async create(data: CreateArtistDto) {
    return prisma.artist.create({
      data: {
        ...data,
        slug: await prisma.artist.generateSlug(data.name),
      },
    });
  },

  async update(slug: string, data: UpdateArtistDto) {
    return prisma.artist.update({
      where: { slug },
      data: {
        ...data,
        slug: data.name ? await prisma.artist.generateSlug(data.name) : slug,
      },
    });
  },

  async delete(slug: string) {
    return prisma.artist.delete({
      where: { slug },
    });
  },
};
