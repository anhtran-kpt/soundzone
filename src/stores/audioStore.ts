import { Song, Playlist } from "@/app/generated/prisma/client";
import { RepeatMode } from "./types";
import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

interface AudioState {
  currentSong: Song | null;
  currentPlaylist: Playlist | null;
  currentSongIndex: number;
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isShuffled: boolean;
  repeatMode: RepeatMode;
  playlists: Playlist[];
  queue: Song[];
  originalQueue: Song[];
  queueIndex: number;
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
  setCurrentSong: (song: Song, playlist?: Playlist) => void;
  loadPlaylist: (playlist: Playlist, startIndex?: number) => void;
  addToQueue: (song: Song) => void;
  removeFromQueue: (index: number) => void;
  clearQueue: () => void;

  // Playlist management
  createPlaylist: (name: string, songs?: Song[]) => Playlist;
  updatePlaylist: (id: string, updates: Partial<Playlist>) => void;
  deletePlaylist: (id: string) => void;
  addSongToPlaylist: (playlistId: string, song: Song) => void;
  removeSongFromPlaylist: (playlistId: string, songId: string) => void;

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
        currentSong: null,
        currentPlaylist: null,
        currentSongIndex: 0,

        isPlaying: false,
        isLoading: false,
        currentTime: 0,
        duration: 0,
        volume: 1,
        isMuted: false,
        isShuffled: false,
        repeatMode: "off",
        playlists: [],
        queue: [],
        originalQueue: [],
        queueIndex: 0,
        error: null,
        audioElement: null,

        setAudioElement: (audio) => set({ audioElement: audio }),

        play: async () => {
          const { audioElement, currentSong, setLoading, setError } = get();

          if (!audioElement || !currentSong) return;

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

        next: async () => {
          const { queue, queueIndex, repeatMode } = get();

          if (queue.length === 0) return;

          let nextIndex = queueIndex + 1;

          if (nextIndex >= queue.length) {
            if (repeatMode === "one") {
              nextIndex = queueIndex;
            } else if (repeatMode === "all") {
              nextIndex = 0;
            } else {
              return;
            }
          }

          await get().skipTo(nextIndex);
        },

        previous: async () => {
          const { queue, queueIndex, currentTime } = get();

          if (queue.length === 0) return;

          if (currentTime > 3) {
            await get().seek(0);
            return;
          }

          let prevIndex = queueIndex - 1;

          if (prevIndex < 0) {
            prevIndex = queue.length - 1;
          }

          await get().skipTo(prevIndex);
        },

        skipTo: async (index) => {
          const { queue, setCurrentSong } = get();

          if (index < 0 || index >= queue.length) return;

          const song = queue[index];
          set({ queueIndex: index });
          setCurrentSong(song);

          if (get().isPlaying) {
            await get().play();
          }
        },

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

        setVolume: (volume) => {
          const { audioElement } = get();
          const clampedVolume = Math.max(0, Math.min(volume, 1));

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

        toggleShuffle: () => {
          const { isShuffled, queue, originalQueue, currentSong, queueIndex } =
            get();

          if (!isShuffled) {
            const shuffled = [...queue];
            const currentSongItem = shuffled[queueIndex];

            shuffled.splice(queueIndex, 1);

            for (let i = shuffled.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }

            shuffled.unshift(currentSongItem);

            set({
              isShuffled: true,
              originalQueue: queue,
              queue: shuffled,
              queueIndex: 0,
            });
          } else {
            const currentSongId = currentSong?.id;
            const originalIndex = originalQueue.findIndex(
              (song) => song.id === currentSongId
            );
            set({
              isShuffled: false,
              queue: originalQueue,
              queueIndex: Math.max(0, originalIndex),
              originalQueue: [],
            });
          }
        },

        setRepeatMode: (mode) => {
          set({ repeatMode: mode });
        },

        toggleRepeat: () => {
          const { repeatMode } = get();
          const modes: RepeatMode[] = ["off", "one", "all"];
          const currentIndex = modes.indexOf(repeatMode);
          const nextMode = modes[(currentIndex + 1) % modes.length];
          set({ repeatMode: nextMode });
        },

        setCurrentSong: (song, playlist) => {
          const { audioElement } = get();

          if (audioElement) {
            audioElement.src = song.audioUrl;
            audioElement.load();
          }

          set({
            currentSong: song,
            currentPlaylist: playlist || null,
            currentTime: 0,
            error: null,
          });
        },

        loadPlaylist: (playlist, startIndex = 0) => {
          const { setCurrentSong } = get();

          set({
            queue: playlist.songs,
            originalQueue: playlist.songs,
            queueIndex: startIndex,
            currentPlaylist: playlist,
          });

          if (playlist.songs[startIndex]) {
            setCurrentTrack(playlist.songs[startIndex], playlist);
          }
        },

        addToQueue: (song) => {
          const { queue } = get();
          set({ queue: [...queue, song] });
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
            currentPlaylist: null,
            currentSong: null,
            isPlaying: false,
          });
        },

        createPlaylist: (name, songs = []) => {
          const { playlists } = get();
          const newPlaylist: Playlist = {
            id: Date.now().toString(),
            name,
            songs,
          };

          set({
            playlists: [...playlists, newPlaylist],
          });

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

        addSongToPlaylist: (playlistId, song) => {
          const { playlists, updatePlaylist } = get();
          const playlist = playlists.find(
            (playlist) => playlist.id === playlistId
          );

          if (playlist) {
            const updatedSongs = [...playlist.songs, song];
            updatePlaylist(playlistId, { songs: updatedSongs });
          }
        },

        removeSongFromPlaylist: (playlistId, songId) => {
          const { playlists, updatePlaylist } = get();
          const playlist = playlists.find(
            (playlist) => playlist.id === playlistId
          );

          if (playlist) {
            const updatedSongs = playlist.songs.filter(
              (song) => song.id !== songId
            );
            updatePlaylist(playlistId, { songs: updatedSongs });
          }
        },

        setCurrentTime: (time) => {
          set({ currentTime: time });
        },

        setDuration: (duration) => {
          set({ duration });
        },

        setLoading: (loading) => {
          set({ isLoading: loading });
        },

        setError: (error) => {
          set({ error });
        },
      })),
      {
        name: "audio-player-storage",
        partialize: (state) => ({
          volume: state.volume,
          isMuted: state.isMuted,
          isShuffled: state.isShuffled,
          repeatMode: state.repeatMode,
          queue: state.queue,
          queueIndex: state.queueIndex,
          currentPlaylist: state.currentPlaylist,
          playlists: state.playlists,
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
      previousAudioElement.removeEventListener("ended", handleSongEnd);
      previousAudioElement.removeEventListener("timeupdate", handleTimeUpdate);
      previousAudioElement.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      previousAudioElement.removeEventListener("error", handleError);
    }

    if (audioElement) {
      audioElement.addEventListener("ended", handleSongEnd);
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.addEventListener("error", handleError);
    }
  }
);

// Event handlers
const handleSongEnd = () => {
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
