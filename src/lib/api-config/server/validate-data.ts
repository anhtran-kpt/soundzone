import { ZodSchema } from "zod";
import { ApiError } from "./api-error";

export const validateData = (schema: ZodSchema, data: unknown) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.errors
      .map((err) => `${err.path.join(".")}: ${err.message}`)
      .join(", ");

    throw ApiError.badRequest(errorMessages, "VALIDATION_ERROR");
  }

  return result.data;
};
