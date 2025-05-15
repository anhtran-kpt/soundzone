import prisma from "@/lib/prisma";
import { UpdateUserDto } from "@/schemas";

export const userService = {
  // Get all users
  async getAll(params?: { limit?: number }) {
    return prisma.user.findMany({
      take: params?.limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  // Get a single user by ID
  async getById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  // Update an user
  async update(id: string, data: UpdateUserDto) {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  // Delete an user
  async delete(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  },
};
