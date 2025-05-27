import db from "@/lib/db";

const trackActions = {
  getTracks: async () => {
    return await db.track.findMany({
      include: {
        artists: {
          include: {
            artist: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
        album: true,
      },
    });
  },

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
