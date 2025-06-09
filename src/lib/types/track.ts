import { Prisma } from "@/app/generated/prisma";
import { fullTrackInclude, minimalTrackSelect } from "../prisma/presets";

export type FullTrack = Prisma.TrackGetPayload<{
  include: typeof fullTrackInclude;
}>;

export type MinimalTrack = Prisma.TrackGetPayload<{
  select: typeof minimalTrackSelect;
}>;
