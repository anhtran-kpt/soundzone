import { getTrackBySlugAction, getTracksAction } from "@/app/actions";

export type GetTracksReturn = Awaited<ReturnType<typeof getTracksAction>>;
export type GetTrackBySlugReturn = Awaited<
  ReturnType<typeof getTrackBySlugAction>
>;
