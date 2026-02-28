/*
 * Design: "Cosmic Classroom" — Popular Videos section
 * YouTube video embeds with styled containers and hover effects
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Adventure Park Turned Physics Classroom!",
    subtitle: "Timeout - Rounak Dalmia IIT Bombay | Prateek Jain",
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600&h=340&fit=crop",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "JEE Advanced 2021 Paper Analysis",
    subtitle: "Physics (Shift 2) | Prateek Jain | Accelerate",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=340&fit=crop",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "JEE Advanced 2021 Paper Analysis",
    subtitle: "Physics (Shift 1) | Prateek Jain | Accelerate",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=340&fit=crop",
  },
];

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative rounded-2xl overflow-hidden bg-[#151D2E] border border-white/5 hover:border-cyan-500/20 transition-all duration-500">
        {isPlaying ? (
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
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
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-all duration-300">
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="p-5">
          <h3 className="text-base font-bold text-white mb-1 line-clamp-1" style={{ fontFamily: "var(--font-display)" }}>
            {video.title}
          </h3>
          <p className="text-sm text-slate-500" style={{ fontFamily: "var(--font-body)" }}>
            {video.subtitle}
          </p>
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
              Popular Videos
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Watch & <span className="text-gradient-cyan">Learn</span>
            </h2>
            <a
              href="https://www.youtube.com/@PhysicsaholicsbyPrateekJain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              View All on YouTube
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
