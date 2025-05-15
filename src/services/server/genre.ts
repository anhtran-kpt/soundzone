import prisma from "@/lib/prisma";
import { CreateGenreDto, UpdateGenreDto } from "@/schemas";

export const genreService = {
  // Get all genres
  async getAll(params?: { limit?: number }) {
    return prisma.genre.findMany({
      take: params?.limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  // Get a single genre by slug
  async getBySlug(slug: string) {
    return prisma.genre.findUnique({
      where: { slug },
    });
  },

  // Create a new genre
  async create(data: CreateGenreDto) {
    return prisma.genre.create({
      data: {
        ...data,
        slug: await prisma.genre.generateSlug(data.name),
      },
    });
  },

  // Update an genre
  async update(slug: string, data: UpdateGenreDto) {
    return prisma.genre.update({
      where: { slug },
      data: {
        ...data,
        slug: data.name ? await prisma.genre.generateSlug(data.name) : slug,
      },
    });
  },

  // Delete an genre
  async delete(slug: string) {
    return prisma.genre.delete({
      where: { slug },
    });
  },
};
