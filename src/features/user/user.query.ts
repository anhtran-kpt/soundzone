import {
  keepPreviousData,
  usePrefetchQuery,
  useQuery,
} from "@tanstack/react-query";
import { UserService } from "./user.service";
import { PaginationParams } from "../shared";

const keys = {
  all: ["users"] as const,
  lists: () => [...keys.all, "list"] as const,
  list: (params?: Partial<PaginationParams>) =>
    [...keys.lists(), { params }] as const,
  details: () => [...keys.all, "detail"] as const,
  detail: (userId: string) => [...keys.details(), userId] as const,
} as const;

export const usePrefetchUsers = (params?: Partial<PaginationParams>) => {
  return usePrefetchQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => UserService.fetchList(signal, params),
  });
};

export const useUsers = (params?: Partial<PaginationParams>) => {
  return useQuery({
    queryKey: keys.list(params),
    queryFn: ({ signal }) => UserService.fetchList(signal, params),
    placeholderData: keepPreviousData,
  });
};

export const useUserById = (userId: string) => {
  return useQuery({
    queryKey: keys.detail(userId),
    queryFn: ({ signal }) => UserService.fetchById(userId, signal),
    placeholderData: keepPreviousData,
    enabled: !!userId,
  });
};
