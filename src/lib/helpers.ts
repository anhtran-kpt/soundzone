import { ZodSchema } from "zod";
import slugify from "slugify";
import { SLUG_OPTIONS } from "./constants";
import { NextResponse } from "next/server";

export const validateData = (schema: ZodSchema, data: unknown) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.errors
      .map((err) => `${err.path.join(".")}: ${err.message}`)
      .join(", ");

    return NextResponse.json({ error: errorMessages }, { status: 400 });
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

export const parsePaging = (qp: URLSearchParams) => {
  const offset = parseInt(qp.get("offset") ?? "0", 10);
  const limit = parseInt(qp.get("limit") ?? "10", 10);

  return { offset, limit };
};
