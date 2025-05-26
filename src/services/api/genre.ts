import { ApiResponse } from "@/lib/api/server/api-response";
import { apiClient } from "@/lib/api/client/api-client";
import { Genre, CreateGenreRequest, UpdateGenreRequest } from "@/schemas";
import { GENRE_ENDPOINTS } from "@/lib/endpoints";

export const genreApi = {
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

  async create(data: CreateGenreRequest): Promise<ApiResponse<Genre>> {
    return apiClient.post<Genre>(GENRE_ENDPOINTS.create, data);
  },

  async update(
    slug: string,
    data: UpdateGenreRequest
  ): Promise<ApiResponse<Genre>> {
    return apiClient.patch<Genre>(GENRE_ENDPOINTS.update(slug), data);
  },

  async delete(slug: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(GENRE_ENDPOINTS.delete(slug));
  },
};
