import { ApiResponse } from "@/lib/server/api-response";
import { apiClient } from "@/lib/api/api-client";
import { ENTITY_ENDPOINTS } from "../endpoints";
import { CreateEntityDto, UpdateEntityDto } from "../schemas";
import { Entity } from "@/app/generated/prisma";

export const entityClientService = {
  // Get all entities
  async getAll(params?: { limit?: number }): Promise<ApiResponse<Entity[]>> {
    const queryParams = new URLSearchParams();
    if (params?.limit) {
      queryParams.append("limit", params.limit.toString());
    }

    const url = `${ENTITY_ENDPOINTS.list}?${queryParams.toString()}`;
    return apiClient.get<Entity[]>(url);
  },

  // Get a single entity by slug
  async getBySlug(slug: string): Promise<ApiResponse<Entity>> {
    return apiClient.get<Entity>(ENTITY_ENDPOINTS.detail(slug));
  },

  // Create a new entity
  async create(data: CreateEntityDto): Promise<ApiResponse<Entity>> {
    return apiClient.post<Entity>(ENTITY_ENDPOINTS.create, data);
  },

  // Update an entity
  async update(
    slug: string,
    data: UpdateEntityDto
  ): Promise<ApiResponse<Entity>> {
    return apiClient.put<Entity>(ENTITY_ENDPOINTS.update(slug), data);
  },

  // Delete an entity
  async delete(slug: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(ENTITY_ENDPOINTS.delete(slug));
  },
};
