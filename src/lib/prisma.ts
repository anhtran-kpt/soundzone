// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// const prisma =
//   globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate());

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// prisma.$extends({
//   name: "slug",
//   query: {
//     genre: {
//       async create({ args, query }) {
//         const context = Prisma.getExtensionContext(this);

//         const slug = slugify(args.data.name, slugOptions);

//         let uniqueSlug = slug;
//         let exists = true;
//         let count = 0;

//         while (exists) {
//           const existingGenre = await (context as any).findUnique({
//             where: { slug },
//           });

//           if (!existingGenre) {
//             exists = false;
//           } else {
//             count++;
//             uniqueSlug = `${slug}-${count}`;
//           }
//         }

//         args.data.slug = uniqueSlug;

//         return query(args);
//       },
//       async update({ args, query }) {
//         if (args.data.name) {
//           const context = Prisma.getExtensionContext(this);
//           const slug = slugify(args.data.name as string, slugOptions);

//           let uniqueSlug = slug;
//           let exists = true;
//           let count = 0;

//           while (exists) {
//             const existingGenre = await (context as any).findUnique({
//               where: { slug },
//             });

//             if (!existingGenre) {
//               exists = false;
//             } else {
//               count++;
//               uniqueSlug = `${slug}-${count}`;
//             }
//           }

//           args.data.slug = uniqueSlug;
//         }

//         return query(args);
//       },
//     },
//   },
// });

// export default prisma;

import { PrismaClient } from "@/app/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
import slugify from "slugify";

slugify.extend({ đ: "d", Đ: "D" });
const slugOptions = {
  replacement: "-",
  remove: undefined,
  lower: true,
  strict: false,
  locale: "vi",
  trim: true,
};

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient()
    .$extends({
      name: "slug",
      query: {
        genre: {
          async create({ args, query }) {
            const slug = slugify(args.data.name, slugOptions);

            let uniqueSlug = slug;
            let exists = true;
            let count = 0;

            while (exists) {
              const existingGenre = await prisma.genre.findUnique({
                where: { slug },
              });

              if (!existingGenre) {
                exists = false;
              } else {
                count++;
                uniqueSlug = `${slug}-${count}`;
              }
            }

            args.data.slug = uniqueSlug;

            return query(args);
          },
          async update({ args, query }) {
            if (args.data.name) {
              const slug = slugify(args.data.name as string, slugOptions);

              let uniqueSlug = slug;
              let exists = true;
              let count = 0;

              while (exists) {
                const existingGenre = await prisma.genre.findUnique({
                  where: { slug },
                });

                if (!existingGenre) {
                  exists = false;
                } else {
                  count++;
                  uniqueSlug = `${slug}-${count}`;
                }
              }

              args.data.slug = uniqueSlug;
            }

            return query(args);
          },
        },
      },
    })
    .$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
