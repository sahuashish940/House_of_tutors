import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/TestimonialSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <Footer />

    </div>
  );
}
