import { getTrackBySlugAction } from "@/app/actions";

export type Track = Awaited<ReturnType<typeof getTrackBySlugAction>>;
