import API_ENDPOINTS from "@/config/api-endpoints";
import { CreateGenreDto } from "@/dtos/genre-dto";
import { apiClient } from "@/lib/api/api-client";
import { ApiResponse } from "@/lib/server/api-response";

export const genreService = {
  async createGenre(
    data: CreateGenreDto
  ): Promise<ApiResponse<CreateGenreDto>> {
    return apiClient.post<CreateGenreDto>(API_ENDPOINTS.genres.create, data);
  },
};
