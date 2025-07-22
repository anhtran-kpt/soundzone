import { getPopularTracks } from "./actions/get-popular-tracks";

export type TPopularTracks = Awaited<ReturnType<typeof getPopularTracks>>;
