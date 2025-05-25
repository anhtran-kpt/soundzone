import { useCallback, useEffect, useRef } from "react";
import { useAudioStore } from "@/stores/audioStore";
import { Song } from "@/schemas";
import { Playlist } from "@/app/generated/prisma";

export const useCurrentSong = () => useAudioStore((state) => state.currentSong);
export const useIsPlaying = () => useAudioStore((state) => state.isPlaying);
export const useIsLoading = () => useAudioStore((state) => state.isLoading);
export const useCurrentTime = () => useAudioStore((state) => state.currentTime);
export const useDuration = () => useAudioStore((state) => state.duration);
export const useVolume = () => useAudioStore((state) => state.volume);
export const useIsMuted = () => useAudioStore((state) => state.isMuted);
export const useIsShuffled = () => useAudioStore((state) => state.isShuffled);
export const useRepeatMode = () => useAudioStore((state) => state.repeatMode);
export const useQueue = () => useAudioStore((state) => state.queue);
export const useQueueIndex = () => useAudioStore((state) => state.queueIndex);
export const useCurrentPlaylist = () =>
  useAudioStore((state) => state.currentPlaylist);
export const usePlaylists = () => useAudioStore((state) => state.playlists);
export const useError = () => useAudioStore((state) => state.error);

export const usePlaybackState = () =>
  useAudioStore((state) => ({
    isPlaying: state.isPlaying,
    isLoading: state.isLoading,
    currentTime: state.currentTime,
    duration: state.duration,
  }));

export const usePlayerControls = () =>
  useAudioStore((state) => ({
    play: state.play,
    pause: state.pause,
    stop: state.stop,
    togglePlay: state.togglePlay,
    next: state.next,
    previous: state.previous,
    seek: state.seek,
    seekBy: state.seekBy,
  }));

export const useVolumeControls = () =>
  useAudioStore((state) => ({
    setVolume: state.setVolume,
    toggleMute: state.toggleMute,
    volume: state.volume,
    isMuted: state.isMuted,
  }));

export const usePlayerModes = () =>
  useAudioStore((state) => ({
    isShuffled: state.isShuffled,
    repeatMode: state.repeatMode,
    toggleShuffle: state.toggleShuffle,
    toggleRepeat: state.toggleRepeat,
    setRepeatMode: state.setRepeatMode,
  }));

export const useQueueManagement = () =>
  useAudioStore((state) => ({
    queue: state.queue,
    queueIndex: state.queueIndex,
    addToQueue: state.addToQueue,
    removeFromQueue: state.removeFromQueue,
    clearQueue: state.clearQueue,
    skipTo: state.skipTo,
  }));

export const usePlaylistManagement = () =>
  useAudioStore((state) => ({
    playlists: state.playlists,
    createPlaylist: state.createPlaylist,
    updatePlaylist: state.updatePlaylist,
    deletePlaylist: state.deletePlaylist,
    addSongToPlaylist: state.addSongToPlaylist,
    removeSongFromPlaylist: state.removeSongFromPlaylist,
    loadPlaylist: state.loadPlaylist,
  }));

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const setAudioElement = useAudioStore((state) => state.setAudioElement);

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

  const currentSong = useCurrentSong();
  const playbackState = usePlaybackState();
  const playerControls = usePlayerControls();
  const volumeControls = useVolumeControls();
  const playerModes = usePlayerModes();
  const queueManagement = useQueueManagement();
  const playlistManagement = usePlaylistManagement();
  const error = useError();

  const progress =
    playbackState.duration > 0
      ? (playbackState.currentTime / playbackState.duration) * 100
      : 0;

  const hasNext =
    queueManagement.queue.length > 0 &&
    queueManagement.queueIndex < queueManagement.queue.length - 1;
  const hasPrev =
    queueManagement.queue.length > 0 && queueManagement.queueIndex > 0;

  const formatTime = useCallback((seconds: number): string => {
    if (isNaN(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }, []);

  const playTrack = useCallback(async (song: Song, playlist?: Playlist) => {
    const { setCurrentSong, play } = useAudioStore.getState();
    setCurrentSong(song, playlist);
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
    currentSong,
    error,
    progress,
    hasNext,
    hasPrev,
    playback: playbackState,
    controls: playerControls,
    volume: volumeControls,
    modes: playerModes,
    queue: queueManagement,
    playlists: playlistManagement,
    formatTime,
    playTrack,
    playPlaylist,

    audioElement: audioRef.current,
  };
};

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
  const currentTrack = useCurrentSong();
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
  const currentTrack = useCurrentSong();
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
