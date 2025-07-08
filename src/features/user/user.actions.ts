"use server";

import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";
import { DEFAULT_PARAMS } from "@/lib/constants";
import { PaginationParams } from "../shared";
import { comparePasswords, hashPassword } from "@/lib/next-auth";
import {
  SignInInput,
  signInSchema,
  SignUpInput,
  signUpSchema,
} from "./user.schema";
import { parseParams } from "@/lib/utils";

export const UserActions = {
  isExists: async (email: string) => {
    return !!(await db.user.findUnique({
      where: {
        email,
      },
    }));
  },

  signUp: async (input: SignUpInput) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...data } = signUpSchema.parse(input);

    const [hashedPassword, slug] = await Promise.all([
      hashPassword(data.password),
      db.user.generateSlug(data.name),
    ]);

    const newUser = db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        slug,
      },
    });

    return newUser;
  },

  signIn: async (input: SignInInput) => {
    const data = signInSchema.parse(input);

    const user = await db.user.findUnique({
      where: { email: data.email },
    });

    if (!user) throw new Error("Invalid credentials");

    if (!(await comparePasswords(data.password, user.password)))
      throw new Error("Invalid credentials");

    return user;
  },

  getList: async (params?: Partial<PaginationParams>) => {
    const { page, limit } = parseParams(params);

    const data = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = data.length;
    const totalPages = Math.ceil(total / limit);

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    };
  },

  getById: async (userId: string) => {
    const userDetail = await db.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        album: {
          include: {
            artist: true,
          },
        },
        artists: {
          select: {
            artist: true,
          },
        },
        playHistory: true,
      },
    });

    if (!userDetail) {
      throw new Error(`User with id ${userId} not found`);
    }

    return {
      ...userDetail,
      artists: flattenRelation(userDetail.artists, "artist"),
    };
  },
};
