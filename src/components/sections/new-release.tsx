"use client";

import { useTracks } from "@/lib/queries";
import { TrackList } from "../common";

export default function NewRelease() {
  const { data: tracks } = useTracks();

  if (!tracks) {
    return null;
  }

  return (
    <section className="container">
      <h2 className="text-xl font-bold mb-3">New Releases</h2>
      <TrackList tracks={tracks} />
    </section>
  );
}
