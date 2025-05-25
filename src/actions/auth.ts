import db from "@/lib/db";
import { ApiError } from "@/lib/api/server/api-error";
import { SignInDto, SignUpDto } from "@/schemas";
import { comparePasswords, hashPassword } from "@/lib/auth";

const authActions = {
  signUp: async (data: SignUpDto) => {
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

  signIn: async (data: SignInDto) => {
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
};

export default authActions;
