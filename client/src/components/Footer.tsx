/*
 * Design: "Cosmic Classroom" — Minimal dark footer with grid-dot pattern
 */
import { ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Videos", href: "#videos" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const resources = [
  { label: "Vectors DPPs", href: "#courses" },
  { label: "EM Induction DPPs", href: "#courses" },
  { label: "Capacitor DPPs", href: "#courses" },
  { label: "Study Material", href: "#courses" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5">
      {/* Grid dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative z-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-[#0B1120] text-sm" style={{ fontFamily: "var(--font-display)" }}>
                P
              </div>
              <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Physicsaholics
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Master IIT JEE & NEET Physics with Prateek Jain Sir. Concept-first approach to build deep understanding.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "▶", url: "https://www.youtube.com/@IITJEENEET" },
                { icon: "📷", url: "https://www.instagram.com/physicsaholics/" },
                { icon: "✈", url: "https://t.me/physicsaholics" },
                { icon: "🌐", url: "https://www.physicsaholics.com" },
              ].map((item, i) => (
                <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-sm hover:bg-amber-500/10 transition-colors cursor-pointer">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              Courses
            </h4>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              Start Learning
            </h4>
            <p className="text-sm text-slate-400 mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Join thousands of students who have transformed their physics understanding.
            </p>
            <a
              href="https://www.youtube.com/@IITJEENEET?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-[#0B1120] hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-white/5">
          <p className="text-xs text-slate-600" style={{ fontFamily: "var(--font-mono)" }}>
            © {new Date().getFullYear()} Physicsaholics by Prateek Jain. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-white/10 text-slate-500 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
