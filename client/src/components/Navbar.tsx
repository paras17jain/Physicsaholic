/*
 * Design: "Cosmic Classroom" — Dark Astro-Physics Aesthetic
 * Navbar: Glassmorphism sticky nav with amber accent on active states
 * Font: Space Grotesk for brand, DM Sans for links
 */
import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Videos", href: "#videos" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-[#0B1120] text-lg" style={{ fontFamily: "var(--font-display)" }}>
            P
          </div>
          <span className="text-lg font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
            Physicsaholics
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/learn"
            className="px-4 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300 rounded-lg hover:bg-cyan-500/5 flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Learn
          </Link>
          <a
            href="https://unacademy.com/@prateekjain"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-[#0B1120] hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Join Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/learn"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors rounded-lg hover:bg-cyan-500/5 flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Learn Hub
              </Link>
              <a
                href="https://unacademy.com/@prateekjain"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-[#0B1120] text-center"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
