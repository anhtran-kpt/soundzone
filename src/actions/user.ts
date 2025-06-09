import { comparePasswords, hashPassword } from "@/lib/auth";
import { ApiError } from "@/lib/api/server/api-error";
import db from "@/lib/prisma/db";
import { SignUpInput, SignInInput } from "@/lib/validations";

const userActions = {
  signUp: async (data: SignUpInput) => {
    const existingUser = await db.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw ApiError.badRequest("User already exists", "USER_ALREADY_EXISTS");
    }

    const hashedPassword = await hashPassword(data.password);

    return db.user.create({
      data: {
        ...data,
        password: hashedPassword,
        slug: await db.user.generateSlug(data.name),
      },
    });
  },

  signIn: async (data: SignInInput) => {
    const user = await db.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw ApiError.badRequest(
        "Incorrect email or password",
        "INVALID_CREDENTIALS"
      );
    }

    const isPasswordValid = await comparePasswords(
      data.password,
      user.password
    );

    if (!isPasswordValid) {
      throw ApiError.badRequest(
        "Incorrect email or password",
        "INVALID_CREDENTIALS"
      );
    }

    return db.user.findUnique({
      where: { email: data.email },
    });
  },
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
