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

export const sharedSchemas = {
  id: z.string().cuid("Invalid ID format"),
  email: z.string().email(),
  pagination: z.object({
    page: z.coerce.number().min(1).default(1),
    limit: z.coerce.number().min(1).max(100).default(10),
  }),
  search: z.object({
    q: z.string().optional(),
    sortBy: z.string().optional(),
    sortOrder: z.enum(["asc", "desc"]).default("desc"),
  }),
};

// export const userSchemas = {
//   create: z.object({
//     name: z.string().min(1, "Name is required"),
//     email: z.string().email("Invalid email format"),
//     age: z.number().min(0).max(150).optional(),
//   }),
//   update: z.object({
//     name: z.string().min(1).optional(),
//     email: z.string().email().optional(),
//     age: z.number().min(0).max(150).optional(),
//   }),
//   params: z.object({
//     id: commonSchemas.id,
//   }),
// };
