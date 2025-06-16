import { ApiError } from "@/lib/api/server/api-error";
import {
  SignInInput,
  signInSchema,
  SignUpRequest,
  signUpSchema,
} from "@/lib/validations";
import { getUserByEmail, signIn, signUp } from "@/lib/services/user";

export async function signUpAction(input: SignUpRequest) {
  const { ...data } = signUpSchema.parse(input);

  if (await getUserByEmail(data.email)) {
    throw ApiError.badRequest("User already exists", "USER_ALREADY_EXISTS");
  }

  try {
    return await signUp(data);
  } catch (error) {
    throw error;
  }
}

export async function signInAction(input: SignInInput) {
  const { ...data } = signInSchema.parse(input);

  try {
    return await signIn(data);
  } catch (error) {
    throw error;
  }
}
