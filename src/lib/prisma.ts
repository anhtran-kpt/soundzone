import { PrismaClient, Prisma } from "@/app/generated/prisma";
import { SLUG_OPTIONS } from "@/config";
import { withAccelerate } from "@prisma/extension-accelerate";
import slugify from "slugify";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient()
    .$extends({
      model: {
        $allModels: {
          async generateSlug<T>(this: T, title: string): Promise<string> {
            const context = Prisma.getExtensionContext(this);

            slugify.extend({ đ: "d", Đ: "D" });
            const baseSlug = slugify(title, SLUG_OPTIONS);
            let slug = baseSlug;
            let count = 1;

            while (await context.findUnique({ where: { slug } })) {
              slug = `${baseSlug}-${count}`;
              count++;
            }

            return slug;
          },
        },
      },
    })
    .$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
