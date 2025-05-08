import { PrismaClient } from "@/app/generated/prisma";
import { GenreCard } from "./genre-card";

const prisma = new PrismaClient();

export async function GenreList() {
  const genres = await prisma.genre.findMany();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {genres.map((genre) => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </div>
  );
}
