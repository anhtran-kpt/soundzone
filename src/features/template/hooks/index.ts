import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { entityClientService } from "../services/client";
import { CreateEntityDto, UpdateEntityDto } from "../schemas";
import { toast } from "sonner";

// Define query keys for this entity
export const entityKeys = {
  all: ["entities"] as const,
  lists: () => [...entityKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...entityKeys.lists(), { filters }] as const,
  details: () => [...entityKeys.all, "detail"] as const,
  detail: (slug: string) => [...entityKeys.details(), slug] as const,
};

// Hook to fetch all entities
export function useEntities(params?: { limit?: number }) {
  return useQuery({
    queryKey: entityKeys.lists(),
    queryFn: () => entityClientService.getAll(params),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch entities");
      }
      return response.data;
    },
  });
}

// Hook to fetch a single entity
export function useEntity(slug: string) {
  return useQuery({
    queryKey: entityKeys.detail(slug),
    queryFn: () => entityClientService.getBySlug(slug),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch entity");
      }
      return response.data;
    },
    enabled: !!slug, // Only run if slug exists
  });
}

// Hook to create an entity
export function useCreateEntity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateEntityDto) => entityClientService.create(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Entity created successfully");
        queryClient.invalidateQueries({ queryKey: entityKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to create entity");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error creating entity: ${error.message}`);
    },
  });
}

// Hook to update an entity
export function useUpdateEntity(slug: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateEntityDto) =>
      entityClientService.update(slug, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Entity updated successfully");
        queryClient.invalidateQueries({ queryKey: entityKeys.detail(slug) });
        queryClient.invalidateQueries({ queryKey: entityKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to update entity");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error updating entity: ${error.message}`);
    },
  });
}

// Hook to delete an entity
export function useDeleteEntity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => entityClientService.delete(slug),
    onSuccess: (response, slug) => {
      if (response.success) {
        toast.success("Entity deleted successfully");
        queryClient.invalidateQueries({ queryKey: entityKeys.lists() });
        queryClient.removeQueries({ queryKey: entityKeys.detail(slug) });
      } else {
        toast.error(response.error?.message || "Failed to delete entity");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error deleting entity: ${error.message}`);
    },
  });
}
