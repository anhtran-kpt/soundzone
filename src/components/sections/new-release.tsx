import trackActions from "@/actions/track";
import { TrackList } from "../common";

export default async function NewRelease() {
  const tracks = await trackActions.getTracks();

  if (!tracks) {
    return null;
  }

  return (
    <section className="container">
      <TrackList tracks={tracks} />
    </section>
  );
}
