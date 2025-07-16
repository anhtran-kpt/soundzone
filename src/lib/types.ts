import { getAlbumDetailPage } from "@/features/album/album-actions";
import { getArtistDetailPage } from "@/features/artist/artist-actions";
import { getUserSidebar } from "@/features/user";

export type ArtistDetailPage = Awaited<ReturnType<typeof getArtistDetailPage>>;
export type AlbumDetailPage = Awaited<ReturnType<typeof getAlbumDetailPage>>;
export type UserSidebar = Awaited<ReturnType<typeof getUserSidebar>>;
