import { getArtistDetailPage } from "@/features/artist/artist-actions";

export type ArtistDetailPage = Awaited<ReturnType<typeof getArtistDetailPage>>;
