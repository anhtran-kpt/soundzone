import { Genre, PrismaClient } from "@/app/generated/prisma";
import { CreateGenreDto } from "@/dtos/genre-dto";
import { ApiError } from "@/lib/server/api-error";
import slugify from "slugify";
import { slugifyOptions } from "@/config/slugify-options";

const prisma = new PrismaClient();

export const genreService = {
  async createGenre(data: CreateGenreDto): Promise<Genre> {
    const existingGenre = await prisma.genre.findUnique({
      where: { name: data.name },
    });

    if (existingGenre) {
      throw ApiError.badRequest("Genre already exists", "GENRE_EXISTS");
    }

    const newGenre = await prisma.genre.create({
      data: {
        name: data.name,
        description: data.description,
        slug: slugify(data.name, slugifyOptions),
      },
    });

    return newGenre;
  },

  // async getGenres(params: GetGenresParams): Promise<Genre[]> {
  //   const genres = await prisma.genre.findMany({
  //     where: { slug },
  //   });

  //   return genres;
  // },

  async getGenre(slug: string): Promise<Genre> {
    const genre = await prisma.genre.findUnique({
      where: { slug },
    });

    if (!genre) {
      throw ApiError.notFound("Genre not found", "GENRE_NOT_FOUND");
    }

    return genre;
  },
};
