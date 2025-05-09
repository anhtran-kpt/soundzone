import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { ApiResponse } from "@/lib/server/api-response";
import { handleSuccess, handleError } from "./api-helpers";

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.get<T>(url, config);
      return handleSuccess<T>(response);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.post<T>(url, data, config);
      return handleSuccess<T>(response);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  }

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.put<T>(url, data, config);
      return handleSuccess<T>(response);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.delete<T>(url, config);
      return handleSuccess<T>(response);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  }

  async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.patch<T>(url, data, config);
      return handleSuccess<T>(response);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  }
}

export const apiClient = new ApiClient(
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"
);

export default ApiClient;
