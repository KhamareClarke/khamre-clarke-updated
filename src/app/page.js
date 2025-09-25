import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import BlogSlider from "./components/BlogSlider";
import StickyCTABar from "./components/StickyCTABar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-0 mx-auto px-4 sm:px-6 lg:px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <PricingSection />
        <BlogSlider />
        <EmailSection />
      </div>
      <Footer />
      <StickyCTABar />
    </main>
  );
}
