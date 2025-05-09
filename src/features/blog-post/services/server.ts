import { db } from "@/lib/db";
import { CreateBlogPostDto, UpdateBlogPostDto } from "../schemas";

export const blogPostService = {
  // Get all blogPosts
  async getAll(params?: { limit?: number }) {
    return db.blogPost.findMany({
      take: params?.limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  // Get a single blogPost by ID
  async getById(id: string) {
    return db.blogPost.findUnique({
      where: { id },
    });
  },

  // Create a new blogPost
  async create(data: CreateBlogPostDto) {
    return db.blogPost.create({
      data,
    });
  },

  // Update an blogPost
  async update(id: string, data: UpdateBlogPostDto) {
    return db.blogPost.update({
      where: { id },
      data,
    });
  },

  // Delete an blogPost
  async delete(id: string) {
    return db.blogPost.delete({
      where: { id },
    });
  },
};
