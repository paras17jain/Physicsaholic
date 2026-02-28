/*
 * Design: "Cosmic Classroom" — Contact section with glassmorphism form
 * Split layout: info on left, form on right
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  { name: "YouTube", url: "https://www.youtube.com/@PhysicsaholicsbyPrateekJain", icon: "▶" },
  { name: "Instagram", url: "https://www.instagram.com/physicsaholics/", icon: "📷" },
  { name: "Telegram", url: "https://t.me/physicsaholics", icon: "✈" },
  { name: "Website", url: "https://www.physicsaholics.com", icon: "🌐" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px]" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-sm font-medium text-amber-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
              Get in Touch
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-amber-500 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Have a <span className="text-gradient-amber">Question?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Connect With Us
              </h3>
              <p className="text-slate-400 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Whether you have questions about courses, need guidance for your exam preparation, or want to join the Physicsaholics community — we're here to help.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>Kota, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>contact@physicsaholics.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                Follow Us
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#151D2E]/50 border border-white/5 hover:border-amber-500/20 hover:bg-amber-500/5 transition-all duration-300 group"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                      {link.name}
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-600 ml-auto" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#151D2E]/40 border border-white/5 backdrop-blur-sm space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all duration-300 outline-none"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all duration-300 outline-none"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all duration-300 outline-none"
                  style={{ fontFamily: "var(--font-body)" }}
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all duration-300 outline-none resize-none"
                  style={{ fontFamily: "var(--font-body)" }}
                  placeholder="Type your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-[#0B1120] hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
