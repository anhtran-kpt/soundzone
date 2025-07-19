import { getFollowingArtists, getPlaylists } from "@/app/actions/user";

export type UserPlaylists = Awaited<ReturnType<typeof getPlaylists>>;
export type FollowingArtists = Awaited<ReturnType<typeof getFollowingArtists>>;
