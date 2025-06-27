import {
  getUserBySlugAction,
  getUsersAction,
  signInAction,
  signUpAction,
} from "@/app/actions";

export type SignInReturn = Awaited<ReturnType<typeof signInAction>>;
export type SignUpReturn = Awaited<ReturnType<typeof signUpAction>>;
export type GetUsersReturn = Awaited<ReturnType<typeof getUsersAction>>;
export type GetUserBySlugReturn = Awaited<
  ReturnType<typeof getUserBySlugAction>
>;
