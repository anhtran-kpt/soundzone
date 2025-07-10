import { getTrackInfo } from "./track-actions";

export type TrackInfo = Awaited<ReturnType<typeof getTrackInfo>>;
