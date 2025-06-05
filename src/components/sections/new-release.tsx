import trackActions from "@/actions/track";
import { TrackList } from "../common";

export default async function NewRelease() {
  const tracks = await trackActions.getTracks();

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
