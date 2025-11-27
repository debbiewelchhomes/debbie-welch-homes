import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";
import { motion } from "framer-motion";
const HeroSection = () => {
  return <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 parallax-section" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`
    }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center items-center justify-center min-h-[85vh] flex flex-row">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto">
          <p className="font-script text-4xl md:text-5xl lg:text-6xl mb-6" style={{
          color: '#6e808e'
        }}>
            Welcome home…
          </p>

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white mb-6">
            Helping You Home in Snohomish County
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Real estate guidance for downsizers, military families, and first time buyers who want less pressure and more clarity.
          </p>

          <div className="prose prose-lg text-white/90 mb-10 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              If you are like most of my clients, you do not need more hype — you need a clear plan, someone to translate the real estate speak, and a calm voice who will tell you the truth even when it is not convenient. That is the work I do every day for downsizers, military families, and first time buyers across Snohomish County.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6" asChild>
              <a href="https://cal.com/debbie-welch-t6p0dm" target="_blank" rel="noopener noreferrer">
                Book a Free Consult
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              Get the Downsizing Guide
            </Button>
          </div>

          <p className="text-sm text-white/80 max-w-2xl mx-auto">
            Serving Snohomish County and surrounding areas, including Arlington, Bothell & Mill Creek, Everett & Mukilteo, Lake Stevens, Marysville, Snohomish, and Stanwood & Camano.
          </p>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;