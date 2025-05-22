export class ApiError extends Error {
  statusCode: number;
  code: string;

  constructor(
    message: string,
    statusCode = 500,
    code = "INTERNAL_SERVER_ERROR"
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.name = "ApiError";
  }

  static badRequest(message = "Bad Request", code = "BAD_REQUEST"): ApiError {
    return new ApiError(message, 400, code);
  }

  static unauthorized(
    message = "Unauthorized",
    code = "UNAUTHORIZED"
  ): ApiError {
    return new ApiError(message, 401, code);
  }

  static forbidden(message = "Forbidden", code = "FORBIDDEN"): ApiError {
    return new ApiError(message, 403, code);
  }

  static notFound(message = "Not Found", code = "NOT_FOUND"): ApiError {
    return new ApiError(message, 404, code);
  }

  static conflict(message = "Conflict", code = "CONFLICT"): ApiError {
    return new ApiError(message, 409, code);
  }

  static internal(
    message = "Internal Server Error",
    code = "INTERNAL_SERVER_ERROR"
  ): ApiError {
    return new ApiError(message, 500, code);
  }
}
