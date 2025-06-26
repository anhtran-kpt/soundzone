import axios, { AxiosResponse, AxiosError } from "axios";
import qs from "qs";
import { ApiResponse } from "@/types";
import { CreateArtistInput, CreateGenre, SignUp } from "@/schemas";
import {
  Album,
  Artist,
  Genre,
  Playlist,
  Track,
  User,
} from "@/app/generated/prisma";

interface ResourceConfig {
  basePath: string;
}

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  paramsSerializer: (params) =>
    qs.stringify(params, {
      skipNulls: true,
      arrayFormat: "repeat",
      encodeValuesOnly: true,
    }),
});

apiClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    if (response.data.success) {
      return response;
    }
    throw new ApiClientError(response.data.error!);
  },
  (error: AxiosError<ApiResponse>) => {
    if (error.response?.data?.error) {
      throw new ApiClientError(error.response.data.error);
    }

    throw new ApiClientError({
      code: "NETWORK_ERROR",
      message: error.message || "Network error occurred",
    });
  }
);

export class ApiClientError extends Error {
  constructor(public error: NonNullable<ApiResponse["error"]>) {
    super(error.message);
    this.name = "ApiClientError";
  }

  get code() {
    return this.error.code;
  }

  get details() {
    return this.error.details;
  }

  get field() {
    return this.error.field;
  }
}

export const api = {
  async get<T>(url: string, signal: AbortSignal): Promise<T> {
    const response = await apiClient.get<ApiResponse<T>>(url, { signal });
    return response.data.data!;
  },

  async post<T>(url: string, data?: unknown): Promise<T> {
    const response = await apiClient.post<ApiResponse<T>>(url, data);
    return response.data.data!;
  },

  async put<T>(url: string, data?: unknown): Promise<T> {
    const response = await apiClient.put<ApiResponse<T>>(url, data);
    return response.data.data!;
  },

  async patch<T>(url: string, data?: unknown): Promise<T> {
    const response = await apiClient.patch<ApiResponse<T>>(url, data);
    return response.data.data!;
  },

  async delete<T>(url: string): Promise<T> {
    const response = await apiClient.delete<ApiResponse<T>>(url);
    return response.data.data!;
  },

  async getWithMeta<T>(
    url: string,
    signal: AbortSignal,
    params?: unknown
  ): Promise<ApiResponse<T>> {
    const response = await apiClient.get<ApiResponse<T>>(url, {
      params,
      signal,
    });
    return response.data;
  },
};

function createResourceApi<
  TEntity = unknown,
  TListResponse = { [key: string]: TEntity[] },
  TGetResponse = { [key: string]: TEntity },
  TCreateData = { [key: string]: TEntity },
  TCreateResponse = { [key: string]: TEntity }
>(config: ResourceConfig) {
  const { basePath } = config;

  return {
    getAll: (signal: AbortSignal) => api.get<TListResponse>(basePath, signal),

    getBySlug: (slug: string, signal: AbortSignal) =>
      api.get<TGetResponse>(`${basePath}/${slug}`, signal),

    create: (data: TCreateData) => api.post<TCreateResponse>(basePath, data),

    getCustom: <T>(endpoint: string, signal: AbortSignal) =>
      api.get<T>(`${basePath}${endpoint}`, signal),

    postCustom: <T>(endpoint: string, data?: unknown) =>
      api.post<T>(`${basePath}${endpoint}`, data),
  };
}

const RESOURCE_CONFIGS = {
  artists: {
    basePath: "/artists",
  },
  tracks: {
    basePath: "/tracks",
  },
  albums: {
    basePath: "/albums",
  },
  genres: {
    basePath: "/genres",
  },
  playlists: {
    basePath: "/playlists",
  },
  users: {
    basePath: "/users",
  },
} as const;

export const artistApi = createResourceApi<
  Artist,
  { artists: Artist[] },
  { artist: Artist },
  CreateArtistInput,
  { artist: Artist }
>(RESOURCE_CONFIGS.artists);

export const trackApi = createResourceApi<
  Track,
  { tracks: Track[] },
  { track: unknown },
  { track: unknown; message: string }
>(RESOURCE_CONFIGS.tracks);

export const albumApi = createResourceApi<
  Album,
  { albums: Album[] },
  { album: unknown },
  { album: unknown; message: string }
>(RESOURCE_CONFIGS.albums);

export const genreApi = createResourceApi<
  Genre,
  { genres: Genre[] },
  { genre: Genre },
  CreateGenre,
  { genre: Genre }
>(RESOURCE_CONFIGS.genres);

export const playlistApi = createResourceApi<
  Playlist,
  { playlists: Playlist[] },
  { playlist: unknown },
  { playlist: unknown; message: string }
>(RESOURCE_CONFIGS.playlists);

export const userApi = {
  ...createResourceApi<
    User,
    { users: User[] },
    { user: User },
    { user: User; message: string }
  >(RESOURCE_CONFIGS.users),

  signUp: (data: SignUp) => api.post<{ user: User }>("/auth/sign-up", data),
};

export default apiClient;
