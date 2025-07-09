import { withApiHandler } from "@/lib/api/api-handler";
import { signUpSchema } from "@/features/user";
import { NextRequest } from "next/server";
import { isUserExists, signUp } from "@/features/user";
import { ApiErrorCode } from "@/lib/api/api";
import { ApiError } from "@/lib/api/api-handler";
import { validateBody } from "@/lib/validation";

export const POST = withApiHandler(async (req: NextRequest) => {
  const userData = await validateBody(req, signUpSchema);

  if (await isUserExists(userData.email)) {
    throw new ApiError(
      ApiErrorCode.CONFLICT,
      "User with this email already exists",
      409
    );
  }

  return await signUp(userData);
});
