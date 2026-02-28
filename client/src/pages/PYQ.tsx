/*
 * PYQ Page — Cosmic Classroom Design
 * Interactive Previous Year Questions practice with chapter-wise organization,
 * exam filtering (JEE Main / JEE Advanced / NEET), difficulty levels, and detailed solutions.
 */
import { useState, useMemo, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronRight,
  Filter,
  RotateCcw,
  Trophy,
  Clock,
  Lightbulb,
  GraduationCap,
  Atom,
  Zap,
  Target,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  pyqChapters,
  getAllPYQs,
  getTotalQuestionCount,
  type PYQChapter,
  type PYQuestion,
  type PYQExam,
  type PYQDifficulty,
  type PYQClass,
} from "@/data/pyqData";

type ViewMode = "chapters" | "practice";

export default function PYQ() {
  const [viewMode, setViewMode] = useState<ViewMode>("chapters");
  const [selectedChapter, setSelectedChapter] = useState<PYQChapter | null>(null);
  const [filterClass, setFilterClass] = useState<PYQClass | "all">("all");
  const [filterExam, setFilterExam] = useState<PYQExam | "all">("all");
  const [filterDifficulty, setFilterDifficulty] = useState<PYQDifficulty | "all">("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  // Practice mode state
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [practiceComplete, setPracticeComplete] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(pyqChapters.map((ch) => ch.category));
    return Array.from(cats);
  }, []);

  const filteredChapters = useMemo(() => {
    return pyqChapters.filter((ch) => {
      if (filterClass !== "all" && ch.classLevel !== filterClass) return false;
      if (filterCategory !== "all" && ch.category !== filterCategory) return false;
      return true;
    });
  }, [filterClass, filterCategory]);

  const practiceQuestions = useMemo(() => {
    if (!selectedChapter) return [];
    let qs = selectedChapter.questions;
    if (filterExam !== "all") qs = qs.filter((q) => q.exam === filterExam);
    if (filterDifficulty !== "all") qs = qs.filter((q) => q.difficulty === filterDifficulty);
    return qs;
  }, [selectedChapter, filterExam, filterDifficulty]);

  const startPractice = useCallback(
    (chapter: PYQChapter) => {
      setSelectedChapter(chapter);
      setViewMode("practice");
      setCurrentQIndex(0);
      setSelectedOption(null);
      setShowSolution(false);
      setScore(0);
      setAttempted(0);
      setPracticeComplete(false);
    },
    []
  );

  const handleOptionSelect = useCallback(
    (optionIdx: number) => {
      if (selectedOption !== null) return;
      setSelectedOption(optionIdx);
      setAttempted((a) => a + 1);
      const currentQ = practiceQuestions[currentQIndex];
      if (currentQ && optionIdx === currentQ.correctAnswer) {
        setScore((s) => s + 1);
      }
    },
    [selectedOption, practiceQuestions, currentQIndex]
  );

  const nextQuestion = useCallback(() => {
    if (currentQIndex + 1 >= practiceQuestions.length) {
      setPracticeComplete(true);
    } else {
      setCurrentQIndex((i) => i + 1);
      setSelectedOption(null);
      setShowSolution(false);
    }
  }, [currentQIndex, practiceQuestions.length]);

  const backToChapters = useCallback(() => {
    setViewMode("chapters");
    setSelectedChapter(null);
    setFilterExam("all");
    setFilterDifficulty("all");
  }, []);

  const totalQuestions = getTotalQuestionCount();

  const difficultyColor = (d: PYQDifficulty) => {
    if (d === "Easy") return "text-emerald-400 bg-emerald-400/10 border-emerald-400/30";
    if (d === "Medium") return "text-amber-400 bg-amber-400/10 border-amber-400/30";
    return "text-red-400 bg-red-400/10 border-red-400/30";
  };

  const examBadge = (e: PYQExam) => {
    if (e === "JEE Main") return "bg-cyan-500/15 text-cyan-400 border-cyan-400/30";
    if (e === "JEE Advanced") return "bg-amber-500/15 text-amber-400 border-amber-400/30";
    return "bg-emerald-500/15 text-emerald-400 border-emerald-400/30";
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/">
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                <span className="text-cyan-400">Physics</span>
                <span className="text-amber-400">aholics</span>
              </span>
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm">Previous Year Questions</span>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm" className="border-white/10 text-white/70 hover:text-white hover:bg-white/5">
              <ArrowLeft className="w-4 h-4 mr-1" /> Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <AnimatePresence mode="wait">
          {viewMode === "chapters" ? (
            <motion.div
              key="chapters"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Banner */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f1629] to-[#1a1040] border border-white/5 p-8 md:p-12 mb-10">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(100,200,255,0.3) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                        Previous Year Questions
                      </h1>
                      <p className="text-white/50 text-sm">JEE Main · JEE Advanced · NEET</p>
                    </div>
                  </div>
                  <p className="text-white/60 max-w-2xl mb-6">
                    Practice chapter-wise PYQs from JEE and NEET exams. Each question comes with detailed solutions and exam year references. Master the patterns that appear year after year.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                      <span className="text-white/80 text-sm font-medium">{totalQuestions} Questions</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                      <Atom className="w-4 h-4 text-amber-400" />
                      <span className="text-white/80 text-sm font-medium">{pyqChapters.length} Chapters</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                      <Target className="w-4 h-4 text-emerald-400" />
                      <span className="text-white/80 text-sm font-medium">2021–2025 Papers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <Filter className="w-4 h-4" /> Filter:
                </div>
                {/* Class filter */}
                {(["all", "11", "12"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilterClass(c)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                      filterClass === c
                        ? "bg-cyan-500/20 text-cyan-400 border-cyan-400/40"
                        : "bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/70"
                    }`}
                  >
                    {c === "all" ? "All Classes" : `Class ${c}`}
                  </button>
                ))}
                <span className="text-white/20">|</span>
                {/* Category filter */}
                {["all", ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                      filterCategory === cat
                        ? "bg-amber-500/20 text-amber-400 border-amber-400/40"
                        : "bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/70"
                    }`}
                  >
                    {cat === "all" ? "All Topics" : cat}
                  </button>
                ))}
              </div>

              {/* Chapter Grid */}
              <div className="space-y-3">
                {filteredChapters.map((chapter, idx) => (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="bg-[#111827]/80 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all"
                  >
                    <button
                      onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{chapter.icon}</span>
                        <div>
                          <h3 className="text-white font-semibold text-lg" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                            {chapter.name}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-white/40 text-xs">Class {chapter.classLevel}</span>
                            <span className="text-white/20">·</span>
                            <span className="text-white/40 text-xs">{chapter.category}</span>
                            <span className="text-white/20">·</span>
                            <span className="text-cyan-400/70 text-xs">{chapter.questions.length} Questions</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2">
                          <span className="text-xs text-white/30">JEE: {chapter.weightageJEE}</span>
                          <span className="text-xs text-white/30">NEET: {chapter.weightageNEET}</span>
                        </div>
                        <motion.div animate={{ rotate: expandedChapter === chapter.id ? 180 : 0 }}>
                          <ChevronDown className="w-5 h-5 text-white/30" />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedChapter === chapter.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 md:px-5 pb-5 border-t border-white/5 pt-4">
                            {/* Question preview */}
                            <div className="space-y-2 mb-4">
                              {chapter.questions.slice(0, 3).map((q, qi) => (
                                <div key={q.id} className="flex items-start gap-3 bg-white/[0.02] rounded-lg p-3">
                                  <span className="text-white/20 text-sm font-mono mt-0.5">Q{qi + 1}</span>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-white/60 text-sm line-clamp-2">{q.question}</p>
                                    <div className="flex items-center gap-2 mt-1.5">
                                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${examBadge(q.exam)}`}>
                                        {q.exam} {q.year}
                                      </span>
                                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${difficultyColor(q.difficulty)}`}>
                                        {q.difficulty}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              {chapter.questions.length > 3 && (
                                <p className="text-white/30 text-xs text-center py-1">
                                  + {chapter.questions.length - 3} more questions
                                </p>
                              )}
                            </div>
                            <Button
                              onClick={() => startPractice(chapter)}
                              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold"
                            >
                              <Zap className="w-4 h-4 mr-2" />
                              Start Practice ({chapter.questions.length} Questions)
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {filteredChapters.length === 0 && (
                <div className="text-center py-16 text-white/30">
                  <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No chapters match your filters.</p>
                </div>
              )}
            </motion.div>
          ) : (
            /* Practice Mode */
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Practice Header */}
              <div className="flex items-center justify-between mb-6">
                <button onClick={backToChapters} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">Back to Chapters</span>
                </button>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-emerald-500/10 rounded-lg px-3 py-1.5 border border-emerald-400/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-sm font-medium">{score}/{attempted}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5 border border-white/10">
                    <BookOpen className="w-4 h-4 text-white/50" />
                    <span className="text-white/60 text-sm">{currentQIndex + 1}/{practiceQuestions.length}</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {selectedChapter?.icon} {selectedChapter?.name}
              </h2>

              {/* Exam & Difficulty Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(["all", "JEE Main", "JEE Advanced", "NEET"] as const).map((e) => (
                  <button
                    key={e}
                    onClick={() => {
                      setFilterExam(e);
                      setCurrentQIndex(0);
                      setSelectedOption(null);
                      setShowSolution(false);
                      setScore(0);
                      setAttempted(0);
                      setPracticeComplete(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                      filterExam === e
                        ? "bg-cyan-500/20 text-cyan-400 border-cyan-400/40"
                        : "bg-white/5 text-white/40 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {e === "all" ? "All Exams" : e}
                  </button>
                ))}
                <span className="text-white/10">|</span>
                {(["all", "Easy", "Medium", "Hard"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => {
                      setFilterDifficulty(d);
                      setCurrentQIndex(0);
                      setSelectedOption(null);
                      setShowSolution(false);
                      setScore(0);
                      setAttempted(0);
                      setPracticeComplete(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                      filterDifficulty === d
                        ? "bg-amber-500/20 text-amber-400 border-amber-400/40"
                        : "bg-white/5 text-white/40 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {d === "all" ? "All Levels" : d}
                  </button>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/5 rounded-full mb-8 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${practiceQuestions.length > 0 ? ((currentQIndex + 1) / practiceQuestions.length) * 100 : 0}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {practiceComplete ? (
                /* Results Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-lg mx-auto text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Practice Complete!
                  </h3>
                  <p className="text-white/50 mb-6">{selectedChapter?.name}</p>
                  <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 mb-8">
                    <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      {score}/{attempted}
                    </div>
                    <p className="text-white/40 mb-4">
                      {Math.round((score / Math.max(attempted, 1)) * 100)}% Accuracy
                    </p>
                    <div className="flex justify-center gap-6">
                      <div className="text-center">
                        <div className="text-emerald-400 font-bold text-lg">{score}</div>
                        <div className="text-white/30 text-xs">Correct</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-400 font-bold text-lg">{attempted - score}</div>
                        <div className="text-white/30 text-xs">Wrong</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <Button
                      onClick={() => {
                        setCurrentQIndex(0);
                        setSelectedOption(null);
                        setShowSolution(false);
                        setScore(0);
                        setAttempted(0);
                        setPracticeComplete(false);
                      }}
                      variant="outline"
                      className="border-white/10 text-white/70 hover:bg-white/5"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" /> Retry
                    </Button>
                    <Button onClick={backToChapters} className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                      <BookOpen className="w-4 h-4 mr-2" /> More Chapters
                    </Button>
                  </div>
                </motion.div>
              ) : practiceQuestions.length === 0 ? (
                <div className="text-center py-16 text-white/30">
                  <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No questions match your filters. Try changing the exam or difficulty filter.</p>
                </div>
              ) : (
                /* Question Card */
                <motion.div
                  key={currentQIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#111827]/80 border border-white/5 rounded-2xl overflow-hidden"
                >
                  {/* Question Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                      <span className="text-white/20 font-mono text-sm">Q{currentQIndex + 1}</span>
                      <span className={`text-[11px] px-2.5 py-0.5 rounded-full border ${examBadge(practiceQuestions[currentQIndex].exam)}`}>
                        {practiceQuestions[currentQIndex].exam} {practiceQuestions[currentQIndex].year}
                      </span>
                      <span className={`text-[11px] px-2.5 py-0.5 rounded-full border ${difficultyColor(practiceQuestions[currentQIndex].difficulty)}`}>
                        {practiceQuestions[currentQIndex].difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Question Body */}
                  <div className="p-6 md:p-8">
                    <p className="text-white/90 text-lg leading-relaxed mb-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      {practiceQuestions[currentQIndex].question}
                    </p>

                    {/* Options */}
                    <div className="space-y-3 mb-6">
                      {practiceQuestions[currentQIndex].options.map((opt, oi) => {
                        const isSelected = selectedOption === oi;
                        const isCorrect = oi === practiceQuestions[currentQIndex].correctAnswer;
                        const hasAnswered = selectedOption !== null;

                        let optionClass = "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20";
                        if (hasAnswered) {
                          if (isCorrect) {
                            optionClass = "bg-emerald-500/10 border-emerald-400/40";
                          } else if (isSelected && !isCorrect) {
                            optionClass = "bg-red-500/10 border-red-400/40";
                          } else {
                            optionClass = "bg-white/[0.02] border-white/5 opacity-50";
                          }
                        }

                        return (
                          <button
                            key={oi}
                            onClick={() => handleOptionSelect(oi)}
                            disabled={hasAnswered}
                            className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border transition-all ${optionClass}`}
                          >
                            <span
                              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                                hasAnswered && isCorrect
                                  ? "bg-emerald-500 text-white"
                                  : hasAnswered && isSelected && !isCorrect
                                  ? "bg-red-500 text-white"
                                  : "bg-white/10 text-white/50"
                              }`}
                            >
                              {hasAnswered && isCorrect ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : hasAnswered && isSelected && !isCorrect ? (
                                <XCircle className="w-4 h-4" />
                              ) : (
                                String.fromCharCode(65 + oi)
                              )}
                            </span>
                            <span className={`text-sm leading-relaxed pt-1 ${hasAnswered && isCorrect ? "text-emerald-300" : hasAnswered && isSelected && !isCorrect ? "text-red-300" : "text-white/70"}`}>
                              {opt}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Solution Toggle */}
                    {selectedOption !== null && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <button
                          onClick={() => setShowSolution(!showSolution)}
                          className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm mb-4 transition-colors"
                        >
                          <Lightbulb className="w-4 h-4" />
                          {showSolution ? "Hide Solution" : "View Solution"}
                          <ChevronRight className={`w-3 h-3 transition-transform ${showSolution ? "rotate-90" : ""}`} />
                        </button>

                        <AnimatePresence>
                          {showSolution && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="bg-amber-500/5 border border-amber-400/20 rounded-xl p-5 mb-4">
                                <h4 className="text-amber-400 font-semibold text-sm mb-2 flex items-center gap-2">
                                  <Lightbulb className="w-4 h-4" /> Solution
                                </h4>
                                <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                                  {practiceQuestions[currentQIndex].solution}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <Button
                          onClick={nextQuestion}
                          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold"
                        >
                          {currentQIndex + 1 >= practiceQuestions.length ? (
                            <>
                              <Trophy className="w-4 h-4 mr-2" /> View Results
                            </>
                          ) : (
                            <>
                              Next Question <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
