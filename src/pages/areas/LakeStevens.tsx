import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lake-stevens.jpg";

const LakeStevens = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.1) 100%), url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Lake Stevens Washington dock and pier extending over the lake with boats and Pacific Northwest treeline"
          />
          <div className="container mx-auto px-4 text-center py-32 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p
                className="font-script text-5xl md:text-7xl text-white mb-4"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
              >
                Lake Stevens
              </p>
              <p
                className="font-heading text-xl md:text-2xl text-white max-w-2xl mx-auto"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
              >
                A real lake town with a real community - and schools that make buyers drive an extra twenty minutes
                without blinking.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">I know this town…</p>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">Lake Stevens, WA</h1>
              <p className="text-foreground text-lg leading-relaxed">
                I lived in the Soper Hill area of northwest Lake Stevens for about ten years - I know the Monday morning
                traffic, where the hidden parking is at the Farmer's Market, and which parks fill up first on a hot July
                weekend. Lake Stevens has grown fast but held onto something real. The lake is central to summer life
                here, the school district is the strongest in the county, and the commute is honest work. Great fit for
                the right buyer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="py-16 md:py-24 bg-warm-bg">
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
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">Why buyers choose it</h3>
                  <ul className="space-y-3 text-foreground text-base">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>#1 school district in Snohomish County</strong> (Niche A-, 24th statewide). Families
                        specifically move here for it.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>School district boundaries here are not as simple as the city limits suggest.</strong>{" "}
                        Most of Lake Stevens falls within Lake Stevens School District, but the southeast edge of the
                        city actually falls into Snohomish School District instead. I know where these lines fall block
                        by block, which matters if a specific district is part of your decision.
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
                        <strong>Some neighborhoods carry their own private lake access through the HOA</strong> -
                        separate from the four public parks. This isn't something you'll find by browsing listings; it's
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
                        <strong>Real community events.</strong> Aquafest, holiday markets, the Farmer's Market - people
                        actually show up.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">What to think about first</h3>
                  <ul className="space-y-3 text-foreground text-base">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>The commute is real.</strong> I-5, Hwy 9, and US Route 2 are your main routes. Boeing
                        traffic, the US 2 trestle - drive your actual commute at actual commute time before you buy.
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
                        <strong>The lake is public, not private.</strong> Great access - but summer means crowds and
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
        <section className="py-16 md:py-24 bg-background">
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
                  <p className="font-heading text-2xl font-bold text-secondary mb-1">#1</p>
                  <p className="text-foreground text-sm">School district in Snohomish County (Niche)</p>
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

              <h3 className="font-heading text-xl font-bold text-primary mb-3">Who buys here</h3>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Families choosing school district over commute. Boeing and tech workers (Microsoft, Amazon) moving north
                from King County. Remote workers who don't commute daily. Healthcare workers. Buyers who've done the
                math and decided the tradeoff is worth it.
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
        <section className="py-16 md:py-24 bg-warm-bg">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">Ready to look…</p>
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
                    href="https://debbiewelch.exprealty.com/index?advanced=1&display=Snohomish&areas%5B%5D=county:Snohomish:wa&beds=0&baths=0&min=0&max=100000000&minacres=0&maxacres=50000&minfootage=0&maxfootage=30000&walkscore=&yearbuilt=0&types%5B%5D=2&types%5B%5D=3&types%5B%5D=1&sortby=listings.listingdate+DESC&ppc=Loveable+Website&addht=LoveableWebsite&agency_photos=&view_timing=2"
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
