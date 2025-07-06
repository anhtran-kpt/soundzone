import db from "@/lib/prisma/db";

export const searchTracksAction = async (
  query: string,
  limit: number,
  offset: number
) => {
  const tracks = await db.track.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
        // {
        //   artist: {
        //     contains: query,
        //     mode: "insensitive",
        //   },
        // },
        // {
        //   album: {
        //     contains: query,
        //     mode: "insensitive",
        //   },
        // },
      ],
    },
    include: {
      album: {
        include: {
          artist: true,
        },
      },
      artists: {
        select: {
          artist: true,
        },
      },
    },
    orderBy: [
      {
        title: "asc",
      },
    ],
    take: limit,
    skip: offset,
  });

  const total = await db.track.count({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
        // {
        //   artist: {
        //     contains: query,
        //     mode: "insensitive",
        //   },
        // },
        // {
        //   album: {
        //     contains: query,
        //     mode: "insensitive",
        //   },
        // },
      ],
    },
  });

  return {
    tracks,
    total,
    hasMore: offset + tracks.length < total,
  };
};
