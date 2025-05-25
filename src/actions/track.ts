import db from "@/lib/db";

const trackActions = {
  getBySlug: async (slug: string) => {
    return await db.track.findUnique({
      where: { slug },
      include: {
        album: {
          select: {
            coverUrl: true,
          },
        },
      },
    });
  },
};

export default trackActions;
