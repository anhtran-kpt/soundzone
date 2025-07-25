import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import slugify from "slugify";
import { DEFAULT_PARAMS, SLUG_OPTIONS } from "./constants";
import { PaginationParams } from "@/entities/shared/shared-types";
import { NextRequest } from "next/server";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const getAudioUrl = (publicId: string): string => {
  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${publicId}.mp3`;
};

export const parsePaginationParams = (req: NextRequest): PaginationParams => {
  const params = req.nextUrl.searchParams;

  return {
    page: parseInt(params.get("page") || DEFAULT_PARAMS.page, 10),
    limit: parseInt(params.get("limit") || DEFAULT_PARAMS.limit, 10),
  };
};
