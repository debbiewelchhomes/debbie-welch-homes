import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import calmInterior from "@/assets/calm-interior.jpg";

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote: "We were overwhelmed at the idea of selling the home we had lived in for 25+ years. Debbie broke everything down into small steps, gave us honest feedback without judgment, and kept us calm through every curveball. We ended up with a smooth sale and a downsized home that actually fits this season of life.",
      author: "Karen & Mike S., Lake Stevens downsizers"
    },
    {
      quote: "Moving to Snohomish County for a new duty station felt impossible until Debbie stepped in. She sent video walkthroughs, explained neighborhoods in plain language, and helped us make a smart offer from out of state. By the time we arrived, it felt like we already knew the area.",
      author: "The R. family, military relocation"
    },
    {
      quote: "As first-time buyers we had a lot of questions and zero idea where to start. Debbie never made us feel silly for asking things twice. She laid out the numbers, pros and cons, and next steps so clearly that we actually enjoyed the process instead of stressing through it.",
      author: "Jenna & Alex P., first-time buyers in Marysville"
    }
  ];

  return (
    <section 
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${calmInterior})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="font-script text-3xl md:text-5xl text-secondary mb-4" aria-hidden="true">
                  client stories…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
                  What my clients are saying
                </h2>
                <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                  Here is what it feels like to work together from the people who have actually done it — downsizers, military families, and first-time buyers all over Snohomish County.
                </p>
              </div>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="p-6 md:p-8">
                        <blockquote className="text-lg md:text-xl leading-relaxed text-foreground mb-6 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="text-base md:text-lg font-medium text-secondary">
                          – {testimonial.author}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 md:-left-12" />
                <CarouselNext className="right-0 md:-right-12" />
              </Carousel>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
