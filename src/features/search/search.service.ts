import { api } from "@/lib/api/api-client";
import { UserInfo, UserList } from "./user.type";
import { PaginationParams } from "../shared";
import { PlaylistList } from "../playlist";

export const UserService = {
  fetchList: async (
    signal: AbortSignal,
    params?: Partial<PaginationParams>
  ) => {
    return await api.getWithMeta<UserList>("/users", signal, params);
  },

  fetchInfo: async (userSlug: string, signal: AbortSignal) => {
    return await api.get<UserInfo>(`/users/${userSlug}`, signal);
  },

  fetchPlaylists: async (userSlug: string, signal: AbortSignal) => {
    return await api.get<PlaylistList>(`/users/${userSlug}/playlists`, signal);
  },

  fetchFollowedArtists: async (userSlug: string, signal: AbortSignal) => {
    return await api.get<PlaylistList>(
      `/users/${userSlug}/following-artists`,
      signal
    );
  },
};
