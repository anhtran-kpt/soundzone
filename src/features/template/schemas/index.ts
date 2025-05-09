import { z } from "zod";

// Base schema for entity
export const entitySchema = z.object({
  // Define your schema fields here
  name: z.string().min(1, "Name is required"),
  // Add more fields as needed
});

// Create schema (used for API validation)
export const createEntitySchema = entitySchema;

// Update schema (allows partial updates)
export const updateEntitySchema = entitySchema.partial();

// Define TypeScript types based on schemas
export type CreateEntityDto = z.infer<typeof createEntitySchema>;
export type UpdateEntityDto = z.infer<typeof updateEntitySchema>;
