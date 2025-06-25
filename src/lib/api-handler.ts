import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import {
  ApiResponse,
  createSuccessResponse,
  createErrorResponse,
  formatZodError,
  ApiErrorCode,
} from "@/types/api";

type ApiHandler<T = unknown> = (
  req: NextRequest,
  context?: { params: unknown }
) => Promise<T>;

export function withApiHandler<T>(handler: ApiHandler<T>) {
  return async (req: NextRequest, context?: { params: unknown }) => {
    try {
      const result = await handler(req, context);

      if (result && typeof result === "object" && "success" in result) {
        return NextResponse.json(result);
      }

      const response = createSuccessResponse(result);
      return NextResponse.json(response);
    } catch (error) {
      console.error("API Error:", error);

      if (error instanceof ZodError) {
        const response = formatZodError(error);
        return NextResponse.json(response, { status: 400 });
      }

      // Prisma errors
      if (error instanceof PrismaClientKnownRequestError) {
        const response = handlePrismaError(error);
        return NextResponse.json(response, {
          status: getStatusCode(response.error!.code),
        });
      }

      if (error instanceof ApiError) {
        const response = createErrorResponse(
          error.code,
          error.message,
          error.details
        );
        return NextResponse.json(response, { status: error.statusCode });
      }

      const response = createErrorResponse(
        ApiErrorCode.INTERNAL_ERROR,
        "Internal server error",
        process.env.NODE_ENV === "development" ? error : undefined
      );
      return NextResponse.json(response, { status: 500 });
    }
  };
}

export class ApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500,
    public details?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

function handlePrismaError(
  error: PrismaClientKnownRequestError
): ApiResponse<never> {
  switch (error.code) {
    case "P2002":
      return createErrorResponse(
        ApiErrorCode.CONFLICT,
        "Record already exists",
        error.meta
      );
    case "P2025":
      return createErrorResponse(ApiErrorCode.NOT_FOUND, "Record not found");
    default:
      return createErrorResponse(
        ApiErrorCode.INTERNAL_ERROR,
        "Database error",
        process.env.NODE_ENV === "development" ? error : undefined
      );
  }
}

function getStatusCode(errorCode: string): number {
  switch (errorCode) {
    case ApiErrorCode.VALIDATION_ERROR:
      return 400;
    case ApiErrorCode.UNAUTHORIZED:
      return 401;
    case ApiErrorCode.FORBIDDEN:
      return 403;
    case ApiErrorCode.NOT_FOUND:
      return 404;
    case ApiErrorCode.CONFLICT:
      return 409;
    case ApiErrorCode.RATE_LIMITED:
      return 429;
    default:
      return 500;
  }
}
