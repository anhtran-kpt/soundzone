import prisma from "@/lib/prisma/prisma";

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return users;
};

export const getUserBySlug = async (slug: string) => {
  const user = await prisma.user.findUnique({
    where: { slug },
  });
  return user;
};
