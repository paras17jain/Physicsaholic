/*
 * Design: "Cosmic Classroom" — Learning Hub with concept cards
 * Organized by Class 11 & 12 with filtering and search
 */
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Search, BookOpen, Atom, Zap, Filter, ChevronRight, Star } from "lucide-react";
import { class11Concepts, class12Concepts, allConcepts } from "@/data/physicsData";

const difficultyColors = {
  Easy: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Medium: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Hard: "text-red-400 bg-red-500/10 border-red-500/20",
};

const weightageColors = {
  Low: "text-slate-400",
  Medium: "text-amber-400",
  High: "text-amber-400",
};

export default function Learn() {
  const [activeTab, setActiveTab] = useState<"all" | "11" | "12">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  const filteredConcepts = useMemo(() => {
    let concepts = activeTab === "all" ? allConcepts : activeTab === "11" ? class11Concepts : class12Concepts;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      concepts = concepts.filter(
        (c) => c.title.toLowerCase().includes(q) || c.chapter.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
      );
    }
    return concepts;
  }, [activeTab, searchQuery]);

  const activeConcept = selectedConcept ? allConcepts.find((c) => c.id === selectedConcept) : null;

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0B1120]/90 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>Back</span>
            </Link>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <h1 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>Learning Hub</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/quiz" className="px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all" style={{ fontFamily: "var(--font-display)" }}>
              Quiz
            </Link>
            <Link href="/flashcards" className="px-4 py-2 text-sm font-medium rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-all" style={{ fontFamily: "var(--font-display)" }}>
              Flashcards
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search concepts, chapters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all outline-none"
              style={{ fontFamily: "var(--font-body)" }}
            />
          </div>
          <div className="flex gap-2">
            {[
              { key: "all", label: "All Topics", count: allConcepts.length },
              { key: "11", label: "Class 11", count: class11Concepts.length },
              { key: "12", label: "Class 12", count: class12Concepts.length },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as "all" | "11" | "12")}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-amber-500 text-[#0B1120]"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeConcept ? (
            /* Concept Detail View */
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedConcept(null)}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-6 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <ArrowLeft className="w-4 h-4" /> Back to all concepts
              </button>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Title */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${difficultyColors[activeConcept.difficulty]}`} style={{ fontFamily: "var(--font-mono)" }}>
                        {activeConcept.difficulty}
                      </span>
                      <span className="text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
                        Class {activeConcept.classLevel} • {activeConcept.chapter}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                      {activeConcept.title}
                    </h2>
                    <p className="text-slate-400 leading-relaxed text-lg" style={{ fontFamily: "var(--font-body)" }}>
                      {activeConcept.description}
                    </p>
                  </div>

                  {/* Diagram */}
                  <div className="p-6 rounded-2xl bg-[#151D2E]/60 border border-white/5">
                    <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                      Diagram
                    </h3>
                    <div
                      className="w-full max-w-lg mx-auto"
                      dangerouslySetInnerHTML={{ __html: activeConcept.diagramSvg }}
                    />
                  </div>

                  {/* Key Concepts */}
                  <div className="p-6 rounded-2xl bg-[#151D2E]/60 border border-white/5">
                    <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                      Key Concepts
                    </h3>
                    <div className="space-y-3">
                      {activeConcept.concepts.map((concept, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-amber-400" style={{ fontFamily: "var(--font-mono)" }}>{i + 1}</span>
                          </div>
                          <p className="text-slate-300 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{concept}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar — Formulas */}
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-[#151D2E]/60 border border-white/5 sticky top-24">
                    <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                      Key Formulas
                    </h3>
                    <div className="space-y-4">
                      {activeConcept.keyFormulas.map((f, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <div className="text-lg font-bold text-amber-400 mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                            {f.formula}
                          </div>
                          <div className="text-xs text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
                            {f.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Weightage */}
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>JEE/NEET Weightage</span>
                        <span className={`text-xs font-bold ${weightageColors[activeConcept.weightage]}`} style={{ fontFamily: "var(--font-mono)" }}>
                          {activeConcept.weightage}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              (activeConcept.weightage === "High" && i <= 3) ||
                              (activeConcept.weightage === "Medium" && i <= 2) ||
                              (activeConcept.weightage === "Low" && i <= 1)
                                ? "text-amber-400 fill-amber-400"
                                : "text-slate-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-6 space-y-2">
                      <Link
                        href={`/quiz?concept=${activeConcept.id}`}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all text-sm font-medium"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        <Zap className="w-4 h-4" /> Take Quiz
                      </Link>
                      <Link
                        href={`/flashcards?concept=${activeConcept.id}`}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-all text-sm font-medium"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        <BookOpen className="w-4 h-4" /> Flashcards
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Concept Grid */
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredConcepts.map((concept, i) => (
                <motion.div
                  key={concept.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedConcept(concept.id)}
                  className="group p-6 rounded-2xl bg-[#151D2E]/40 border border-white/5 hover:border-amber-500/20 hover:bg-[#151D2E]/60 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Atom className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${difficultyColors[concept.difficulty]}`} style={{ fontFamily: "var(--font-mono)" }}>
                        {concept.difficulty}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-slate-500 border border-white/10" style={{ fontFamily: "var(--font-mono)" }}>
                        Class {concept.classLevel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                    {concept.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2" style={{ fontFamily: "var(--font-body)" }}>
                    {concept.chapter}
                  </p>

                  {/* Formula preview */}
                  <div className="p-2.5 rounded-lg bg-white/5 mb-4">
                    <p className="text-xs text-amber-400 font-mono truncate">
                      {concept.keyFormulas[0]?.formula}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[1, 2, 3].map((s) => (
                        <Star
                          key={s}
                          className={`w-3 h-3 ${
                            (concept.weightage === "High" && s <= 3) ||
                            (concept.weightage === "Medium" && s <= 2) ||
                            (concept.weightage === "Low" && s <= 1)
                              ? "text-amber-400 fill-amber-400"
                              : "text-slate-700"
                          }`}
                        />
                      ))}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filteredConcepts.length === 0 && !activeConcept && (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <p className="text-slate-500" style={{ fontFamily: "var(--font-body)" }}>No concepts found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
