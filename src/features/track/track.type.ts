import { fetchTrackByIdAction, fetchTracksAction } from "./track.actions";

export type TrackDetail = Awaited<ReturnType<typeof fetchTrackByIdAction>>;
export type TrackList = Awaited<ReturnType<typeof fetchTracksAction>>;
