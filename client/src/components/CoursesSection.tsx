/*
 * Design: "Cosmic Classroom" — Courses section with staggered cards
 * Glowing border accents on hover, physics-themed background
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Clock, BookOpen, Zap, Atom, Waves, CircuitBoard } from "lucide-react";

const COURSES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/courses-bg-idc2P3qE8nmvNMwQeZJVcX.webp";

const courses = [
  {
    title: "Vectors DPPs for JEE Main & Advanced",
    description: "Video Solutions of Vectors DPPs — master direction, magnitude, and vector algebra with detailed problem-solving.",
    icon: Zap,
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "hover:border-amber-500/30",
    iconColor: "text-amber-400",
    tag: "JEE Main & Advanced",
  },
  {
    title: "Electromagnetic Induction DPPs",
    description: "Video Solutions of Electromagnetic Induction DPPs — understand Faraday's law, Lenz's law, and induced EMF.",
    icon: Waves,
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
    tag: "JEE Main & Advanced",
  },
  {
    title: "Capacitor DPPs for JEE Main & Advanced",
    description: "Video Solutions of Capacitor DPPs — dive deep into capacitance, energy storage, and circuit problems.",
    icon: CircuitBoard,
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "hover:border-amber-500/30",
    iconColor: "text-amber-400",
    tag: "JEE Main & Advanced",
  },
  {
    title: "Complete IIT JEE Physics",
    description: "Comprehensive physics course covering all chapters for IIT JEE Main & Advanced with concept-first approach.",
    icon: Atom,
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
    tag: "Complete Course",
  },
  {
    title: "NEET Physics Masterclass",
    description: "Full NEET Physics preparation with focus on conceptual clarity, NCERT alignment, and previous year analysis.",
    icon: BookOpen,
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "hover:border-amber-500/30",
    iconColor: "text-amber-400",
    tag: "NEET",
  },
  {
    title: "Physics Olympiad Prep",
    description: "Advanced problem-solving techniques for International Physics Olympiad aspirants with challenging problems.",
    icon: Zap,
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
    tag: "Olympiad",
  },
];

function AnimatedCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <img src={COURSES_BG} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[#0B1120]/90" />

      <div className="container relative z-10">
        {/* Section Header */}
        <AnimatedCard className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
              Featured Courses
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Courses That <span className="text-gradient-cyan">Transform</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Concept-first approach to physics — build deep understanding, not just formulas. Each course is designed to make you think like a physicist.
          </p>
        </AnimatedCard>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <AnimatedCard key={course.title} delay={i * 0.1}>
              <div
                className={`group relative h-full p-6 rounded-2xl bg-[#151D2E]/60 border border-white/5 ${course.borderColor} transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-400 border border-white/5" style={{ fontFamily: "var(--font-mono)" }}>
                      {course.tag}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${course.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <course.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {course.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span style={{ fontFamily: "var(--font-mono)" }}>Video Solutions</span>
                    </div>
                    <a
                      href="https://www.youtube.com/@IITJEENEET"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Watch Now →
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
