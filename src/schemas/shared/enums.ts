import { z } from "zod";
import { ArtistRole, ReleaseType, UserRole } from "@/app/generated/prisma";

export const releaseType = z.nativeEnum(ReleaseType);
export const artistRole = z.nativeEnum(ArtistRole);
export const userRole = z.nativeEnum(UserRole);
