import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/area-hero-lake-stevens.webp";

const LakeStevens = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Living in Lake Stevens, WA | Homes for Sale | Debbie Welch Homes"
        description="Thinking about buying a home in Lake Stevens, WA? A lifelong local's honest take on the lake, the schools, the commute, and what daily life actually looks like here."
        canonical="/areas/lake-stevens"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Dock and pier extending over Lake Stevens with boats and an evergreen treeline in Lake Stevens, Washington"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center" }}
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
                Lake Stevens
              </p>
              <p
                className="font-heading text-xl md:text-2xl text-white max-w-2xl mx-auto"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
              >
                A real lake town with a real community and schools that make buyers drive an extra twenty minutes
                without blinking.
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
              <p className="eyebrow mb-4">I know this town…</p>
              <h1 className="font-heading h-section text-primary mb-6">Lake Stevens, WA</h1>
              <p className="text-foreground text-lg leading-relaxed">
                I lived in the Soper Hill area of northwest Lake Stevens for about ten years. I know the Monday morning
                traffic, where the hidden parking is at the Farmer's Market, and which parks fill up first on a hot July
                weekend. Lake Stevens has grown fast but held onto something real. The lake is central to summer life
                here, the school district is the strongest in the county, and the commute is honest work. Great fit for
                the right buyer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-6xl mx-auto">
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
                        <strong>School options are an important part of many buyers' decisions.</strong> Lake Stevens
                        School District serves much of the city. Because programs and boundaries can change, compare
                        the district's current information with the needs that matter to your household.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>School district boundaries here are not as simple as the city limits suggest.</strong>{" "}
                        Most of Lake Stevens falls within Lake Stevens School District, and part of the southeast edge
                        of the city falls into Snohomish School District instead. It also runs the other direction:
                        some Marysville neighborhoods, including parts of Whiskey Ridge and Soper Hill, are served by
                        Lake Stevens School District. District lines simply do not follow city limits here. If a
                        specific district matters to you, we will look at it early, and you will want to confirm any
                        particular address with the district's own boundary locator before you write an offer.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>A real lake with real access.</strong> Four public parks, two boat launches, swimming,
                        fishing, water skiing, jet skis.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Some neighborhoods carry their own private lake access through the HOA.</strong> This is
                        separate from the four public parks. It isn't something you'll find by browsing listings. It is
                        the kind of detail that comes from knowing the city's micro-neighborhoods, not just the big
                        picture.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>More house for the money.</strong> Median around $680-715K with established
                        neighborhoods and room to spread out.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Two distinct town personalities.</strong> East side: revitalized downtown, the Mill,
                        local restaurants, Farmer's Market, Aquafest. West side (Frontier Village): Costco and big box
                        for the practical stuff.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Real community events.</strong> Aquafest, holiday markets, and the Farmer's Market are
                        community events where people actually show up.
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
                        <strong>The commute is real.</strong> I-5, Hwy 9, and US Route 2 are your main routes. Boeing
                        traffic and the US 2 trestle. Drive your actual commute at actual commute time before you buy.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>It's grown fast.</strong> The western corridor feels suburban. If walkability is
                        important, this probably isn't your place.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>The lake is public, not private.</strong> Access is excellent, but summer means crowds and
                        parking fees at the parks.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Further from I-5</strong> than Marysville or Everett. The beauty-and-price tradeoff is
                        real, but so is the distance.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Quick Facts</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center mb-10">
                <div className="bg-warm-bg p-6 rounded-lg">
                  <p className="font-heading text-2xl font-bold text-secondary mb-1">Local</p>
                  <p className="text-foreground text-sm">District information and boundary tools available</p>
                </div>
                <div className="bg-warm-bg p-6 rounded-lg">
                  <p className="font-heading text-2xl font-bold text-secondary mb-1">~$695K</p>
                  <p className="text-foreground text-sm">Median home price</p>
                </div>
                <div className="bg-warm-bg p-6 rounded-lg">
                  <p className="font-heading text-2xl font-bold text-secondary mb-1">4 parks</p>
                  <p className="text-foreground text-sm">Public lake access (2 boat launches)</p>
                </div>
              </div>

              <h3 className="font-heading text-xl font-bold text-primary mb-3">Local favorites</h3>
              <p className="text-foreground text-base leading-relaxed mb-6">
                Francisco's · LJ's · Fuente de Cafe · Lake Stevens Brewery · The Rustic Cork · The Mill complex ·
                Aquafest · Farmer's Market
              </p>

              <h3 className="font-heading text-xl font-bold text-primary mb-3">Housing and Location Fit</h3>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Lake Stevens offers established neighborhoods, newer construction, lake access, and a suburban setting
                east of I-5. Buyers often compare the amount of space and recreation available here with commute times,
                school boundaries, and access to Everett, the Eastside, and Seattle.
              </p>

              <a
                href="https://www.lkstevens.wednet.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-secondary hover:underline font-medium text-sm"
              >
                Lake Stevens School District →
              </a>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-warm-bg">
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
                Homes for Sale in Lake Stevens
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                Browse current listings or reach out and I'll put together a custom search. I know the neighborhoods
                well enough to tell you which ones to look at first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8" asChild>
                  <a
                    href="https://debbiewelch.exprealty.com/index?advanced=1&areas%5B%5D=city%3ALake+Stevens%3Awa&baths=0&beds=0&display=Lake+Stevens&max=100000000&maxacres=50000&maxfootage=30000&min=0&minacres=0&minfootage=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Search Lake Stevens Homes
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8"
                  asChild
                >
                  <Link to="/contact">Ask Me About Lake Stevens</Link>
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

export default LakeStevens;
