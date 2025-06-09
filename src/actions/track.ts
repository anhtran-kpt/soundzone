import db from "@/lib/prisma/db";
import { fullTrackInclude } from "@/lib/prisma/presets";
import { FullTrack } from "@/lib/types";

const trackActions = {
  getTracks: async (): Promise<FullTrack[]> => {
    return await db.track.findMany({
      include: fullTrackInclude,
    });
  },

  getBySlug: async (slug: string): Promise<FullTrack | null> => {
    return await db.track.findUnique({
      where: { slug },
      include: fullTrackInclude,
    });
  },
};

export default trackActions;
