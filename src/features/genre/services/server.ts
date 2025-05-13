import prisma from "@/lib/prisma";
import { CreateGenreDto, UpdateGenreDto } from "../schemas";

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
    return prisma.genre.create({ data });
  },

  // Update an genre
  async update(id: string, data: UpdateGenreDto) {
    return prisma.genre.update({
      where: { id },
      data,
    });
  },

  // Delete an genre
  async delete(id: string) {
    return prisma.genre.delete({
      where: { id },
    });
  },
};
