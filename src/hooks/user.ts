import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userQueries } from "@/queries";
import { UpdateUserDto } from "@/schemas";
import { toast } from "sonner";

export const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};

export function useUsers(params?: { limit?: number }) {
  return useQuery({
    queryKey: userKeys.lists(),
    queryFn: () => userQueries.getAll(params),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch users");
      }
      return response.data;
    },
  });
}

export function useUser(slug: string) {
  return useQuery({
    queryKey: userKeys.detail(slug),
    queryFn: () => userQueries.getBySlug(slug),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error?.message || "Failed to fetch user");
      }
      return response.data;
    },
    enabled: !!slug,
  });
}

export function useUpdateUser(slug: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateUserDto) => userQueries.update(slug, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("User updated successfully");
        queryClient.invalidateQueries({ queryKey: userKeys.detail(slug) });
        queryClient.invalidateQueries({ queryKey: userKeys.lists() });
      } else {
        toast.error(response.error?.message || "Failed to update user");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error updating user: ${error.message}`);
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => userQueries.delete(slug),
    onSuccess: (response, slug) => {
      if (response.success) {
        toast.success("User deleted successfully");
        queryClient.invalidateQueries({ queryKey: userKeys.lists() });
        queryClient.removeQueries({ queryKey: userKeys.detail(slug) });
      } else {
        toast.error(response.error?.message || "Failed to delete user");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error deleting user: ${error.message}`);
    },
  });
}
