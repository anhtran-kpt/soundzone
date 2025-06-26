import { signUpAction } from "@/app/actions/user";
import { withApiHandler } from "@/lib/api-handler";
import { signUpSchema } from "@/schemas";
import { NextRequest } from "next/server";
import { checkUserExistsAction } from "@/app/actions/user";
import { ApiErrorCode } from "@/types";
import { ApiError } from "@/lib/api-handler";
import { validateBody } from "@/lib/validation";

export const POST = withApiHandler(async (req: NextRequest) => {
  const userData = await validateBody(req, signUpSchema);

  if (await checkUserExistsAction(userData.email)) {
    throw new ApiError(
      ApiErrorCode.CONFLICT,
      "User with this email already exists",
      409
    );
  }

  const user = await signUpAction(userData);

  return {
    user,
    message: "User signed up successfully",
  };
});
