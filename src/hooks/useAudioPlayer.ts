import { useCallback, useEffect, useRef } from "react";
import { useAudioStore } from "../stores/audioStore";
import { Track, Playlist } from "@/types/database";
import { useShallow } from "zustand/react/shallow";

// Selector hooks for optimal re-rendering
export const useCurrentTrack = () =>
  useAudioStore(useShallow((state) => state.currentTrack));

export const useIsPlaying = () =>
  useAudioStore(useShallow((state) => state.isPlaying));

export const useIsLoading = () =>
  useAudioStore(useShallow((state) => state.isLoading));

export const useCurrentTime = () =>
  useAudioStore(useShallow((state) => state.currentTime));

export const useDuration = () =>
  useAudioStore(useShallow((state) => state.duration));

export const useVolume = () =>
  useAudioStore(useShallow((state) => state.volume));

export const useIsMuted = () =>
  useAudioStore(useShallow((state) => state.isMuted));

export const useIsShuffled = () =>
  useAudioStore(useShallow((state) => state.isShuffled));

export const useRepeatMode = () =>
  useAudioStore(useShallow((state) => state.repeatMode));

export const useQueue = () => useAudioStore(useShallow((state) => state.queue));

export const useQueueIndex = () =>
  useAudioStore(useShallow((state) => state.queueIndex));

export const usePlaylist = () =>
  useAudioStore(useShallow((state) => state.currentPlaylist));

export const usePlaylists = () =>
  useAudioStore(useShallow((state) => state.playlists));

export const useError = () => useAudioStore(useShallow((state) => state.error));

// Compound selectors
export const usePlaybackState = () =>
  useAudioStore(
    useShallow((state) => ({
      isPlaying: state.isPlaying,
      isLoading: state.isLoading,
      currentTime: state.currentTime,
      duration: state.duration,
    }))
  );

export const usePlayerControls = () =>
  useAudioStore(
    useShallow((state) => ({
      play: state.play,
      pause: state.pause,
      stop: state.stop,
      togglePlay: state.togglePlay,
      next: state.next,
      previous: state.previous,
      seek: state.seek,
      seekBy: state.seekBy,
    }))
  );

export const useVolumeControls = () =>
  useAudioStore(
    useShallow((state) => ({
      volume: state.volume,
      isMuted: state.isMuted,
      setVolume: state.setVolume,
      toggleMute: state.toggleMute,
    }))
  );

export const usePlayerModes = () =>
  useAudioStore(
    useShallow((state) => ({
      isShuffled: state.isShuffled,
      repeatMode: state.repeatMode,
      toggleShuffle: state.toggleShuffle,
      toggleRepeat: state.toggleRepeat,
      setRepeatMode: state.setRepeatMode,
    }))
  );

export const useQueueManagement = () =>
  useAudioStore(
    useShallow((state) => ({
      queue: state.queue,
      queueIndex: state.queueIndex,
      addToQueue: state.addToQueue,
      removeFromQueue: state.removeFromQueue,
      clearQueue: state.clearQueue,
      skipTo: state.skipTo,
    }))
  );

export const usePlaylistManagement = () =>
  useAudioStore(
    useShallow((state) => ({
      playlists: state.playlists,
      createPlaylist: state.createPlaylist,
      updatePlaylist: state.updatePlaylist,
      deletePlaylist: state.deletePlaylist,
      addTrackToPlaylist: state.addTrackToPlaylist,
      removeTrackFromPlaylist: state.removeTrackFromPlaylist,
      loadPlaylist: state.loadPlaylist,
    }))
  );

// Main audio player hook
export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const setAudioElement = useAudioStore((state) => state.setAudioElement);

  // Initialize audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = "metadata";
      setAudioElement(audioRef.current);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        setAudioElement(null);
      }
    };
  }, [setAudioElement]);

  // Get all player functionality
  const currentTrack = useCurrentTrack();
  const playbackState = usePlaybackState();
  const playerControls = usePlayerControls();
  const volumeControls = useVolumeControls();
  const playerModes = usePlayerModes();
  const queueManagement = useQueueManagement();
  const playlistManagement = usePlaylistManagement();
  const error = useError();

  // Computed values
  const progress =
    playbackState.duration > 0
      ? (playbackState.currentTime / playbackState.duration) * 100
      : 0;

  const hasNext = queueManagement.queueIndex < queueManagement.queue.length - 1;
  const hasPrev = queueManagement.queueIndex > 0;

  // Utility functions
  const formatTime = useCallback((seconds: number): string => {
    if (isNaN(seconds)) return "0:00";

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }, []);

  const playTrack = useCallback(async (track: Track, playlist?: Playlist) => {
    const { setCurrentTrack, play } = useAudioStore.getState();
    setCurrentTrack(track, playlist);
    await play();
  }, []);

  const playPlaylist = useCallback(
    async (playlist: Playlist, startIndex = 0) => {
      const { loadPlaylist, play } = useAudioStore.getState();
      loadPlaylist(playlist, startIndex);
      await play();
    },
    []
  );

  return {
    // State
    currentTrack,
    error,
    progress,
    hasNext,
    hasPrev,

    // Grouped functionality
    playback: playbackState,
    controls: playerControls,
    volume: volumeControls,
    modes: playerModes,
    queue: queueManagement,
    playlists: playlistManagement,

    // Utility functions
    formatTime,
    playTrack,
    playPlaylist,

    // Raw audio element (if needed)
    audioElement: audioRef.current,
  };
};

// Hook for keyboard shortcuts
export const useAudioKeyboardShortcuts = () => {
  const { togglePlay, next, previous, setVolume, seekBy } = usePlayerControls();
  const volume = useVolume();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case " ":
        case "k":
          event.preventDefault();
          togglePlay();
          break;
        case "arrowright":
          if (event.shiftKey) {
            next();
          } else {
            seekBy(10);
          }
          break;
        case "arrowleft":
          if (event.shiftKey) {
            previous();
          } else {
            seekBy(-10);
          }
          break;
        case "arrowup":
          event.preventDefault();
          setVolume(Math.min(1, volume + 0.1));
          break;
        case "arrowdown":
          event.preventDefault();
          setVolume(Math.max(0, volume - 0.1));
          break;
        case "m":
          useAudioStore.getState().toggleMute();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [togglePlay, next, previous, setVolume, seekBy, volume]);
};

// Hook for media session API (browser media controls)
export const useMediaSession = () => {
  const currentTrack = useCurrentTrack();
  const isPlaying = useIsPlaying();
  const { play, pause, next, previous } = usePlayerControls();

  useEffect(() => {
    if ("mediaSession" in navigator && currentTrack) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentTrack.title,
        artist: currentTrack.artist,
        album: currentTrack.album,
        artwork: currentTrack.coverImage
          ? [
              {
                src: currentTrack.coverImage,
                sizes: "300x300",
                type: "image/jpeg",
              },
            ]
          : undefined,
      });

      navigator.mediaSession.setActionHandler("play", play);
      navigator.mediaSession.setActionHandler("pause", pause);
      navigator.mediaSession.setActionHandler("nexttrack", next);
      navigator.mediaSession.setActionHandler("previoustrack", previous);

      navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused";
    }
  }, [currentTrack, isPlaying, play, pause, next, previous]);
};

// Hook for persisting playback position
export const usePlaybackPersistence = () => {
  const currentTrack = useCurrentTrack();
  const currentTime = useCurrentTime();
  const { seek } = usePlayerControls();

  // Save position periodically
  useEffect(() => {
    if (currentTrack && currentTime > 0) {
      const key = `playback_${currentTrack.id}`;
      localStorage.setItem(key, currentTime.toString());
    }
  }, [currentTrack, currentTime]);

  // Restore position when track changes
  useEffect(() => {
    if (currentTrack) {
      const key = `playback_${currentTrack.id}`;
      const savedPosition = localStorage.getItem(key);

      if (savedPosition) {
        const position = parseFloat(savedPosition);
        // Only restore if less than 90% through the track
        if (position < currentTrack.duration * 0.9) {
          setTimeout(() => seek(position), 100);
        }
      }
    }
  }, [currentTrack, seek]);
};
