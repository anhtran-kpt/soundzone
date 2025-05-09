import prisma from "@/lib/prisma";
import { CreateEntityDto, UpdateEntityDto } from "../schemas";

export const entityService = {
  // Get all entities
  async getAll(params?: { limit?: number }) {
    return prisma.entity.findMany({
      take: params?.limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  // Get a single entity by slug
  async getBySlug(slug: string) {
    return prisma.entity.findUnique({
      where: { slug },
    });
  },

  // Create a new entity
  async create(data: CreateEntityDto) {
    return prisma.entity.create({
      data,
    });
  },

  // Update an entity
  async update(slug: string, data: UpdateEntityDto) {
    return prisma.entity.update({
      where: { slug },
      data,
    });
  },

  // Delete an entity
  async delete(slug: string) {
    return prisma.entity.delete({
      where: { slug },
    });
  },
};
