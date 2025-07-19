"use server";

import { CreateArtistInput, createArtistSchema } from "@/schemas/artist";
import { withErrorHandler } from "../../../app/actions/shared/with-error-handler";

export const create = withErrorHandler(async () => {});
