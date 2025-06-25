import axios, { AxiosResponse, AxiosError } from "axios";
import qs from "qs";
import { ApiResponse } from "@/types";

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
  async get<T>(url: string, params?: unknown): Promise<T> {
    const response = await apiClient.get<ApiResponse<T>>(url, { params });
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

  async delete<T>(url: string): Promise<T> {
    const response = await apiClient.delete<ApiResponse<T>>(url);
    return response.data.data!;
  },

  async getWithMeta<T>(url: string, params?: unknown): Promise<ApiResponse<T>> {
    const response = await apiClient.get<ApiResponse<T>>(url, { params });
    return response.data;
  },
};

export const userApi = {
  getUsers: (params?: { page?: number; limit?: number; q?: string }) =>
    api.getWithMeta<{ users: unknown[]; meta: unknown }>("/users", params),

  getUser: (id: string) => api.get<{ user: unknown }>(`/users/${id}`),

  createUser: (data: { name: string; email: string; age?: number }) =>
    api.post<{ user: unknown; message: string }>("/users", data),

  updateUser: (
    id: string,
    data: Partial<{ name: string; email: string; age: number }>
  ) => api.put<{ user: unknown; message: string }>(`/users/${id}`, data),

  deleteUser: (id: string) => api.delete<{ message: string }>(`/users/${id}`),
};

export default apiClient;
