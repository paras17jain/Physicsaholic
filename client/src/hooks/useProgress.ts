import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "physicsaholics_progress";

export interface ProgressData {
  watchedVideos: Record<string, boolean>; // videoId -> watched
  quizScores: { date: string; score: number; total: number; topic: string }[];
  flashcardsReviewed: Record<string, boolean>; // flashcardId -> reviewed
  lastUpdated: string;
}

const defaultProgress: ProgressData = {
  watchedVideos: {},
  quizScores: [],
  flashcardsReviewed: {},
  lastUpdated: new Date().toISOString(),
};

function loadProgress(): ProgressData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultProgress, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.warn("Failed to load progress:", e);
  }
  return { ...defaultProgress };
}

function saveProgress(data: ProgressData) {
  try {
    data.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("Failed to save progress:", e);
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const toggleVideoWatched = useCallback((videoId: string) => {
    setProgress((prev) => {
      const newWatched = { ...prev.watchedVideos };
      if (newWatched[videoId]) {
        delete newWatched[videoId];
      } else {
        newWatched[videoId] = true;
      }
      return { ...prev, watchedVideos: newWatched };
    });
  }, []);

  const isVideoWatched = useCallback(
    (videoId: string) => !!progress.watchedVideos[videoId],
    [progress.watchedVideos]
  );

  const getCourseProgress = useCallback(
    (videoIds: string[]) => {
      if (videoIds.length === 0) return 0;
      const watched = videoIds.filter((id) => progress.watchedVideos[id]).length;
      return Math.round((watched / videoIds.length) * 100);
    },
    [progress.watchedVideos]
  );

  const getCourseWatchedCount = useCallback(
    (videoIds: string[]) => {
      return videoIds.filter((id) => progress.watchedVideos[id]).length;
    },
    [progress.watchedVideos]
  );

  const addQuizScore = useCallback(
    (score: number, total: number, topic: string) => {
      setProgress((prev) => ({
        ...prev,
        quizScores: [
          ...prev.quizScores,
          { date: new Date().toISOString(), score, total, topic },
        ],
      }));
    },
    []
  );

  const toggleFlashcardReviewed = useCallback((flashcardId: string) => {
    setProgress((prev) => {
      const newReviewed = { ...prev.flashcardsReviewed };
      if (newReviewed[flashcardId]) {
        delete newReviewed[flashcardId];
      } else {
        newReviewed[flashcardId] = true;
      }
      return { ...prev, flashcardsReviewed: newReviewed };
    });
  }, []);

  const getTotalWatchedVideos = useCallback(
    () => Object.keys(progress.watchedVideos).length,
    [progress.watchedVideos]
  );

  const getTotalStudyTime = useCallback(
    () => {
      // Rough estimate: average 10 min per watched video
      return Object.keys(progress.watchedVideos).length * 10;
    },
    [progress.watchedVideos]
  );

  const resetProgress = useCallback(() => {
    setProgress({ ...defaultProgress });
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    progress,
    toggleVideoWatched,
    isVideoWatched,
    getCourseProgress,
    getCourseWatchedCount,
    addQuizScore,
    toggleFlashcardReviewed,
    getTotalWatchedVideos,
    getTotalStudyTime,
    resetProgress,
  };
}
