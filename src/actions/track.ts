import db from "@/lib/db";

const trackActions = {
  getBySlug: async (slug: string) => {
    return await db.track.findUnique({
      where: { slug },
      include: {
        artists: {
          select: {
            artist: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
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
