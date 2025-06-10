import trackActions from "@/actions/track";
import TrackList from "@/components/features/track/track-list";

export default async function TracksPage() {
  const tracks = await trackActions.getTracks();

  return (
    <div>
      <h1>Tracks</h1>
      <div>
        <TrackList tracks={tracks} />
      </div>
    </div>
  );
}
