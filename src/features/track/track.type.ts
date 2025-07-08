import { TrackActions } from "./track.actions";

export type TrackDetail = Awaited<ReturnType<typeof TrackActions.getById>>;
export type TrackList = Awaited<ReturnType<typeof TrackActions.getList>>;
