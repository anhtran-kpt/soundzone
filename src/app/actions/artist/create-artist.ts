"use server";

import { CreateArtistInput, createArtistSchema } from "@/schemas/artist";
import { withErrorHandler } from "../shared/with-error-handler";

export const createArtist = withErrorHandler(async () => {});
