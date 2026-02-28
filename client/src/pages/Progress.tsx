/*
 * Design: "Cosmic Classroom" — Progress Dashboard
 * Shows overall learning stats, course completion, quiz history
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft, BookOpen, Play, Brain, Zap, Trophy, Clock,
  BarChart3, Target, TrendingUp, RotateCcw
} from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { allCourses, getTotalVideos } from "@/data/videoData";
import { toast } from "sonner";

export default function Progress() {
  const {
    progress,
    getCourseProgress,
    getCourseWatchedCount,
    getTotalWatchedVideos,
    getTotalStudyTime,
    resetProgress,
  } = useProgress();

  const totalVideos = getTotalVideos();
  const watchedCount = getTotalWatchedVideos();
  const overallPercent = totalVideos > 0 ? Math.round((watchedCount / totalVideos) * 100) : 0;
  const studyMinutes = getTotalStudyTime();
  const quizCount = progress.quizScores.length;
  const avgScore = quizCount > 0
    ? Math.round(progress.quizScores.reduce((s, q) => s + (q.score / q.total) * 100, 0) / quizCount)
    : 0;
  const flashcardsReviewed = Object.keys(progress.flashcardsReviewed).length;

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      resetProgress();
      toast.success("Progress has been reset.");
    }
  };

  // Sort courses by progress (most progress first)
  const coursesWithProgress = allCourses
    .map((course) => {
      const videoIds = course.videos.map((v) => v.videoId);
      return {
        ...course,
        percent: getCourseProgress(videoIds),
        watched: getCourseWatchedCount(videoIds),
        total: course.videos.length,
      };
    })
    .sort((a, b) => b.percent - a.percent);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      {/* Header */}
      <div className="border-b border-white/5 bg-[#0B1120]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container flex items-center gap-4 h-16">
          <Link href="/" className="p-2 rounded-lg hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
              My Progress
            </h1>
            <p className="text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
              Track your learning journey
            </p>
          </div>
          <button
            onClick={handleReset}
            className="ml-auto p-2 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors"
            title="Reset all progress"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="container py-8 space-y-8">
        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { icon: Play, label: "Videos Watched", value: `${watchedCount}/${totalVideos}`, color: "text-amber-400", bgColor: "bg-amber-500/10" },
            { icon: Clock, label: "Study Time", value: studyMinutes >= 60 ? `${Math.floor(studyMinutes / 60)}h ${studyMinutes % 60}m` : `${studyMinutes}m`, color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
            { icon: Brain, label: "Quizzes Taken", value: `${quizCount}`, color: "text-amber-400", bgColor: "bg-amber-500/10" },
            { icon: Zap, label: "Flashcards Done", value: `${flashcardsReviewed}`, color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-[#151D2E]/60 border border-white/5"
            >
              <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 mt-1" style={{ fontFamily: "var(--font-mono)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Progress Ring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl bg-[#151D2E]/60 border border-white/5"
        >
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Circular Progress */}
            <div className="relative w-40 h-40 flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${overallPercent * 3.27} 327`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  {overallPercent}%
                </span>
                <span className="text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
                  Complete
                </span>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Overall Course Progress
              </h3>
              <p className="text-sm text-slate-400" style={{ fontFamily: "var(--font-body)" }}>
                You've watched {watchedCount} out of {totalVideos} video lectures across all courses.
                {overallPercent === 0 && " Start watching videos and mark them as complete to track your progress!"}
                {overallPercent > 0 && overallPercent < 50 && " Keep going — you're building a strong foundation!"}
                {overallPercent >= 50 && overallPercent < 100 && " Great progress! You're more than halfway there!"}
                {overallPercent === 100 && " Congratulations! You've completed all video lectures!"}
              </p>
              <div className="flex gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Play className="w-3.5 h-3.5" />
                  Continue Watching
                </Link>
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Brain className="w-3.5 h-3.5" />
                  Take a Quiz
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quiz History */}
        {quizCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-[#151D2E]/60 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  Quiz History
                </h3>
                <p className="text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
                  Average Score: {avgScore}%
                </p>
              </div>
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {progress.quizScores.slice().reverse().map((quiz, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      (quiz.score / quiz.total) >= 0.8 ? "bg-green-500/20 text-green-400" :
                      (quiz.score / quiz.total) >= 0.5 ? "bg-amber-500/20 text-amber-400" :
                      "bg-red-500/20 text-red-400"
                    }`}>
                      {Math.round((quiz.score / quiz.total) * 100)}%
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white" style={{ fontFamily: "var(--font-display)" }}>
                        {quiz.topic || "Mixed Topics"}
                      </div>
                      <div className="text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
                        {quiz.score}/{quiz.total} correct · {new Date(quiz.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  {(quiz.score / quiz.total) >= 0.8 && <Trophy className="w-4 h-4 text-amber-400" />}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Course-by-Course Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Course Progress
              </h3>
              <p className="text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
                {coursesWithProgress.filter(c => c.percent > 0).length} of {coursesWithProgress.length} courses started
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {coursesWithProgress.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.03 }}
                className="p-4 rounded-xl bg-[#151D2E]/60 border border-white/5 hover:border-amber-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      course.percent === 100 ? "bg-green-500/20 text-green-400" :
                      course.percent > 0 ? "bg-amber-500/20 text-amber-400" :
                      "bg-white/5 text-slate-600"
                    }`} style={{ fontFamily: "var(--font-mono)" }}>
                      {course.percent === 100 ? "✓" : `${course.percent}%`}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
                        {course.watched}/{course.total} videos · Class {course.classLevel === 0 ? "Special" : course.classLevel}
                      </p>
                    </div>
                  </div>
                  {course.percent > 0 && course.percent < 100 && (
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                  )}
                </div>
                {/* Progress bar */}
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-cyan-500 transition-all duration-500"
                    style={{ width: `${course.percent}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          <Link
            href="/courses"
            className="p-5 rounded-2xl bg-[#151D2E]/60 border border-white/5 hover:border-amber-500/20 transition-all duration-300 group"
          >
            <Play className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
              Video Courses
            </h4>
            <p className="text-xs text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
              Continue watching lectures
            </p>
          </Link>
          <Link
            href="/quiz"
            className="p-5 rounded-2xl bg-[#151D2E]/60 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group"
          >
            <Brain className="w-6 h-6 text-cyan-400 mb-3" />
            <h4 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
              Practice Quiz
            </h4>
            <p className="text-xs text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
              Test your understanding
            </p>
          </Link>
          <Link
            href="/flashcards"
            className="p-5 rounded-2xl bg-[#151D2E]/60 border border-white/5 hover:border-amber-500/20 transition-all duration-300 group"
          >
            <BookOpen className="w-6 h-6 text-amber-400 mb-3" />
            <h4 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
              Flashcards
            </h4>
            <p className="text-xs text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
              Quick revision cards
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
