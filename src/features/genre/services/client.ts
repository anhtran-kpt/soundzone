import { ApiResponse } from "@/lib/server/api-response";
import { apiClient } from "@/lib/api/api-client";
import { GENRE_ENDPOINTS } from "../endpoints";
import { CreateGenreDto, UpdateGenreDto } from "../schemas";
import { Genre } from "@/app/generated/prisma";

export const genreClientService = {
  // Get all genres
  async getAll(params?: { limit?: number }): Promise<ApiResponse<Genre[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${GENRE_ENDPOINTS.list}?${queryParams.toString()}`;
    return apiClient.get<Genre[]>(url);
  },

  // Get a single genre by slug
  async getBySlug(slug: string): Promise<ApiResponse<Genre>> {
    return apiClient.get<Genre>(GENRE_ENDPOINTS.detail(slug));
  },

  // Create a new genre
  async create(data: CreateGenreDto): Promise<ApiResponse<Genre>> {
    return apiClient.post<Genre>(GENRE_ENDPOINTS.create, data);
  },

  // Update an genre
  async update(id: string, data: UpdateGenreDto): Promise<ApiResponse<Genre>> {
    return apiClient.put<Genre>(GENRE_ENDPOINTS.update(id), data);
  },

  // Delete an genre
  async delete(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(GENRE_ENDPOINTS.delete(id));
  },
};
