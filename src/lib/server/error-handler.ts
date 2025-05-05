import { ApiResponse } from "./api-response";
import { ApiError } from "./api-error";
import { NextResponse } from "next/server";

type RouteHandler = (request: Request, ...args: any[]) => Promise<Response>;

export function withErrorHandler(handler: RouteHandler): RouteHandler {
  return async (request: Request, ...args) => {
    try {
      return await handler(request, ...args);
    } catch (error: any) {
      console.error("API Error:", error);

      const statusCode = error instanceof ApiError ? error.statusCode : 500;

      const errorResponse = ApiResponse.error(
        error instanceof ApiError ? error.code : "INTERNAL_SERVER_ERROR",
        error instanceof ApiError
          ? error.message
          : "An unexpected error occurred"
      );

      return NextResponse.json(errorResponse, { status: statusCode });
    }
  };
}
