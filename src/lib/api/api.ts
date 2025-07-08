import { ZodError } from "zod";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
    field?: string;
  };
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export function createSuccessResponse<T>(
  data: T,
  meta?: ApiResponse<T>["meta"]
): ApiResponse<T> {
  return {
    success: true,
    data,
    meta,
  };
}

export function createErrorResponse(
  code: string,
  message: string,
  details?: unknown,
  field?: string
): ApiResponse<never> {
  return {
    success: false,
    error: {
      code,
      message,
      details,
      field,
    },
  };
}

export enum ApiErrorCode {
  VALIDATION_ERROR = "VALIDATION_ERROR",
  NOT_FOUND = "NOT_FOUND",
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  RATE_LIMITED = "RATE_LIMITED",
  CONFLICT = "CONFLICT",
}

export function formatZodError(error: ZodError) {
  const firstError = error.errors?.[0];
  return createErrorResponse(
    ApiErrorCode.VALIDATION_ERROR,
    firstError?.message || "Invalid data format",
    error.errors,
    firstError?.path?.join(".") || undefined
  );
}
