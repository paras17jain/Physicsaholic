/*
 * Design: "Cosmic Classroom" — Flashcards with flip animation
 * Card flip on click, category filtering, progress tracking
 */
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearch } from "wouter";
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, RotateCcw, Shuffle, Eye, EyeOff, Layers } from "lucide-react";
import { flashcards, allConcepts } from "@/data/physicsData";

export default function Flashcards() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const conceptFilter = params.get("concept");

  const [selectedConcept, setSelectedConcept] = useState<string>(conceptFilter || "all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<string>>(new Set());
  const [showOnlyUnknown, setShowOnlyUnknown] = useState(false);

  const filteredCards = useMemo(() => {
    let cards = selectedConcept === "all" ? flashcards : flashcards.filter((f) => f.conceptId === selectedConcept);
    if (showOnlyUnknown) {
      cards = cards.filter((c) => !knownCards.has(c.id));
    }
    return cards;
  }, [selectedConcept, showOnlyUnknown, knownCards]);

  const currentCard = filteredCards[currentIndex];

  const categories = useMemo(() => {
    const cats = new Set(flashcards.map((f) => f.category));
    return Array.from(cats);
  }, []);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % filteredCards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((i) => (i - 1 + filteredCards.length) % filteredCards.length);
    }, 150);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex(Math.floor(Math.random() * filteredCards.length));
    }, 150);
  };

  const toggleKnown = () => {
    if (!currentCard) return;
    const newKnown = new Set(knownCards);
    if (newKnown.has(currentCard.id)) {
      newKnown.delete(currentCard.id);
    } else {
      newKnown.add(currentCard.id);
    }
    setKnownCards(newKnown);
  };

  const handleReset = () => {
    setKnownCards(new Set());
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowOnlyUnknown(false);
  };

  const progress = filteredCards.length > 0 ? Math.round((knownCards.size / flashcards.length) * 100) : 0;

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
              <Layers className="w-5 h-5 text-amber-400" />
              <h1 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>Flashcards</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
              {knownCards.size}/{flashcards.length} mastered
            </span>
            <div className="w-24 h-1.5 rounded-full bg-white/5">
              <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </header>

      <div className="container py-8 max-w-2xl mx-auto">
        {/* Topic Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => { setSelectedConcept("all"); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedConcept === "all" ? "bg-amber-500 text-[#0B1120]" : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            All ({flashcards.length})
          </button>
          {allConcepts.map((c) => {
            const count = flashcards.filter((f) => f.conceptId === c.id).length;
            if (count === 0) return null;
            return (
              <button
                key={c.id}
                onClick={() => { setSelectedConcept(c.id); setCurrentIndex(0); setIsFlipped(false); }}
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

        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowOnlyUnknown(!showOnlyUnknown)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                showOnlyUnknown ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "bg-white/5 text-slate-400 border border-white/10"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {showOnlyUnknown ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              {showOnlyUnknown ? "Show All" : "Hide Known"}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 transition-all"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>
          <span className="text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
            {filteredCards.length > 0 ? `${currentIndex + 1} / ${filteredCards.length}` : "0 / 0"}
          </span>
        </div>

        {/* Flashcard */}
        <AnimatePresence mode="wait">
          {currentCard ? (
            <motion.div
              key={currentCard.id + (isFlipped ? "-back" : "-front")}
              initial={{ opacity: 0, rotateY: isFlipped ? -90 : 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className="relative min-h-[320px] p-8 rounded-2xl border cursor-pointer select-none"
              style={{
                background: isFlipped
                  ? "linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(21, 29, 46, 0.6))"
                  : "linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(21, 29, 46, 0.6))",
                borderColor: isFlipped ? "rgba(6, 182, 212, 0.2)" : "rgba(245, 158, 11, 0.2)",
              }}
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/5 text-slate-500 border border-white/10" style={{ fontFamily: "var(--font-mono)" }}>
                  {currentCard.category}
                </span>
                <span className="text-[10px] text-slate-600" style={{ fontFamily: "var(--font-mono)" }}>
                  {isFlipped ? "ANSWER" : "QUESTION"} • Tap to flip
                </span>
              </div>

              {/* Content */}
              <div className="flex items-center justify-center min-h-[200px]">
                {isFlipped ? (
                  <div className="text-base text-slate-300 leading-relaxed whitespace-pre-line text-center" style={{ fontFamily: "var(--font-body)" }}>
                    {currentCard.back}
                  </div>
                ) : (
                  <h3 className="text-xl lg:text-2xl font-bold text-white text-center leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                    {currentCard.front}
                  </h3>
                )}
              </div>

              {/* Known indicator */}
              {knownCards.has(currentCard.id) && (
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-emerald-400" />
              )}
            </motion.div>
          ) : (
            <div className="min-h-[320px] flex items-center justify-center rounded-2xl bg-[#151D2E]/40 border border-white/5">
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                <p className="text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
                  {showOnlyUnknown ? "All cards mastered! Great job!" : "No flashcards available."}
                </p>
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {filteredCards.length > 0 && (
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShuffle}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/30 transition-all text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Shuffle className="w-4 h-4" /> Shuffle
              </button>
              <button
                onClick={toggleKnown}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  currentCard && knownCards.has(currentCard.id)
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {currentCard && knownCards.has(currentCard.id) ? "✓ Mastered" : "Mark as Known"}
              </button>
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Card dots */}
        {filteredCards.length > 0 && filteredCards.length <= 20 && (
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {filteredCards.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setIsFlipped(false); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-6 bg-amber-500" : knownCards.has(filteredCards[i].id) ? "bg-emerald-500/50" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
