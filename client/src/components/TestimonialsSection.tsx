/*
 * Design: "Cosmic Classroom" — Testimonials with cosmic nebula background
 * Horizontal scrolling cards with student quotes and achievements
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIAL_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318567070/4FDFmXoMNwPfojj8wTsUBc/testimonial-bg-h7ya5Fy77CWgiXkWZEDkxD.webp";

const testimonials = [
  {
    name: "Om Prabhu",
    achievement: "AIR 44, NEET 2022",
    score: "180/180 in Physics",
    quote: "I am Om Prabhu; a fresher student from a non-dummy school and ended my NEET journey in 2022 with AIR-44 (Score-701/720). Physics is my strongest subject and my score was 180/180. My actual NEET physics journey started when I met Prateek Jain sir at Unacademy Plus in August 2020. After that day, I observed an abrupt change in my aptitude. He kept focusing on concepts instead of mugging up formulae — in the same manner as HCV works, but much more simplified. Physicsaholics Points helped me review the whole physics in just 3-4 hours.",
    avatar: "OP",
  },
  {
    name: "Shrey Malik",
    achievement: "JEE Advanced 2022",
    score: "Top Rank",
    quote: "Prateek Jain Sir's teaching methodology completely changed how I approach physics problems. His concept-first approach helped me develop intuition for complex problems. The way he breaks down difficult topics into simple, understandable pieces is remarkable. I owe my JEE Advanced success to his guidance and the Physicsaholics community.",
    avatar: "SM",
  },
  {
    name: "Ananya Sharma",
    achievement: "NEET 2022",
    score: "170/180 in Physics",
    quote: "Joining Physicsaholics was the best decision of my NEET preparation. Prateek Sir makes physics feel like a story rather than a burden. His DPPs and concept videos are structured so well that even the toughest topics become manageable. The personal attention and doubt-solving sessions were invaluable for my preparation.",
    avatar: "AS",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={TESTIMONIAL_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0B1120]/85" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="container relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-sm font-medium text-amber-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
              Student Success Stories
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-amber-500 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            What Students <span className="text-gradient-amber">Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#151D2E]/60 border border-white/5 backdrop-blur-sm"
          >
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-amber-500/10" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              "{testimonials[current].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-[#0B1120]" style={{ fontFamily: "var(--font-display)" }}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-amber-400" style={{ fontFamily: "var(--font-mono)" }}>
                    {testimonials[current].achievement}
                  </div>
                </div>
              </div>
              <div className="hidden sm:block px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <span className="text-sm font-bold text-amber-400" style={{ fontFamily: "var(--font-mono)" }}>
                  {testimonials[current].score}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-amber-500" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
