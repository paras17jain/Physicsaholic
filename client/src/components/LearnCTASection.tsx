/*
 * Design: "Cosmic Classroom" — Learning Hub CTA section
 * Promotes the Learn, Quiz, and Flashcard features
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Zap, Layers, ArrowRight, Atom, Brain, FlaskConical, FileText, GraduationCap } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: BookOpen,
    title: "Concept Library",
    description: "15+ detailed physics topics with formulas, diagrams, and key concepts for Class 11 & 12",
    href: "/learn",
    color: "amber",
    gradient: "from-amber-500/10 to-amber-600/5",
    border: "border-amber-500/20",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    icon: Zap,
    title: "Interactive Quiz",
    description: "90+ MCQ questions with instant feedback, explanations, scoring, and timer",
    href: "/quiz",
    color: "cyan",
    gradient: "from-cyan-500/10 to-cyan-600/5",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    icon: Layers,
    title: "Flashcards",
    description: "40+ revision flashcards with flip animation, progress tracking, and spaced repetition",
    href: "/flashcards",
    color: "emerald",
    gradient: "from-emerald-500/10 to-emerald-600/5",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: FileText,
    title: "Practice DPPs",
    description: "15 chapter-wise PDF practice sheets with 150 problems — Easy, Medium & Hard for JEE/NEET",
    href: "/dpp",
    color: "orange",
    gradient: "from-orange-500/10 to-orange-600/5",
    border: "border-orange-500/20",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: GraduationCap,
    title: "Previous Year Qs",
    description: "70+ PYQs from JEE Main, JEE Advanced & NEET with detailed solutions and exam year tags",
    href: "/pyq",
    color: "purple",
    gradient: "from-purple-500/10 to-purple-600/5",
    border: "border-purple-500/20",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
];

const topicPreviews = [
  { icon: Atom, label: "Electrostatics" },
  { icon: FlaskConical, label: "Thermodynamics" },
  { icon: Brain, label: "Modern Physics" },
  { icon: Atom, label: "Kinematics" },
  { icon: FlaskConical, label: "Ray Optics" },
  { icon: Brain, label: "Rotational Motion" },
];

export default function LearnCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-[150px]" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
              Interactive Learning
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Your Physics <span className="text-gradient-cyan">Study Hub</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg" style={{ fontFamily: "var(--font-body)" }}>
            Dive deep into JEE & NEET physics concepts with our interactive learning tools — concepts, quizzes, and flashcards all in one place.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              <Link
                href={feature.href}
                className={`block p-6 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} hover:scale-[1.02] transition-all duration-300 group h-full`}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {feature.description}
                </p>
                <div className={`inline-flex items-center gap-1.5 text-sm font-medium ${feature.iconColor} group-hover:gap-2.5 transition-all`} style={{ fontFamily: "var(--font-display)" }}>
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Topic Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs text-slate-600 mr-2" style={{ fontFamily: "var(--font-mono)" }}>Topics include:</span>
          {topicPreviews.map((topic) => (
            <Link
              key={topic.label}
              href="/learn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-400 hover:text-amber-400 hover:border-amber-500/20 transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <topic.icon className="w-3 h-3" />
              {topic.label}
            </Link>
          ))}
          <Link
            href="/learn"
            className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            +9 more <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
