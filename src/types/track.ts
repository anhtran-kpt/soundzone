import { getTrackAction } from "@/app/actions";

export type Track = Awaited<ReturnType<typeof getTrackAction>>;
