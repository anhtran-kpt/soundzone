import { ApiResponse } from "@/types/api-type";
import { apiClient } from "@/lib/api/api-client";
import API_ENDPOINTS from "@/config/api-endpoints";
import { CreateBlogPostDto, UpdateBlogPostDto, BlogPost } from "../schemas";

// Extend API_ENDPOINTS with the blogPost endpoints if needed
// This should be defined in your config/api-endpoints.ts file
/*
export const ENTITY_ENDPOINTS = {
  list: "/api/blogPosts",
  detail: (id: string) => `/api/blogPosts/${id}`,
  create: "/api/blogPosts",
  update: (id: string) => `/api/blogPosts/${id}`,
  delete: (id: string) => `/api/blogPosts/${id}`,
};
*/

export const blogPostClientService = {
  // Get all blogPosts
  async getAll(params?: { limit?: number }): Promise<ApiResponse<BlogPost[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${API_ENDPOINTS.blogPosts.list}?${queryParams.toString()}`;
    return apiClient.get<BlogPost[]>(url);
  },

  // Get a single blogPost by ID
  async getById(id: string): Promise<ApiResponse<BlogPost>> {
    return apiClient.get<BlogPost>(API_ENDPOINTS.blogPosts.detail(id));
  },

  // Create a new blogPost
  async create(data: CreateBlogPostDto): Promise<ApiResponse<BlogPost>> {
    return apiClient.post<BlogPost>(API_ENDPOINTS.blogPosts.create, data);
  },

  // Update an blogPost
  async update(
    id: string,
    data: UpdateBlogPostDto
  ): Promise<ApiResponse<BlogPost>> {
    return apiClient.put<BlogPost>(API_ENDPOINTS.blogPosts.update(id), data);
  },

  // Delete an blogPost
  async delete(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(API_ENDPOINTS.blogPosts.delete(id));
  },
};
