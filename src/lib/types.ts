import { getAlbumDetailPage } from "@/features/album/album-actions";
import { getArtistDetailPage } from "@/app/actions/page/get-artist-detail-page";
import { getUserSidebar } from "@/features/user";

export type ArtistDetailPage = Awaited<ReturnType<typeof getArtistDetailPage>>;
export type AlbumDetailPage = Awaited<ReturnType<typeof getAlbumDetailPage>>;
export type UserSidebar = Awaited<ReturnType<typeof getUserSidebar>>;
