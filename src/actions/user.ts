import prisma from "@/lib/prisma/prisma";

const userActions = {
  getAll: async () => {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  },

  getBySlug: async (slug: string) => {
    const user = await prisma.user.findUnique({
      where: { slug },
    });
    return user;
  },
};

export default userActions;
