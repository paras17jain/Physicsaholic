/*
 * Design: "Cosmic Classroom" — Popular Videos section
 * Shows top PHYSICS LECTURE videos (filtered), not viral/motivational content
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { allCourses, formatDuration, formatViews, getTotalVideos } from "@/data/videoData";

// Filter to only show actual physics lecture videos (exclude motivational, strategy, experiments)
const skipWords = [
  "social experiment", "motivational", "international media", "feel like not studying",
  "strategy", "motivation", "interview", "backlog", "time table", "study plan",
  "crash course", "rank booster", "paper experience", "inorganic chemistry",
  "how to", "tips on", "aspirant", "score 120", "quick analysis", "paper analysis",
  "study tips", "neet 2021 physics paper", "neet 2022", "jee 2022"
];

const topVideos = allCourses
  .filter(c => c.id !== "strategy-motivation" && c.id !== "popcorn-physics" && c.id !== "neet-one-shot")
  .flatMap(c => c.videos)
  .filter(v => !skipWords.some(w => v.title.toLowerCase().includes(w)))
  .sort((a, b) => b.views - a.views)
  .slice(0, 6);

function VideoCard({ video, index }: { video: typeof topVideos[0]; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative rounded-2xl overflow-hidden bg-[#151D2E] border border-white/5 hover:border-cyan-500/20 transition-all duration-500">
        {isPlaying ? (
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : (
          <div
            className="relative aspect-video cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            {/* Duration badge */}
            <span className="absolute bottom-2 right-2 text-xs bg-black/80 text-white px-1.5 py-0.5 rounded">
              {formatDuration(video.duration)}
            </span>
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-all duration-300">
                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
              </div>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="p-4">
          <h3 className="text-sm font-bold text-white mb-1.5 line-clamp-2 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            {video.title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>{formatViews(video.views)} views</span>
            <span>{formatDuration(video.duration)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideosSection() {
  return (
    <section id="videos" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
              Top Physics Lectures
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Watch & <span className="text-gradient-cyan">Learn</span>
              </h2>
              <p className="text-slate-400 mt-2 text-sm">
                {getTotalVideos()}+ curated video lectures from the Physicsaholics YouTube channel
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-[#0B1120] hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Browse All Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.youtube.com/@IITJEENEET"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                YouTube
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Video Grid — Top 6 physics lectures */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topVideos.map((video, i) => (
            <VideoCard key={video.videoId} video={video} index={i} />
          ))}
        </div>

        {/* Browse All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/[0.05] transition-all text-sm font-medium"
          >
            <Play className="w-4 h-4" />
            Explore all {getTotalVideos()} video lectures across 18 courses
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
