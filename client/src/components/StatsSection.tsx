/*
 * Design: "Cosmic Classroom" — Stats strip with glowing numbers
 * Animated counters on scroll, monospace font for data
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Trophy, Clock, Star } from "lucide-react";

const stats = [
  { icon: Clock, value: 8, suffix: "+", label: "Years Teaching", prefix: "" },
  { icon: Trophy, value: 6, suffix: "", label: "Best AIR Produced", prefix: "AIR " },
  { icon: Users, value: 100000, suffix: "+", label: "Students Taught", prefix: "" },
  { icon: Star, value: 279, suffix: "+", label: "Video Lectures", prefix: "" },
];

function Counter({ value, prefix, suffix, duration = 2 }: { value: number; prefix: string; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const display = value >= 1000 ? `${Math.floor(count / 1000)}L` : count;

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Glowing line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 group-hover:bg-amber-500/10 transition-colors duration-300">
                <stat.icon className="w-5 h-5 text-amber-400" />
              </div>
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Glowing line bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
}
