/*
 * Design: "Cosmic Classroom" — Hero with cosmic background, luminous accents
 * Large asymmetric layout with animated text reveal
 */
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { Link } from "wouter";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/hero-bg-RqYPHvyyAEpssrtAUwzhtU.webp";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/70 via-[#0B1120]/50 to-[#0B1120]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/80 to-transparent" />
      </div>

      {/* Grid dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm font-medium text-amber-400" style={{ fontFamily: "var(--font-mono)" }}>
                Top Physics Educator for JEE & NEET
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
                Master Physics
                <br />
                <span className="text-gradient-amber">with Confidence</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-400 max-w-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Join <span className="text-white font-semibold">Prateek Jain Sir</span> — IIT JEE & NEET Physics authority with 8+ years of excellence. From concepts to top ranks, feel the physics.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/courses"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-[#0B1120] hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#videos"
                onClick={(e) => { e.preventDefault(); document.querySelector("#videos")?.scrollIntoView({ behavior: "smooth" }); }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Play className="w-5 h-5 text-cyan-400" />
                Watch Videos
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "8+", label: "Years Teaching" },
                { value: "AIR 6", label: "Top Rank Produced" },
                { value: "1L+", label: "Students Taught" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1" style={{ fontFamily: "var(--font-mono)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side — Decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              {/* Orbital rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-amber-500/10 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-cyan-500/5 animate-[spin_25s_linear_infinite]" />

              {/* Center glow */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-amber-500/10 to-cyan-500/10 blur-2xl" />

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 px-3 py-1.5 rounded-lg bg-[#151D2E]/80 border border-amber-500/20 backdrop-blur-sm"
              >
                <span className="text-xs font-medium text-amber-400" style={{ fontFamily: "var(--font-mono)" }}>E = mc²</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-4 px-3 py-1.5 rounded-lg bg-[#151D2E]/80 border border-cyan-500/20 backdrop-blur-sm"
              >
                <span className="text-xs font-medium text-cyan-400" style={{ fontFamily: "var(--font-mono)" }}>F = ma</span>
              </motion.div>
              <motion.div
                animate={{ y: [-8, 12, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 right-0 px-3 py-1.5 rounded-lg bg-[#151D2E]/80 border border-white/10 backdrop-blur-sm"
              >
                <span className="text-xs font-medium text-slate-300" style={{ fontFamily: "var(--font-mono)" }}>ΔE = hν</span>
              </motion.div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-3xl">⚛</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent" />
    </section>
  );
}
