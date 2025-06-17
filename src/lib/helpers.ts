import { ZodSchema } from "zod";
import { ApiError } from "./api/server/api-error";
import slugify from "slugify";
import { SLUG_OPTIONS } from "./constants";

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

export const emptyToNull = (value: string | undefined): string | null => {
  return value?.trim() === "" ? null : value!;
};

export const formatDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const formatName = (name: string) => {
  const words = name.split(" ");
  if (words.length >= 2) {
    return `${words[words.length - 2].charAt(0)}${words[
      words.length - 1
    ].charAt(0)}`;
  }
  if (words.length === 1) {
    return words[0].charAt(0);
  }
};

export const customSlugify = (name: string) => {
  slugify.extend({ đ: "d", Đ: "D" });
  return slugify(name, SLUG_OPTIONS);
};
