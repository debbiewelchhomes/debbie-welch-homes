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
import SEO from "@/components/SEO";
import { pageSEO, realEstateAgentSchema } from "@/data/seoData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        canonical="/"
        jsonLd={realEstateAgentSchema}
      />
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
