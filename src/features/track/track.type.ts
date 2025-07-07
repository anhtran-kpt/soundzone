import { PaginationOptions } from "../shared";
import { getTrackById, getTracks } from "./track.actions";

export type TrackDetail = Awaited<ReturnType<typeof getTrackById>>;
export type TrackList = Awaited<ReturnType<typeof getTracks>>;

export type TrackFilters = {
  artistId?: string;
} & PaginationOptions;
