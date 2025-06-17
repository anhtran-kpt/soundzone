import { Prisma } from "@prisma/client";
import { customSlugify } from "@/lib/helpers";

export const generateSlug = Prisma.defineExtension({
  name: "generateSlug",
  model: {
    $allModels: {
      async generateSlug<T>(this: T, title: string): Promise<string> {
        const context = Prisma.getExtensionContext(this);
        const baseSlug = customSlugify(title);

        const existingSlugs = await context.findMany({
          where: { slug: { startsWith: baseSlug } },
          select: { slug: true },
        });

        if (existingSlugs.length === 0) return baseSlug;

        const slugMap = new Set(existingSlugs.map((item) => item.slug));
        let count = 1;
        while (slugMap.has(`${baseSlug}-${count}`)) count++;

        return `${baseSlug}-${count}`;
      },
    },
  },
});
