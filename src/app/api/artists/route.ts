import { createArtistSchema } from "@/lib/validations";
import { validateData } from "@/lib/helpers";
import { NextRequest, NextResponse } from "next/server";
import { createArtist, getAllArtists } from "@/lib/services/artist";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const validatedData = validateData(createArtistSchema, body);

  const artist = await createArtist(validatedData);

  return NextResponse.json(artist, { status: 200 });
};

export const GET = async () => {
  const artists = await getAllArtists();

  return NextResponse.json(artists, { status: 200 });
};
