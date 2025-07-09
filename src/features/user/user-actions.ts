"use server";

import { flattenRelation } from "@/lib/helpers";
import db from "@/lib/prisma/db";
import { PaginationParams } from "../shared";
import { comparePasswords, hashPassword } from "@/lib/next-auth";
import {
  SignInInput,
  signInSchema,
  SignUpInput,
  signUpSchema,
} from "./user-schemas";
import { userInfoSelect } from "./user-presets";

export const isUserExists = async (email: string) => {
  return !!(await db.user.findUnique({
    where: {
      email,
    },
  }));
};

export const signUp = async (input: SignUpInput) => {
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
};

export const signIn = async (input: SignInInput) => {
  const data = signInSchema.parse(input);

  const user = await db.user.findUnique({
    where: { email: data.email },
  });

  if (!user) throw new Error("Invalid credentials");

  if (!(await comparePasswords(data.password, user.password)))
    throw new Error("Invalid credentials");

  return user;
};

export const getUserInfo = async (userSlug: string) => {
  return await db.user.findUniqueOrThrow({
    where: {
      slug: userSlug,
    },
    select: userInfoSelect,
  });
};

export const getUserFollowedArtists = async (userSlug: string) => {
  const user = await db.user.findUnique({
    where: {
      slug: userSlug,
    },
    include: {
      followedArtists: {
        include: {
          artist: {
            select: {
              slug: true,
              id: true,
              name: true,
              imagePublicId: true,
            },
          },
        },
      },
    },
  });

  return user?.followedArtists.map((f) => f.artist) ?? [];
};

export const getUserPlaylists = async (userSlug: string) => {
  const user = await db.user.findUnique({
    where: {
      slug: userSlug,
    },
    include: {
      playlists: {
        select: {
          id: true,
          title: true,
          slug: true,
          coverPublicId: true,
          user: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      },
    },
  });

  return user?.playlists ?? [];
};

// export const getList = async (params: PaginationParams) => {
//   const { page, limit } = params;

//   const data = await db.user.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//     take: limit,
//     skip: (page - 1) * limit,
//   });

//   const total = data.length;
//   const totalPages = Math.ceil(total / limit);

//   return {
//     data,
//     meta: {
//       page,
//       limit,
//       total,
//       totalPages,
//       hasNext: page < totalPages,
//       hasPrev: page > 1,
//     },
//   };
// };

// export const getBySlug = async (userId: string) => {
//   const userDetail = await db.user.findUnique({
//     where: {
//       id: userId,
//     },
//     include: {
//       album: {
//         include: {
//           artist: true,
//         },
//       },
//       artists: {
//         select: {
//           artist: true,
//         },
//       },
//       playHistory: true,
//     },
//   });

//   if (!userDetail) {
//     throw new Error(`User with id ${userId} not found`);
//   }

//   return {
//     ...userDetail,
//     artists: flattenRelation(userDetail.artists, "artist"),
//   };
// };
