import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userClientService } from "../services/client";
import { UpdateUserDto } from "../schemas";
import { toast } from "sonner";

// Define query keys for this user
export const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};

// Hook to fetch all users
export function useUsers(params?: { limit?: number }) {
  return useQuery({
    queryKey: userKeys.lists(),
    queryFn: () => userClientService.getAll(params),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.message || "Failed to fetch users");
      }
      return response.data;
    },
  });
}

// Hook to fetch a single user
export function useUser(id: string) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => userClientService.getById(id),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.message || "Failed to fetch user");
      }
      return response.data;
    },
    enabled: !!id, // Only run if id exists
  });
}

// Hook to update an user
export function useUpdateUser(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateUserDto) => userClientService.update(id, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("User updated successfully");
        queryClient.invalidateQueries({ queryKey: userKeys.detail(id) });
        queryClient.invalidateQueries({ queryKey: userKeys.lists() });
      } else {
        toast.error(response.message || "Failed to update user");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error updating user: ${error.message}`);
    },
  });
}

// Hook to delete an user
export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => userClientService.delete(id),
    onSuccess: (response, id) => {
      if (response.success) {
        toast.success("User deleted successfully");
        queryClient.invalidateQueries({ queryKey: userKeys.lists() });
        queryClient.removeQueries({ queryKey: userKeys.detail(id) });
      } else {
        toast.error(response.message || "Failed to delete user");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error deleting user: ${error.message}`);
    },
  });
}
