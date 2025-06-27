import { getTrackBySlugAction } from "@/app/actions";

export type Track = Exclude<
  Awaited<ReturnType<typeof getTrackBySlugAction>>,
  null
>;
