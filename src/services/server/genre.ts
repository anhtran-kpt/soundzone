import prisma from "../../../prisma/basePrisma";
import { CreateGenreDto, UpdateGenreDto } from "@/schemas";

export const genreService = {
  async getAll(params?: { limit?: number }) {
    return prisma.genre.findMany({
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

  async create(data: CreateGenreDto) {
    return prisma.genre.create({
      data: {
        ...data,
        slug: await prisma.genre.generateSlug(data.name),
      },
    });
  },

  async update(slug: string, data: UpdateGenreDto) {
    return prisma.genre.update({
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
