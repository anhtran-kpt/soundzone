import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { Genre } from "@/schemas";
import { GENRE_ENDPOINTS } from "@/config/endpoints";
import { CreateGenreDto, UpdateGenreDto } from "@/schemas";

export const genreQueries = {
  async getAll(params?: { limit?: number }): Promise<ApiResponse<Genre[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${GENRE_ENDPOINTS.list}?${queryParams.toString()}`;
    return apiClient.get<Genre[]>(url);
  },

  async getBySlug(slug: string): Promise<ApiResponse<Genre>> {
    return apiClient.get<Genre>(GENRE_ENDPOINTS.detail(slug));
  },

  async create(data: CreateGenreDto): Promise<ApiResponse<Genre>> {
    return apiClient.post<Genre>(GENRE_ENDPOINTS.create, data);
  },

  async update(
    slug: string,
    data: UpdateGenreDto
  ): Promise<ApiResponse<Genre>> {
    return apiClient.patch<Genre>(GENRE_ENDPOINTS.update(slug), data);
  },

  async delete(slug: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(GENRE_ENDPOINTS.delete(slug));
  },
};
