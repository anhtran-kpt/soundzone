import { signUp } from "@/app/actions/user";
import { withApiHandler } from "@/lib/api-handler";
import { signUpSchema } from "@/types";
import { NextRequest } from "next/server";
import { checkUserExists } from "@/app/actions/user";
import { ApiErrorCode } from "@/types";
import { ApiError } from "@/lib/api-handler";
import { validateBody } from "@/lib/validation";

export const POST = withApiHandler(async (req: NextRequest) => {
  const userData = await validateBody(req, signUpSchema);

  if (await checkUserExists(userData.email)) {
    throw new ApiError(
      ApiErrorCode.CONFLICT,
      "User with this email already exists",
      409
    );
  }

  const user = await signUp(userData);

  return {
    user,
    message: "User signed up successfully",
  };
});
