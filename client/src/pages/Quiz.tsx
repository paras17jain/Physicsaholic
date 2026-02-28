/*
 * Design: "Cosmic Classroom" — Interactive Quiz with scoring
 * Multiple choice questions with instant feedback and explanations
 */
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearch } from "wouter";
import { ArrowLeft, Zap, CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, BookOpen, Timer, Target } from "lucide-react";
import { quizQuestions, allConcepts } from "@/data/physicsData";
import { useProgress } from "@/hooks/useProgress";

export default function Quiz() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const conceptFilter = params.get("concept");

  const [selectedConcept, setSelectedConcept] = useState<string>(conceptFilter || "all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const questions = useMemo(() => {
    if (selectedConcept === "all") return quizQuestions;
    return quizQuestions.filter((q) => q.conceptId === selectedConcept);
  }, [selectedConcept]);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && !quizComplete) {
      interval = setInterval(() => setTimeElapsed((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, quizComplete]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    setAnswered((a) => a + 1);
    if (index === currentQuestion.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const { addQuizScore } = useProgress();

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setQuizComplete(true);
      setIsRunning(false);
      // Save score to progress tracker
      const topicName = selectedConcept === "all" ? "Mixed Topics" : (allConcepts.find(c => c.id === selectedConcept)?.title || "Mixed Topics");
      addQuizScore(score + (selectedAnswer === currentQuestion.correctIndex ? 1 : 0), questions.length, topicName);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswered(0);
    setQuizComplete(false);
    setTimeElapsed(0);
    setIsRunning(true);
  };

  const getOptionStyle = (index: number) => {
    if (selectedAnswer === null) return "bg-white/5 border-white/10 hover:border-amber-500/30 hover:bg-amber-500/5";
    if (index === currentQuestion.correctIndex) return "bg-emerald-500/10 border-emerald-500/40 text-emerald-300";
    if (index === selectedAnswer && index !== currentQuestion.correctIndex) return "bg-red-500/10 border-red-500/40 text-red-300";
    return "bg-white/5 border-white/10 opacity-50";
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0B1120]/90 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/learn" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>Learn</span>
            </Link>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h1 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>Physics Quiz</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-400" style={{ fontFamily: "var(--font-mono)" }}>
              <Timer className="w-4 h-4" />
              {formatTime(timeElapsed)}
            </div>
            <div className="flex items-center gap-2 text-sm text-amber-400" style={{ fontFamily: "var(--font-mono)" }}>
              <Target className="w-4 h-4" />
              {score}/{answered}
            </div>
          </div>
        </div>
      </header>

      <div className="container py-8 max-w-3xl mx-auto">
        {/* Topic Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => { setSelectedConcept("all"); handleRestart(); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedConcept === "all" ? "bg-amber-500 text-[#0B1120]" : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            All Topics ({quizQuestions.length})
          </button>
          {allConcepts.map((c) => {
            const count = quizQuestions.filter((q) => q.conceptId === c.id).length;
            if (count === 0) return null;
            return (
              <button
                key={c.id}
                onClick={() => { setSelectedConcept(c.id); handleRestart(); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedConcept === c.id ? "bg-amber-500 text-[#0B1120]" : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c.title} ({count})
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {quizComplete ? (
            /* Results Screen */
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-amber-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Quiz Complete!
              </h2>
              <p className="text-slate-400 mb-8" style={{ fontFamily: "var(--font-body)" }}>
                Here's how you performed
              </p>

              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
                <div className="p-4 rounded-xl bg-[#151D2E]/60 border border-white/5">
                  <div className="text-2xl font-bold text-amber-400" style={{ fontFamily: "var(--font-mono)" }}>
                    {score}/{questions.length}
                  </div>
                  <div className="text-xs text-slate-500 mt-1" style={{ fontFamily: "var(--font-mono)" }}>Score</div>
                </div>
                <div className="p-4 rounded-xl bg-[#151D2E]/60 border border-white/5">
                  <div className="text-2xl font-bold text-cyan-400" style={{ fontFamily: "var(--font-mono)" }}>
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <div className="text-xs text-slate-500 mt-1" style={{ fontFamily: "var(--font-mono)" }}>Accuracy</div>
                </div>
                <div className="p-4 rounded-xl bg-[#151D2E]/60 border border-white/5">
                  <div className="text-2xl font-bold text-emerald-400" style={{ fontFamily: "var(--font-mono)" }}>
                    {formatTime(timeElapsed)}
                  </div>
                  <div className="text-xs text-slate-500 mt-1" style={{ fontFamily: "var(--font-mono)" }}>Time</div>
                </div>
              </div>

              {/* Performance message */}
              <div className="p-6 rounded-2xl bg-[#151D2E]/40 border border-white/5 max-w-md mx-auto mb-8">
                <p className="text-slate-300" style={{ fontFamily: "var(--font-body)" }}>
                  {score === questions.length
                    ? "🎉 Perfect score! You've mastered these concepts!"
                    : score >= questions.length * 0.7
                    ? "👏 Great job! You have a strong understanding of these topics."
                    : score >= questions.length * 0.5
                    ? "📚 Good effort! Review the concepts you missed and try again."
                    : "💪 Keep practicing! Go through the learning material and come back stronger."}
                </p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-[#0B1120] font-semibold hover:from-amber-400 hover:to-amber-500 transition-all"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <RotateCcw className="w-4 h-4" /> Try Again
                </button>
                <Link
                  href="/learn"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/30 transition-all"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <BookOpen className="w-4 h-4" /> Review Concepts
                </Link>
              </div>
            </motion.div>
          ) : currentQuestion ? (
            /* Question Card */
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
                    Question {currentIndex + 1} of {questions.length}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                    currentQuestion.difficulty === "Easy" ? "bg-emerald-500/10 text-emerald-400" :
                    currentQuestion.difficulty === "Medium" ? "bg-amber-500/10 text-amber-400" :
                    "bg-red-500/10 text-red-400"
                  }`} style={{ fontFamily: "var(--font-mono)" }}>
                    {currentQuestion.difficulty}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-cyan-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="p-8 rounded-2xl bg-[#151D2E]/60 border border-white/5 mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={selectedAnswer !== null}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left ${getOptionStyle(i)}`}
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ fontFamily: "var(--font-mono)" }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-base" style={{ fontFamily: "var(--font-body)" }}>{option}</span>
                    {selectedAnswer !== null && i === currentQuestion.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 ml-auto flex-shrink-0" />
                    )}
                    {selectedAnswer === i && i !== currentQuestion.correctIndex && (
                      <XCircle className="w-5 h-5 text-red-400 ml-auto flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 mb-6"
                  >
                    <h4 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                      Explanation
                    </h4>
                    <p className="text-slate-300 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {currentQuestion.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next button */}
              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-[#0B1120] font-semibold hover:from-amber-400 hover:to-amber-500 transition-all"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {currentIndex + 1 >= questions.length ? "See Results" : "Next Question"}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-500" style={{ fontFamily: "var(--font-body)" }}>No questions available for this topic yet.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
