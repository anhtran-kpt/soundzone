import axios, { AxiosResponse, AxiosError } from "axios";
import qs from "qs";
import {
  ApiResponse,
  CreateArtistReturn,
  CreateGenreReturn,
  GetArtistBySlugReturn,
  GetArtistsReturn,
  GetGenreBySlugReturn,
  GetGenresReturn,
  CreateAlbumReturn,
  GetAlbumsReturn,
  GetAlbumBySlugReturn,
  GetUserBySlugReturn,
  GetUsersReturn,
  SignUpReturn,
} from "@/types";
import {
  CreateArtistInput,
  CreateGenreInput,
  SignUp,
  CreateAlbumInput,
} from "@/schemas";

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
  TGetBySlugReturn,
  TGetAllReturn,
  TCreateInput,
  TCreateReturn
>(basePath: string) {
  return {
    getAll: (signal: AbortSignal) => api.get<TGetAllReturn>(basePath, signal),

    getBySlug: (slug: string, signal: AbortSignal) =>
      api.get<TGetBySlugReturn>(`${basePath}/${slug}`, signal),

    create: (data: TCreateInput) => api.post<TCreateReturn>(basePath, data),

    getCustom: <T>(endpoint: string, signal: AbortSignal) =>
      api.get<T>(`${basePath}${endpoint}`, signal),

    postCustom: <T>(endpoint: string, data?: unknown) =>
      api.post<T>(`${basePath}${endpoint}`, data),
  };
}

const RESOURCE_CONFIGS = {
  artists: "/artists",
  tracks: "/tracks",
  albums: "/albums",
  genres: "/genres",
  playlists: "/playlists",
  users: "/users",
} as const;

export const artistApi = createResourceApi<
  GetArtistBySlugReturn,
  GetArtistsReturn,
  CreateArtistInput,
  CreateArtistReturn
>(RESOURCE_CONFIGS.artists);

export const albumApi = createResourceApi<
  GetAlbumBySlugReturn,
  GetAlbumsReturn,
  CreateAlbumInput,
  CreateAlbumReturn
>(RESOURCE_CONFIGS.albums);

export const genreApi = createResourceApi<
  GetGenreBySlugReturn,
  GetGenresReturn,
  CreateGenreInput,
  CreateGenreReturn
>(RESOURCE_CONFIGS.genres);

// export const playlistApi = createResourceApi<
//   Playlist,
//   { playlists: Playlist[] },
//   { playlist: unknown },
//   { playlist: unknown; message: string }
// >(RESOURCE_CONFIGS.playlists);

export const userApi = {
  ...createResourceApi<
    GetUserBySlugReturn,
    GetUsersReturn,
    SignUp,
    SignUpReturn
  >(RESOURCE_CONFIGS.users),

  signUp: (data: SignUp) => api.post<SignUpReturn>("/auth/sign-up", data),
};

export default apiClient;
