/*
 * Design: "Cosmic Classroom" — Courses section with staggered cards
 * Shows REAL courses from the YouTube channel, links to /courses page
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Clock, BookOpen, Zap, Atom, Waves, CircuitBoard, Compass, Lightbulb } from "lucide-react";
import { Link } from "wouter";

const COURSES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/courses-bg-idc2P3qE8nmvNMwQeZJVcX.webp";

const courses = [
  {
    title: "Electrostatics",
    description: "Complete electrostatics — Coulomb's law, electric field, Gauss's law, potential, and advanced problems. 55 video lectures.",
    icon: Zap,
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "hover:border-amber-500/30",
    iconColor: "text-amber-400",
    tag: "Class 12 · 55 Videos",
    videoCount: 55,
  },
  {
    title: "Vectors",
    description: "Master vector algebra — addition, dot product, cross product, 3D vectors, and equilibrium problems. 25 video lectures.",
    icon: Compass,
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
    tag: "Class 11 · 25 Videos",
    videoCount: 25,
  },
  {
    title: "Geometrical Optics",
    description: "Real & virtual images, mirrors, lenses, refraction, and optical instruments. 22 detailed video lectures.",
    icon: Lightbulb,
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "hover:border-amber-500/30",
    iconColor: "text-amber-400",
    tag: "Class 12 · 22 Videos",
    videoCount: 22,
  },
  {
    title: "Capacitors",
    description: "Parallel plate capacitors, series/parallel combinations, energy storage, dielectrics, and RC circuits. 21 lectures.",
    icon: CircuitBoard,
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
    tag: "Class 12 · 21 Videos",
    videoCount: 21,
  },
  {
    title: "Modern Physics",
    description: "Photoelectric effect, Bohr model, nuclear physics, radioactivity, and dual nature of matter. 13 lectures.",
    icon: Atom,
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "hover:border-amber-500/30",
    iconColor: "text-amber-400",
    tag: "Class 12 · 13 Videos",
    videoCount: 13,
  },
  {
    title: "Newton's Laws of Motion",
    description: "All three laws, friction, circular motion, pseudo forces, and common misconceptions cleared. 12 lectures.",
    icon: BookOpen,
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
    tag: "Class 11 · 12 Videos",
    videoCount: 12,
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
              Popular Courses
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Courses That <span className="text-gradient-cyan">Transform</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            279+ video lectures across 18 courses — from Class 11 fundamentals to Class 12 advanced topics. Concept-first approach to make you think like a physicist.
          </p>
        </AnimatedCard>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <AnimatedCard key={course.title} delay={i * 0.1}>
              <Link href="/courses">
                <div
                  className={`group relative h-full p-6 rounded-2xl bg-[#151D2E]/60 border border-white/5 ${course.borderColor} transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm cursor-pointer`}
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
                        <span style={{ fontFamily: "var(--font-mono)" }}>{course.videoCount} Video Lectures</span>
                      </div>
                      <span
                        className="ml-auto text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        View Course →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* View All CTA */}
        <AnimatedCard delay={0.6} className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/[0.05] transition-all text-sm font-medium"
          >
            Browse all 18 courses with 279+ videos
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </AnimatedCard>
      </div>
    </section>
  );
}
