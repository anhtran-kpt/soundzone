import { getAlbumDetailPage } from "@/features/album/album-actions";
import { getArtistDetailPage } from "@/features/artist/artist-actions";

export type ArtistDetailPage = Awaited<ReturnType<typeof getArtistDetailPage>>;
export type AlbumDetailPage = Awaited<ReturnType<typeof getAlbumDetailPage>>;
