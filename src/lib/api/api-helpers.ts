import { AxiosError, AxiosResponse } from "axios";
import { ApiResponse } from "@/types/api-type";

export function handleSuccess<T>(response: AxiosResponse): ApiResponse<T> {
  return {
    success: true,
    data: response.data,
    meta: response.data.meta,
  };
}

export function handleError(error: AxiosError): ApiResponse<never> {
  if (error.response) {
    return {
      success: false,
      error: {
        code: error.response.status.toString(),
        message:
          (error.response.data as { message?: string })?.message ||
          "An error occurred from server",
      },
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
