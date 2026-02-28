/**
 * Courses Page — Curated video library from Physicsaholics YouTube channel
 * Design: Cosmic Classroom — dark navy with amber/cyan accents
 * 279 videos organized into 18 courses across Class 11, 12, and Special sections
 */
import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Play, Clock, Eye, ChevronDown, ChevronUp,
  BookOpen, GraduationCap, Sparkles, Search, Filter,
  Calculator, Ruler, ArrowUpRight, TrendingUp, Zap,
  Globe, Activity, Atom, Battery, Cable, Magnet,
  Lightbulb, Flame, Target, Stethoscope
} from "lucide-react";
import {
  allCourses, class11Courses, class12Courses, specialCourses,
  formatDuration, formatViews, getTotalVideos, getTotalDuration,
  type CourseSection, type VideoItem
} from "@/data/videoData";

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="w-5 h-5" />,
  Ruler: <Ruler className="w-5 h-5" />,
  ArrowUpRight: <ArrowUpRight className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Weight: <GraduationCap className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  Atom: <Atom className="w-5 h-5" />,
  Battery: <Battery className="w-5 h-5" />,
  Cable: <Cable className="w-5 h-5" />,
  Magnet: <Magnet className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  Waves: <Activity className="w-5 h-5" />,
  Lightbulb: <Lightbulb className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Stethoscope: <Stethoscope className="w-5 h-5" />,
};

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  return (
    <motion.a
      href={`https://www.youtube.com/watch?v=${video.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      className="group flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.05] hover:border-amber-500/30 transition-all duration-300"
    >
      <div className="relative flex-shrink-0 w-28 h-16 rounded-md overflow-hidden bg-slate-800">
        <img
          src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="w-6 h-6 text-white fill-white" />
        </div>
        <span className="absolute bottom-1 right-1 text-[10px] bg-black/80 text-white px-1 rounded">
          {formatDuration(video.duration)}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm text-slate-200 group-hover:text-amber-400 transition-colors line-clamp-2 leading-tight">
          {video.title}
        </h4>
        <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {formatViews(video.views)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {formatDuration(video.duration)}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function CourseCard({ course, isExpanded, onToggle }: {
  course: CourseSection;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const totalDuration = course.videos.reduce((sum, v) => sum + v.duration, 0);
  const totalViews = course.videos.reduce((sum, v) => sum + v.views, 0);

  return (
    <motion.div
      layout
      className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 hover:bg-white/[0.03] transition-colors text-left"
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-amber-500/20 flex items-center justify-center text-amber-400">
          {iconMap[course.icon] || <BookOpen className="w-5 h-5" />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-slate-100">{course.title}</h3>
          <p className="text-sm text-slate-400 mt-0.5 line-clamp-1">{course.description}</p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-4 text-xs text-slate-500">
          <span className="hidden sm:flex items-center gap-1">
            <Play className="w-3 h-3" />
            {course.videos.length} videos
          </span>
          <span className="hidden md:flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {formatDuration(totalDuration)}
          </span>
          <span className="hidden lg:flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {formatViews(totalViews)} views
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-amber-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-500" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {course.videos.map((video, i) => (
                <VideoCard key={video.videoId} video={video} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Courses() {
  const [activeTab, setActiveTab] = useState<"all" | "class11" | "class12" | "special">("all");
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    let courses: CourseSection[];
    switch (activeTab) {
      case "class11": courses = class11Courses; break;
      case "class12": courses = class12Courses; break;
      case "special": courses = specialCourses; break;
      default: courses = allCourses;
    }

    if (!searchQuery.trim()) return courses;

    const q = searchQuery.toLowerCase();
    return courses.map(course => ({
      ...course,
      videos: course.videos.filter(v => v.title.toLowerCase().includes(q))
    })).filter(c => c.videos.length > 0 || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
  }, [activeTab, searchQuery]);

  const toggleCourse = (id: string) => {
    setExpandedCourses(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const tabs = [
    { id: "all" as const, label: "All Courses", icon: <BookOpen className="w-4 h-4" /> },
    { id: "class11" as const, label: "Class 11", icon: <GraduationCap className="w-4 h-4" /> },
    { id: "class12" as const, label: "Class 12", icon: <GraduationCap className="w-4 h-4" /> },
    { id: "special" as const, label: "Special", icon: <Sparkles className="w-4 h-4" /> },
  ];

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
            <h1 className="text-lg font-bold font-['Space_Grotesk']">Video Courses</h1>
            <p className="text-xs text-slate-500">
              {getTotalVideos()} videos · {formatDuration(getTotalDuration())} of content
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search + Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-all"
            />
          </div>
          <div className="flex gap-1 p-1 rounded-lg bg-white/[0.04] border border-white/[0.06]">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    : "text-slate-400 hover:text-slate-200 border border-transparent"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex items-center gap-6 mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/[0.06] to-cyan-500/[0.06] border border-white/[0.06]">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-slate-300">
              Showing <span className="text-amber-400 font-semibold">{filteredCourses.length}</span> courses
              {" · "}
              <span className="text-cyan-400 font-semibold">
                {filteredCourses.reduce((sum, c) => sum + c.videos.length, 0)}
              </span> videos
            </span>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-slate-500 hover:text-amber-400 transition-colors"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Course List */}
        <div className="space-y-3">
          {filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              isExpanded={expandedCourses.has(course.id)}
              onToggle={() => toggleCourse(course.id)}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">No videos found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-3 text-sm text-amber-400 hover:text-amber-300 transition-colors"
            >
              Clear search
            </button>
          </div>
        )}

        {/* YouTube CTA */}
        <div className="mt-12 mb-8 text-center">
          <a
            href="https://www.youtube.com/@IITJEENEET"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600/30 hover:text-red-300 transition-all text-sm font-medium"
          >
            <Play className="w-4 h-4 fill-current" />
            Subscribe on YouTube for more videos
          </a>
        </div>
      </div>
    </div>
  );
}
