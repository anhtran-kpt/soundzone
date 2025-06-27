import { NextRequest } from "next/server";
import { z } from "zod";

export async function validateBody<T>(
  req: NextRequest,
  schema: z.ZodSchema<T>
): Promise<T> {
  try {
    const body = await req.json();
    return schema.parse(body);
  } catch (error) {
    throw error;
  }
}

export function validateParams<T>(params: unknown, schema: z.ZodSchema<T>): T {
  return schema.parse(params);
}

export function validateQuery<T>(
  searchParams: URLSearchParams,
  schema: z.ZodSchema<T>
): T {
  const query = Object.fromEntries(searchParams.entries());
  return schema.parse(query);
}
