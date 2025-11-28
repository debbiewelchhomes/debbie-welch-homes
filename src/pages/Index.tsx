import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BufferSection from "@/components/BufferSection";
import RealTalkSection from "@/components/RealTalkSection";
import BrandPromiseSection from "@/components/BrandPromiseSection";
import FreeResourceSection from "@/components/FreeResourceSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import NeighborhoodsSection from "@/components/NeighborhoodsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BufferSection />
        <RealTalkSection />
        <BrandPromiseSection />
        <FreeResourceSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialSection />
        <NeighborhoodsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
