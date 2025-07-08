import { TrackActions } from "./track.actions";

export type TrackDetail = Awaited<ReturnType<typeof TrackActions.getBySlug>>;
export type TrackList = Awaited<ReturnType<typeof TrackActions.getList>>;
