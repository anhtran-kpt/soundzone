import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { Track, Playlist } from "@/types/database";

export type RepeatMode = "off" | "one" | "all";

interface AudioState {
  // Current playback state
  currentTrack: Track | null;
  currentPlaylist: Playlist | null;
  currentTrackIndex: number;

  // Playback status
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
  volume: number; // 0-1
  isMuted: boolean;

  // Player modes
  isShuffled: boolean;
  repeatMode: RepeatMode;

  // Playlists management
  playlists: Playlist[];

  // Queue management
  queue: Track[];
  originalQueue: Track[]; // Backup for shuffle
  queueIndex: number;

  // Error handling
  error: string | null;
}

interface AudioActions {
  // Basic playback controls
  play: () => Promise<void>;
  pause: () => void;
  stop: () => void;
  togglePlay: () => Promise<void>;

  // Track navigation
  next: () => Promise<void>;
  previous: () => Promise<void>;
  skipTo: (index: number) => Promise<void>;

  // Seek controls
  seek: (time: number) => void;
  seekBy: (seconds: number) => void;

  // Volume controls
  setVolume: (volume: number) => void;
  toggleMute: () => void;

  // Mode controls
  toggleShuffle: () => void;
  setRepeatMode: (mode: RepeatMode) => void;
  toggleRepeat: () => void;

  // Track/Playlist management
  setCurrentTrack: (track: Track, playlist?: Playlist) => void;
  loadPlaylist: (playlist: Playlist, startIndex?: number) => void;
  addToQueue: (track: Track) => void;
  removeFromQueue: (index: number) => void;
  clearQueue: () => void;

  // Playlist management
  createPlaylist: (name: string, tracks?: Track[]) => Playlist;
  updatePlaylist: (id: string, updates: Partial<Playlist>) => void;
  deletePlaylist: (id: string) => void;
  addTrackToPlaylist: (playlistId: string, track: Track) => void;
  removeTrackFromPlaylist: (playlistId: string, trackId: string) => void;

  // Internal state management
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;

  // Audio element management
  setAudioElement: (audio: HTMLAudioElement | null) => void;
}

type AudioStore = AudioState &
  AudioActions & {
    audioElement: HTMLAudioElement | null;
  };

export const useAudioStore = create<AudioStore>()(
  devtools(
    persist(
      subscribeWithSelector((set, get) => ({
        // Initial state
        currentTrack: null,
        currentPlaylist: null,
        currentTrackIndex: 0,

        isPlaying: false,
        isLoading: false,
        currentTime: 0,
        duration: 0,
        volume: 0.8,
        isMuted: false,

        isShuffled: false,
        repeatMode: "off",

        playlists: [],
        queue: [],
        originalQueue: [],
        queueIndex: 0,

        error: null,
        audioElement: null,

        // Audio element management
        setAudioElement: (audio) => set({ audioElement: audio }),

        // Basic playback controls
        play: async () => {
          const { audioElement, currentTrack, setLoading, setError } = get();

          if (!audioElement || !currentTrack) return;

          try {
            setLoading(true);
            setError(null);
            await audioElement.play();
            set({ isPlaying: true });
          } catch (error) {
            console.error("Error playing audio:", error);
            setError("Failed to play audio");
            set({ isPlaying: false });
          } finally {
            setLoading(false);
          }
        },

        pause: () => {
          const { audioElement } = get();
          if (audioElement) {
            audioElement.pause();
            set({ isPlaying: false });
          }
        },

        stop: () => {
          const { audioElement } = get();
          if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
            set({ isPlaying: false, currentTime: 0 });
          }
        },

        togglePlay: async () => {
          const { isPlaying, play, pause } = get();
          if (isPlaying) {
            pause();
          } else {
            await play();
          }
        },

        // Track navigation
        next: async () => {
          const { queue, queueIndex, repeatMode, isShuffled, loadNextTrack } =
            get();

          if (queue.length === 0) return;

          let nextIndex = queueIndex + 1;

          // Handle repeat modes
          if (nextIndex >= queue.length) {
            if (repeatMode === "all") {
              nextIndex = 0;
            } else if (repeatMode === "one") {
              nextIndex = queueIndex; // Stay on current track
            } else {
              return; // End of queue
            }
          }

          await get().skipTo(nextIndex);
        },

        previous: async () => {
          const { queue, queueIndex, currentTime } = get();

          if (queue.length === 0) return;

          // If more than 3 seconds played, restart current track
          if (currentTime > 3) {
            get().seek(0);
            return;
          }

          let prevIndex = queueIndex - 1;

          // Wrap to end if at beginning
          if (prevIndex < 0) {
            prevIndex = queue.length - 1;
          }

          await get().skipTo(prevIndex);
        },

        skipTo: async (index) => {
          const { queue, setCurrentTrack } = get();

          if (index < 0 || index >= queue.length) return;

          const track = queue[index];
          set({ queueIndex: index });
          setCurrentTrack(track);

          // Auto-play if currently playing
          if (get().isPlaying) {
            await get().play();
          }
        },

        // Seek controls
        seek: (time) => {
          const { audioElement, duration } = get();
          if (audioElement && duration > 0) {
            const clampedTime = Math.max(0, Math.min(time, duration));
            audioElement.currentTime = clampedTime;
            set({ currentTime: clampedTime });
          }
        },

        seekBy: (seconds) => {
          const { currentTime, seek } = get();
          seek(currentTime + seconds);
        },

        // Volume controls
        setVolume: (volume) => {
          const { audioElement } = get();
          const clampedVolume = Math.max(0, Math.min(1, volume));

          if (audioElement) {
            audioElement.volume = clampedVolume;
          }

          set({
            volume: clampedVolume,
            isMuted: clampedVolume === 0,
          });
        },

        toggleMute: () => {
          const { audioElement, isMuted, volume } = get();

          if (audioElement) {
            if (isMuted) {
              audioElement.volume = volume;
              set({ isMuted: false });
            } else {
              audioElement.volume = 0;
              set({ isMuted: true });
            }
          }
        },

        // Mode controls
        toggleShuffle: () => {
          const { isShuffled, queue, originalQueue, currentTrack, queueIndex } =
            get();

          if (!isShuffled) {
            // Enable shuffle
            const shuffled = [...queue];
            const currentTrackItem = shuffled[queueIndex];

            // Remove current track from array before shuffling
            shuffled.splice(queueIndex, 1);

            // Shuffle remaining tracks
            for (let i = shuffled.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }

            // Put current track at the beginning
            shuffled.unshift(currentTrackItem);

            set({
              isShuffled: true,
              originalQueue: queue,
              queue: shuffled,
              queueIndex: 0,
            });
          } else {
            // Disable shuffle
            const currentTrackId = currentTrack?.id;
            const originalIndex = originalQueue.findIndex(
              (track) => track.id === currentTrackId
            );

            set({
              isShuffled: false,
              queue: originalQueue,
              queueIndex: Math.max(0, originalIndex),
              originalQueue: [],
            });
          }
        },

        setRepeatMode: (mode) => set({ repeatMode: mode }),

        toggleRepeat: () => {
          const { repeatMode } = get();
          const modes: RepeatMode[] = ["off", "all", "one"];
          const currentIndex = modes.indexOf(repeatMode);
          const nextMode = modes[(currentIndex + 1) % modes.length];
          set({ repeatMode: nextMode });
        },

        // Track/Playlist management
        setCurrentTrack: (track, playlist) => {
          const { audioElement } = get();

          if (audioElement) {
            audioElement.src = track.audioUrl;
            audioElement.load();
          }

          set({
            currentTrack: track,
            currentPlaylist: playlist || null,
            currentTime: 0,
            error: null,
          });
        },

        loadPlaylist: (playlist, startIndex = 0) => {
          const { setCurrentTrack } = get();

          set({
            queue: playlist.tracks,
            originalQueue: playlist.tracks,
            queueIndex: startIndex,
            currentPlaylist: playlist,
          });

          if (playlist.tracks[startIndex]) {
            setCurrentTrack(playlist.tracks[startIndex], playlist);
          }
        },

        addToQueue: (track) => {
          const { queue } = get();
          set({ queue: [...queue, track] });
        },

        removeFromQueue: (index) => {
          const { queue, queueIndex } = get();
          const newQueue = queue.filter((_, i) => i !== index);

          let newQueueIndex = queueIndex;
          if (index < queueIndex) {
            newQueueIndex = queueIndex - 1;
          } else if (index === queueIndex && index >= newQueue.length) {
            newQueueIndex = Math.max(0, newQueue.length - 1);
          }

          set({
            queue: newQueue,
            queueIndex: newQueueIndex,
          });
        },

        clearQueue: () => {
          set({
            queue: [],
            originalQueue: [],
            queueIndex: 0,
            currentTrack: null,
            currentPlaylist: null,
            isPlaying: false,
          });
        },

        // Playlist management
        createPlaylist: (name, tracks = []) => {
          const { playlists } = get();
          const newPlaylist: Playlist = {
            id: Date.now().toString(),
            name,
            tracks,
          };

          set({ playlists: [...playlists, newPlaylist] });
          return newPlaylist;
        },

        updatePlaylist: (id, updates) => {
          const { playlists } = get();
          const updatedPlaylists = playlists.map((playlist) =>
            playlist.id === id ? { ...playlist, ...updates } : playlist
          );
          set({ playlists: updatedPlaylists });
        },

        deletePlaylist: (id) => {
          const { playlists } = get();
          set({
            playlists: playlists.filter((playlist) => playlist.id !== id),
          });
        },

        addTrackToPlaylist: (playlistId, track) => {
          const { playlists, updatePlaylist } = get();
          const playlist = playlists.find((p) => p.id === playlistId);

          if (playlist) {
            const updatedTracks = [...playlist.tracks, track];
            updatePlaylist(playlistId, { tracks: updatedTracks });
          }
        },

        removeTrackFromPlaylist: (playlistId, trackId) => {
          const { playlists, updatePlaylist } = get();
          const playlist = playlists.find((p) => p.id === playlistId);

          if (playlist) {
            const updatedTracks = playlist.tracks.filter(
              (t) => t.id !== trackId
            );
            updatePlaylist(playlistId, { tracks: updatedTracks });
          }
        },

        // Internal state management
        setCurrentTime: (time) => set({ currentTime: time }),
        setDuration: (duration) => set({ duration }),
        setLoading: (loading) => set({ isLoading: loading }),
        setError: (error) => set({ error }),
      })),
      {
        name: "audio-player-storage",
        partialize: (state) => ({
          volume: state.volume,
          isMuted: state.isMuted,
          isShuffled: state.isShuffled,
          repeatMode: state.repeatMode,
          playlists: state.playlists,
          currentPlaylist: state.currentPlaylist,
          queue: state.queue,
          queueIndex: state.queueIndex,
        }),
      }
    ),
    {
      name: "audio-player-store",
    }
  )
);

// Auto-handle track ending
useAudioStore.subscribe(
  (state) => state.audioElement,
  (audioElement, previousAudioElement) => {
    if (previousAudioElement) {
      // Cleanup previous element
      previousAudioElement.removeEventListener("ended", handleTrackEnd);
      previousAudioElement.removeEventListener("timeupdate", handleTimeUpdate);
      previousAudioElement.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      previousAudioElement.removeEventListener("error", handleError);
    }

    if (audioElement) {
      // Setup new element
      audioElement.addEventListener("ended", handleTrackEnd);
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.addEventListener("error", handleError);
    }
  }
);

// Event handlers
const handleTrackEnd = () => {
  const { repeatMode, next, play } = useAudioStore.getState();

  if (repeatMode === "one") {
    play();
  } else {
    next();
  }
};

const handleTimeUpdate = (event: Event) => {
  const audio = event.target as HTMLAudioElement;
  useAudioStore.getState().setCurrentTime(audio.currentTime);
};

const handleLoadedMetadata = (event: Event) => {
  const audio = event.target as HTMLAudioElement;
  useAudioStore.getState().setDuration(audio.duration);
};

const handleError = (event: Event) => {
  const audio = event.target as HTMLAudioElement;
  console.error("Audio error:", audio.error);
  useAudioStore.getState().setError("Failed to load audio");
  useAudioStore.getState().setLoading(false);
};
