import { AxiosError, AxiosResponse } from "axios";
import { ApiResponse } from "@/lib/server/api-response";

export function handleSuccess<T>(response: AxiosResponse): ApiResponse<T> {
  return response.data;
}

export function handleError(error: AxiosError): ApiResponse<never> {
  if (error.response) {
    return {
      success: false,
      error: error.response.data.error,
    };
  } else if (error.request) {
    return {
      success: false,
      error: {
        code: "REQUEST_ERROR",
        message: "Can't connect to server",
      },
    };
  } else {
    return {
      success: false,
      error: {
        code: "SETUP_ERROR",
        message:
          error.message || "An error occurred while setting up the request",
      },
    };
  }
}
