/**
 * DPP (Daily Practice Problems) Downloads Page
 * Design: Cosmic Classroom — dark navy with amber/cyan accents
 * Downloadable chapter-wise practice PDFs for JEE/NEET
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft, Download, FileText, GraduationCap, BookOpen,
  Calculator, Ruler, ArrowUpRight, TrendingUp, Zap,
  Globe, Activity, Atom, Battery, Cable, Magnet,
  Lightbulb, Flame, Target, Sparkles
} from "lucide-react";

interface DPPItem {
  id: string;
  title: string;
  classLevel: 11 | 12;
  problems: number;
  icon: React.ReactNode;
  topics: string;
  pdfUrl: string;
}

const dpps: DPPItem[] = [
  {
    id: "kinematics",
    title: "Kinematics",
    classLevel: 11,
    problems: 10,
    icon: <ArrowUpRight className="w-5 h-5" />,
    topics: "Motion in 1D & 2D, Projectile, Relative Motion",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/kinematics_dpp_3889eba3.pdf",
  },
  {
    id: "laws-of-motion",
    title: "Laws of Motion",
    classLevel: 11,
    problems: 10,
    icon: <TrendingUp className="w-5 h-5" />,
    topics: "Newton's Laws, Friction, Circular Motion",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/laws_of_motion_dpp_4d5030ed.pdf",
  },
  {
    id: "work-energy-power",
    title: "Work, Energy & Power",
    classLevel: 11,
    problems: 10,
    icon: <Zap className="w-5 h-5" />,
    topics: "Work-Energy Theorem, Conservation, Power",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/work_energy_power_dpp_cfb57c70.pdf",
  },
  {
    id: "rotational-motion",
    title: "Rotational Motion",
    classLevel: 11,
    problems: 10,
    icon: <Activity className="w-5 h-5" />,
    topics: "Moment of Inertia, Torque, Angular Momentum",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/rotational_motion_dpp_5fc52e39.pdf",
  },
  {
    id: "gravitation",
    title: "Gravitation",
    classLevel: 11,
    problems: 10,
    icon: <Globe className="w-5 h-5" />,
    topics: "Newton's Law, Orbital Velocity, Escape Velocity",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/gravitation_dpp_f7621e38.pdf",
  },
  {
    id: "vectors",
    title: "Vectors",
    classLevel: 11,
    problems: 10,
    icon: <Calculator className="w-5 h-5" />,
    topics: "Dot Product, Cross Product, Resolution",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/vectors_dpp_af3976da.pdf",
  },
  {
    id: "thermodynamics",
    title: "Thermodynamics",
    classLevel: 11,
    problems: 10,
    icon: <Flame className="w-5 h-5" />,
    topics: "Laws of Thermodynamics, Carnot Engine, Entropy",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/thermodynamics_dpp_63af5931.pdf",
  },
  {
    id: "waves-oscillations",
    title: "Waves & Oscillations",
    classLevel: 11,
    problems: 10,
    icon: <Activity className="w-5 h-5" />,
    topics: "SHM, Wave Equation, Beats, Doppler Effect",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/waves_and_oscillations_dpp_bcbfc33b.pdf",
  },
  {
    id: "electrostatics",
    title: "Electrostatics",
    classLevel: 12,
    problems: 10,
    icon: <Atom className="w-5 h-5" />,
    topics: "Coulomb's Law, Electric Field, Gauss's Law",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/electrostatics_dpp_71220bd0.pdf",
  },
  {
    id: "current-electricity",
    title: "Current Electricity",
    classLevel: 12,
    problems: 10,
    icon: <Battery className="w-5 h-5" />,
    topics: "Ohm's Law, Kirchhoff's Laws, Wheatstone Bridge",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/current_electricity_dpp_ce925106.pdf",
  },
  {
    id: "magnetic-effects",
    title: "Magnetic Effects of Current",
    classLevel: 12,
    problems: 10,
    icon: <Magnet className="w-5 h-5" />,
    topics: "Biot-Savart, Ampere's Law, Force on Conductor",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/magnetic_effects_dpp_18879a00.pdf",
  },
  {
    id: "em-induction",
    title: "Electromagnetic Induction",
    classLevel: 12,
    problems: 10,
    icon: <Cable className="w-5 h-5" />,
    topics: "Faraday's Law, Lenz's Law, Self & Mutual Inductance",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/electromagnetic_induction_dpp_e265a12b.pdf",
  },
  {
    id: "optics",
    title: "Optics",
    classLevel: 12,
    problems: 10,
    icon: <Lightbulb className="w-5 h-5" />,
    topics: "Reflection, Refraction, Interference, Diffraction",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/optics_dpp_bd3a9e56.pdf",
  },
  {
    id: "modern-physics",
    title: "Modern Physics",
    classLevel: 12,
    problems: 10,
    icon: <Target className="w-5 h-5" />,
    topics: "Photoelectric Effect, Bohr Model, Nuclear Physics",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/modern_physics_dpp_6c381229.pdf",
  },
  {
    id: "capacitors",
    title: "Capacitors",
    classLevel: 12,
    problems: 10,
    icon: <Ruler className="w-5 h-5" />,
    topics: "Parallel Plate, Series/Parallel, Energy, RC Circuit",
    pdfUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/capacitors_dpp_c4070ba5.pdf",
  },
];

export default function DPP() {
  const [activeTab, setActiveTab] = useState<"all" | "11" | "12">("all");

  const filtered = activeTab === "all" ? dpps : dpps.filter(d => d.classLevel === Number(activeTab));

  const totalProblems = dpps.reduce((s, d) => s + d.problems, 0);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-bold font-['Space_Grotesk']">
              Daily Practice Problems
            </h1>
            <p className="text-xs text-slate-500">
              {dpps.length} chapters · {totalProblems} problems · JEE & NEET
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400 font-medium hidden sm:inline">Free PDFs</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] mb-3">
            Chapter-wise <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">Practice Sheets</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Download free DPP PDFs for every chapter. Each sheet contains 10 carefully curated problems
            with difficulty markers — perfect for daily practice alongside video lectures.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { id: "all" as const, label: "All Chapters", icon: <BookOpen className="w-4 h-4" /> },
            { id: "11" as const, label: "Class 11", icon: <GraduationCap className="w-4 h-4" /> },
            { id: "12" as const, label: "Class 12", icon: <GraduationCap className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  : "bg-white/[0.04] text-slate-400 hover:text-slate-200 border border-white/[0.06]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* DPP Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((dpp, i) => (
            <motion.div
              key={dpp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-300"
            >
              {/* Class badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                  dpp.classLevel === 11
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                }`}>
                  Class {dpp.classLevel}
                </span>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                {dpp.icon}
              </div>

              {/* Title & info */}
              <h3 className="text-base font-semibold text-slate-100 mb-1 font-['Space_Grotesk']">
                {dpp.title}
              </h3>
              <p className="text-xs text-slate-500 mb-3">{dpp.topics}</p>

              {/* Stats */}
              <div className="flex items-center gap-3 mb-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  {dpp.problems} problems
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Easy · Medium · Hard
                </span>
              </div>

              {/* Download button */}
              <a
                href={dpp.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500/10 to-cyan-500/10 border border-amber-500/20 text-amber-400 hover:from-amber-500/20 hover:to-cyan-500/20 hover:text-amber-300 transition-all text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-amber-500/[0.06] to-cyan-500/[0.06] border border-white/[0.06]"
        >
          <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-2">
            Complement with Video Lectures
          </h3>
          <p className="text-sm text-slate-400 mb-4 max-w-lg mx-auto">
            Watch Prateek Sir's detailed explanations on YouTube, then solve these DPPs to solidify your understanding.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/courses"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-[#0a0e1a] font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all"
            >
              Watch Videos
            </Link>
            <Link
              href="/learn"
              className="px-5 py-2.5 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-amber-500/30 text-sm transition-all"
            >
              Study Concepts
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
