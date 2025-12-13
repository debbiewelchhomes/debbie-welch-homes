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
      quote: "We found Debbie online and chose her because of the reviews - and we'd give her 10 stars if we could. Even with a 9-hour time difference (we were in Germany), she replied incredibly fast, did video walk-throughs, and helped us feel confident buying from afar. Her expertise was priceless.",
      attribution: "Vanessa G. - Lake Stevens (Relocation / long-distance)"
    },
    {
      quote: "This was my first time buying a home on my own, and I knew nothing going in. As a USAF Veteran using a VA loan in a hot sellers market, Debbie stayed calm, confident, and on top of everything. She helped me find a home I loved and could afford - and was a strong advocate the whole way.",
      attribution: "Lisa L. - Lake Stevens (USAF Veteran / VA loan)"
    },
    {
      quote: "We were living out of state and couldn't get back to Washington to prepare our home for sale. Debbie handled everything - selling unwanted items, helping pack, and staging. The result was a SOLD sign in two days with multiple offers over asking. She truly goes the extra mile.",
      attribution: "Pat D. - Lake Stevens (Out-of-state seller)"
    },
    {
      quote: "Debbie was outstanding and extremely professional - responsive, great communication, and excellent negotiation skills. She got our home sold in less than a month, and she even helped us pack our POD, clean the home, and handle dump and donation runs. I'd use Debbie again in a heartbeat.",
      attribution: "Kasey B. - Marysville (Seller)"
    },
    {
      quote: "We're so grateful for Debbie's work selling our home. Her market knowledge, attention to detail, and guidance on preparing the home were invaluable. Her marketing showcased the best features, and her support made the process feel seamless and manageable.",
      attribution: "Stacie F. - Stanwood (Navy Veteran)"
    },
    {
      quote: "Debbie was amazing through my first home-buying experience. She's patient, understanding, and genuinely caring. I wouldn't hesitate to have her as my realtor again.",
      attribution: "Issac M. - Marysville (US Navy)"
    },
    {
      quote: "Debbie was wonderful to work with throughout our home buying process. When we unexpectedly had to change markets to Eastern WA, she stayed supportive and connected us with an excellent agent there. We felt taken care of the whole way.",
      attribution: "Greg P. - Kennewick (Market change / referral support)"
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
                          – {testimonial.attribution}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 md:-left-12" aria-label="Previous testimonial" />
                <CarouselNext className="right-0 md:-right-12" aria-label="Next testimonial" />
              </Carousel>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
