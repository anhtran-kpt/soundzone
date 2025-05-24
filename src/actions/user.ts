import db from "@/lib/db";

const userActions = {
  getAll: async () => {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  },

  getBySlug: async (slug: string) => {
    const user = await db.user.findUnique({
      where: { slug },
    });
    return user;
  },
};

export default userActions;
