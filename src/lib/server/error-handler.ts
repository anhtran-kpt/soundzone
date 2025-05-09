import { ApiResponse } from "./api-response";
import { ApiError } from "./api-error";
import { NextResponse, NextRequest } from "next/server";

type RouteHandler = (
  req: NextRequest,
  { params }: { params: Promise<{ slug: string; id: string }> }
) => Promise<NextResponse>;

export function withErrorHandler(handler: RouteHandler): RouteHandler {
  return async (request: NextRequest, { params }) => {
    try {
      return await handler(request, { params });
    } catch (error: unknown) {
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
