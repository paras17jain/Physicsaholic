/*
 * Design: "Cosmic Classroom" — About section with asymmetric layout
 * Portrait on left, credentials on right with glowing card accents
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, GraduationCap, Trophy, Microscope, Users } from "lucide-react";

const PORTRAIT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/about-portrait-8bTagAvy85WnFq58GxHQcF.webp";

const credentials = [
  { icon: BookOpen, label: "Subject", value: "Physics", color: "text-amber-400" },
  { icon: GraduationCap, label: "Experience", value: "8+ Years", color: "text-cyan-400" },
  { icon: Trophy, label: "Unacademy Rank", value: "#1 Faculty", color: "text-amber-400" },
  { icon: Award, label: "Top Rank Produced", value: "AIR 6, AIR 10", color: "text-cyan-400" },
  { icon: Microscope, label: "Research", value: "With HC Verma, IIT Kanpur", color: "text-amber-400" },
  { icon: Users, label: "Exam Expertise", value: "JEE, NEET, Olympiad", color: "text-cyan-400" },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-amber-500 to-transparent" />
            <span className="text-sm font-medium text-amber-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
              About the Mentor
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Meet <span className="text-gradient-amber">Prateek Jain</span> Sir
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={PORTRAIT}
                  alt="Prateek Jain Sir - Physics Faculty"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Prateek Jain
                  </h3>
                  <p className="text-sm text-amber-400 mt-1" style={{ fontFamily: "var(--font-mono)" }}>
                    IIT JEE & NEET Physics Expert
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-slate-300 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Prateek Jain Sir is a prominent IIT-JEE & NEET Physics faculty based in Kota. Currently the <span className="text-white font-semibold">#1 Physics Faculty on Unacademy</span>, he brings over 8 years of teaching experience from several top coaching institutes across India.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mt-4" style={{ fontFamily: "var(--font-body)" }}>
                He has produced several top ranks including <span className="text-amber-400 font-semibold">AIR 6</span> and <span className="text-amber-400 font-semibold">AIR 10</span>, and has conducted research work with <span className="text-white font-semibold">HC Verma Sir at IIT Kanpur</span>. His teaching philosophy focuses on building deep conceptual understanding rather than rote memorization.
              </p>
            </AnimatedSection>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((cred, i) => (
                <AnimatedSection key={cred.label} delay={0.3 + i * 0.08}>
                  <div className="group p-4 rounded-xl bg-[#151D2E]/50 border border-white/5 hover:border-amber-500/20 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-white/5 ${cred.color}`}>
                        <cred.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                          {cred.label}
                        </div>
                        <div className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                          {cred.value}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
