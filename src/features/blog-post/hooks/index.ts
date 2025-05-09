import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { blogPostClientService } from "../services/client";
import { CreateBlogPostDto, BlogPost, UpdateBlogPostDto } from "../schemas";
import { toast } from "sonner";

// Define query keys for this blogPost
export const blogPostKeys = {
  all: ["blogPosts"] as const,
  lists: () => [...blogPostKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...blogPostKeys.lists(), { filters }] as const,
  details: () => [...blogPostKeys.all, "detail"] as const,
  detail: (id: string) => [...blogPostKeys.details(), id] as const,
};

// Hook to fetch all blogPosts
export function useBlogPosts(params?: { limit?: number }) {
  return useQuery({
    queryKey: blogPostKeys.lists(),
    queryFn: () => blogPostClientService.getAll(params),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.message || "Failed to fetch blogPosts");
      }
      return response.data;
    },
  });
}

// Hook to fetch a single blogPost
export function useBlogPost(id: string) {
  return useQuery({
    queryKey: blogPostKeys.detail(id),
    queryFn: () => blogPostClientService.getById(id),
    select: (response) => {
      if (!response.success) {
        throw new Error(response.message || "Failed to fetch blogPost");
      }
      return response.data;
    },
    enabled: !!id, // Only run if id exists
  });
}

// Hook to create an blogPost
export function useCreateBlogPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateBlogPostDto) => blogPostClientService.create(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("BlogPost created successfully");
        queryClient.invalidateQueries({ queryKey: blogPostKeys.lists() });
      } else {
        toast.error(response.message || "Failed to create blogPost");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error creating blogPost: ${error.message}`);
    },
  });
}

// Hook to update an blogPost
export function useUpdateBlogPost(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateBlogPostDto) => blogPostClientService.update(id, data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("BlogPost updated successfully");
        queryClient.invalidateQueries({ queryKey: blogPostKeys.detail(id) });
        queryClient.invalidateQueries({ queryKey: blogPostKeys.lists() });
      } else {
        toast.error(response.message || "Failed to update blogPost");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error updating blogPost: ${error.message}`);
    },
  });
}

// Hook to delete an blogPost
export function useDeleteBlogPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => blogPostClientService.delete(id),
    onSuccess: (response, id) => {
      if (response.success) {
        toast.success("BlogPost deleted successfully");
        queryClient.invalidateQueries({ queryKey: blogPostKeys.lists() });
        queryClient.removeQueries({ queryKey: blogPostKeys.detail(id) });
      } else {
        toast.error(response.message || "Failed to delete blogPost");
      }
    },
    onError: (error: Error) => {
      toast.error(`Error deleting blogPost: ${error.message}`);
    },
  });
}
