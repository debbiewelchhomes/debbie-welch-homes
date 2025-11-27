import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import RealTalkSection from "@/components/RealTalkSection";
import BrandPromiseSection from "@/components/BrandPromiseSection";
import FreeResourceSection from "@/components/FreeResourceSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import NeighborhoodsSection from "@/components/NeighborhoodsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <RealTalkSection />
        <BrandPromiseSection />
        <FreeResourceSection />
        <ServicesSection />
        <AboutSection />
        <NeighborhoodsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
