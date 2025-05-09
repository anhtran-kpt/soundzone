import { slugifyOptions } from "@/config/slugify-options";
import slugify from "slugify";

export const generateSlug = (text: string) => {
  return slugify(text, slugifyOptions);
};
