/*
 * Design: "Cosmic Classroom" — Dark Astro-Physics Aesthetic
 * Main page assembling all sections with smooth scroll behavior
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import VideosSection from "@/components/VideosSection";
import LearnCTASection from "@/components/LearnCTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <CoursesSection />
        <VideosSection />
        <LearnCTASection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
