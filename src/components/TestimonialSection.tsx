import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import testimonialBg from "@/assets/testimonial-bg.jpg";

const testimonials = [
  {
    quote:
      "Debbie was outstanding and extremely professional - responsive, great communication, and excellent negotiation skills. She got our home sold in less than a month, and she even helped us pack our POD, clean the home, and handled dump and donation runs for us. I would use Debbie again and highly recommend her to anyone selling in Snohomish County.",
    attribution: "K. Bryar, Snohomish County (Veteran seller)",
  },
  {
    quote:
      "We found Debbie on the Internet and chose her because of the good reviews. I would give her 10 stars if possible - she was always a step ahead and treated the process like she was buying the house for herself. Even with a 9-hour time difference while we were in Germany, she managed to answer everything in time. She made videos of the properties and walked through them with us on video call. It can be stressful to buy blind, but she gave us the confidence to make the right decision without seeing the house ourselves. That kind of expertise was priceless.",
    attribution: "Vanessa Gerhard, Lake Stevens (PCS relocation from Germany)",
  },
  {
    quote:
      "Debbie is amazing! There are few people in the industry who are as caring, considerate, and collaborative. We worked with Debbie when the market took a turn downwards and we needed to sell our home and move for work. It was a very stressful time and Debbie was so kind, helpful, communicative, aggressive when we needed her to be, firm, and just incredible to work with. You definitely can't go wrong with Debbie.",
    attribution: "H. Hansen, Arlington (relocating seller, tough market)",
  },
  {
    quote:
      "We are currently living in another state and were not able to get back to Washington to prepare our home for sale. Debbie did everything - from selling unwanted items, to assisting with packing, to staging our home. The result was a SOLD sign in two days with multiple offers all over asking price. Debbie truly goes the extra mile. Her wonderful personality as well as knowledge of the real estate market make her a 5-star-plus Realtor.",
    attribution: "Pat Davis, Lake Stevens (out-of-state senior seller)",
  },
  {
    quote:
      "This was my first attempt at buying a home on my own and I knew absolutely nothing. Being a USAF Veteran using a VA loan during a hot sellers market didn't even phase her. She was so knowledgeable and caring, had a fantastic sense of humor, and was on top of everything for me. She was instrumental in getting me a last-minute tour of a home that ended up becoming my new home. She was a great advocate for me and she will be for you as well.",
    attribution: "L. Lawless, Lake Stevens (USAF Veteran, VA loan buyer)",
  },
  {
    quote:
      "Look no further and pick Debbie! She always exceeded my expectations - despite a 9-hour time difference and remote house-hunting and close - whether it was anticipating problems before they arose, expertly reacting to unusual situations, or just being the kind, friendly person she is. Debbie's zealousness, competence, foresight, and above-and-beyond research are a rarity these days. I cannot recommend her more highly.",
    attribution: "Austen Swaim (PCS relocation, VA loan)",
  },
  {
    quote:
      "We wanted to express our heartfelt gratitude for your exceptional work in selling our home. Your dedication, expertise, and unwavering support made all the difference. Your guidance on preparing our home for sale was invaluable, and your tireless commitment to negotiating on our behalf exceeded our expectations. Thank you for your professionalism, kindness, friendship, and for going above and beyond. We will gladly recommend you to anyone looking for a top-notch realtor.",
    attribution: "Stacie Filler, Stanwood (Veteran seller)",
  },
  {
    quote:
      "Debbie Welch was amazing to work with! She was very knowledgeable about the selling process and was able to answer all our questions in a professional and timely manner. We were able to sell our home quickly and got $60k over asking price! I would highly recommend Debbie if you're looking to sell your home.",
    attribution: "Shawn Frederick, Lake Stevens (seller, $60k over asking)",
  },
  {
    quote:
      "From the beginning Debbie was there to offer what I needed to sell my condo. As a senior citizen moving out of state she guided me through the process. It was stress free and helpful. Instantly had multiple cash offers. The staging was perfection. Escrow was over and done in record time. Would not hesitate to recommend with a 5-star rating.",
    attribution: "M. Cornell, Marysville (senior condo seller, out-of-state move)",
  },
  {
    quote:
      "Her attention to detail and proactive approach ensured that my property stood out and received the attention it deserved. Throughout the process, Debbie maintained open and transparent communication and kept me informed and reassured at all points. She went above and beyond to provide personalized guidance and support. I wholeheartedly recommend Debbie to anyone looking to sell their home with confidence.",
    attribution: "Sara Neuendorf, Lake Stevens (out-of-area seller)",
  },
  {
    quote:
      "My wife and I just closed on a home in Oak Harbor from thousands of miles away and Debbie made the process seamless. Fantastic, efficient, smart, professional, communicative, and trustworthy are just a few words for Debbie and the values she upholds. She will take care of you every step of the way. Thank you Debbie - we look forward to doing business with you again.",
    attribution: "Dustin Hoskins, Oak Harbor (military seller, remote close)",
  },
  {
    quote:
      "Debbie and her team are amazing people! My first time buying a house - and with her it for sure won't ever be my last. I wouldn't hesitate to have her be my realtor again. She is patient, understanding, very nice and caring. A perfect example of what you'd dream of in a realtor.",
    attribution: "I. Monroe (active military, first-time buyer)",
  },
];

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 7000,
      stopOnInteraction: true,
    }),
  );

  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${testimonialBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
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
                  In their own words…
                </p>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
                  What My Clients Are Saying
                </h2>
                <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                  Downsizers, military families, out-of-state sellers, first-time buyers - here's what working together
                  actually feels like.
                </p>
              </div>

              <Carousel
                opts={{ align: "center", loop: true }}
                plugins={[autoplayPlugin.current]}
                className="w-full max-w-4xl mx-auto"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="p-6 md:p-8 text-center">
                        <blockquote className="text-lg md:text-xl leading-relaxed text-foreground mb-6 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="text-base md:text-lg font-medium text-secondary">– {testimonial.attribution}</p>
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
