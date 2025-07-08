import { api } from "@/lib/api/api-client";
import { UserDetail, UserList } from "./user.type";
import { PaginationParams } from "../shared";

export const UserService = {
  fetchList: async (
    signal: AbortSignal,
    params?: Partial<PaginationParams>
  ) => {
    return await api.getWithMeta<UserList>("/users", signal, params);
  },

  fetchById: async (userId: string, signal: AbortSignal) => {
    return await api.get<UserDetail>(`/users/${userId}`, signal);
  },
};
