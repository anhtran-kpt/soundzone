import { NextResponse } from "next/server";
import { ZodError } from "zod";

export class AppError extends Error {
  statusCode: number;
  code: string;
  details?: any;

  constructor(
    message: string,
    statusCode = 500,
    code = "INTERNAL_ERROR",
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
  }
}

export function errorHandler(error: unknown) {
  console.error("API_ERROR", error);

  if (error instanceof AppError) {
    return NextResponse.json(
      {
        code: error.code,
        message: error.message,
        details: error.details,
      },
      { status: error.statusCode }
    );
  }

  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        code: "VALIDATION_ERROR",
        message: "Invalid data type",
        details: error.format(),
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      code: "INTERNAL_ERROR",
      message: "Unidentified error",
    },
    { status: 500 }
  );
}
