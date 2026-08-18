import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/area-hero-marysville.webp";

const Marysville = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Marysville Homes for Sale | Debbie Welch"
        description="Considering Marysville? A practical guide to its neighborhoods, daily life, commute routes, and the details that matter for your move."
        canonical="/areas/marysville"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[58vh] lg:min-h-[62vh] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Red barn framed by cherry blossoms and evergreen trees in Marysville, Washington"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 58%" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/10"
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 text-center section relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p
                className="eyebrow mb-4"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
              >
                Marysville
              </p>
              <p
                className="font-heading text-xl md:text-2xl text-white max-w-2xl mx-auto"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
              >
                My hometown is Snohomish County's strawberry city, still growing and still genuinely affordable for the
                right buyer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="eyebrow mb-4">My hometown…</p>
              <h1 className="font-heading h-section text-primary mb-6">Marysville, WA</h1>
              <p className="text-foreground text-lg leading-relaxed">
                Marysville is where I grew up, so this one's personal. It's one of the larger cities in this part of the
                county, second only to Everett until you head further south, with nearly 78,000 people and still climbing.
                Growth has pushed outward at the edges, especially east toward Whiskey Ridge, while infill development
                fills in closer to the established core. The older downtown still has real character if you know where
                to look, and it's typically one of the more affordable places to buy in the county.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                The Honest Pros and Cons
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-body text-2xl md:text-3xl font-semibold text-primary mb-5">Why Buyers Consider It</h3>
                  <ul className="space-y-3 text-foreground text-base">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Typically more affordable</strong> than Lake Stevens or Everett at a comparable size,
                        with direct I-5 access for the easiest commute in this part of the county.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Major Boeing commuter base.</strong> A large share of Marysville households commute to
                        the Everett Boeing plant. Affordability and easy I-5 access make it a popular choice for
                        aerospace workers.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>A real partnership with the Tulalip Tribes that goes beyond schools.</strong> The
                        Tulalip Tribes are the third-largest employer in Snohomish County, and the city and tribe
                        jointly operate the Greater Marysville Tulalip Chamber of Commerce, the only chamber of
                        commerce in the country that's a joint venture between a city and a sovereign nation. That
                        relationship shows up in shared economic development and a level of collaboration that's
                        genuinely unusual.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Whiskey Ridge is worth serious attention if school district matters to you.</strong>{" "}
                        This northwest growth area has added more than a thousand homes in recent years, and a
                        meaningful share of them fall within Lake Stevens School District boundaries rather than
                        Marysville's, even though they're inside Marysville city limits. If you want Lake Stevens
                        schools without Lake Stevens prices, this is worth exploring and confirming on any
                        specific home, since the boundary isn't always obvious from the address alone.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Well-equipped parks.</strong> Jennings Memorial Park has a fishing pond, multiple
                        playgrounds, sports fields, and 8 pickleball courts. Comeford Park downtown has a splash pad and
                        the city's signature water tower.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-body text-2xl md:text-3xl font-semibold text-primary mb-5">What to Think About First</h3>
                  <ul className="space-y-3 text-foreground text-base">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Growth has pushed outward fast,</strong> especially toward Whiskey Ridge, while infill
                        development continues closer to the core. The feel of the city shifts depending on which part
                        you're in.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>If buying on the Tulalip Indian Reservation,</strong> confirm whether the land is deeded
                        or leased before you fall for a house. Some homes are on land leased from the Tulalip Tribes
                        rather than owned outright, which affects financing, taxes, and resale. Not every lender
                        handles this, so it matters who you work with.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Shopping and Entertainment */}
        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Shopping & Entertainment
              </h2>

              <h3 className="font-heading text-xl font-bold text-primary mb-3">Shopping</h3>
              <p className="text-foreground text-base leading-relaxed mb-6">
                Costco and Lakewood Crossing anchor the retail corridor along I-5, with Best Buy and dozens of other
                stores and restaurants. Two Walmart Supercenters serve the city, including one on the Tulalip Indian Reservation,
                one near Whiskey Ridge. Cabela's and Seattle Premium Outlets are just minutes away.
              </p>

              <h3 className="font-heading text-xl font-bold text-primary mb-3">Entertainment</h3>
              <p className="text-foreground text-base leading-relaxed">
                The Tulalip Resort Casino and Tulalip Amphitheater regularly bring in major touring concerts and shows,
                solid entertainment access without leaving the area. The Strawberry Festival every June is Marysville's
                own signature event, alongside a summer Farmers Market downtown.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Housing and Location Fit */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Housing and Location Fit
              </h2>
              <p className="text-foreground text-lg leading-relaxed text-center">
                Marysville offers a range of established homes and newer construction with access to I-5, Highway 9,
                and major employers. Buyers often compare price, commute time, lot size, and school boundaries,
                especially in Whiskey Ridge and Soper Hill where some addresses are served by Lake Stevens School
                District.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow mb-4">Ready to look…</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Homes for Sale in Marysville
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                Browse current listings or reach out and I'll put together a custom search. This is my hometown. I know
                it well enough to tell you exactly which areas and school boundaries fit what you're looking for.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8" asChild>
                  <a
                    href="https://debbiewelch.exprealty.com/index?advanced=1&areas%5B%5D=city%3AMarysville%3Awa&baths=0&beds=0&display=Marysville&max=100000000&maxacres=50000&maxfootage=30000&min=0&minacres=0&minfootage=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Search Marysville Homes
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8"
                  asChild
                >
                  <Link to="/contact">Ask Me About Marysville</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Marysville;

