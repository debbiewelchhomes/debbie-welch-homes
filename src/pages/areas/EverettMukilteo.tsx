import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-everett.jpg";

const EverettMukilteo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Living in Everett & Mukilteo, WA | Homes for Sale | Debbie Welch Homes"
        description="Thinking about buying in Everett or Mukilteo? An honest neighborhood-by-neighborhood breakdown of Snohomish County's largest city and one of Puget Sound's most beautiful waterfronts."
        canonical="/areas/everett-mukilteo"
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
            aria-label="Everett Washington marina with sailboats and historic building on Port Gardner Bay"
          />
          <div className="container mx-auto px-4 text-center py-32 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p
                className="font-script text-5xl md:text-7xl text-white mb-4"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
              >
                Everett & Mukilteo
              </p>
              <p
                className="font-heading text-xl md:text-2xl text-white max-w-2xl mx-auto"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
              >
                Snohomish County's largest city is reinventing its waterfront and downtown - and Mukilteo has always
                been one of the most beautiful spots on Puget Sound.
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
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">Two very different places…</p>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">Everett & Mukilteo, WA</h1>
              <p className="text-foreground text-lg leading-relaxed">
                These two communities sit side by side on the water but feel completely different. Everett is a real
                city - layered, complex, with older neighborhoods that have deep roots and new energy coming into the
                downtown and waterfront. Mukilteo is smaller, quieter, and built around one of the most genuinely
                beautiful stretches of Puget Sound shoreline in the county. Both are worth understanding in detail
                before you buy, because the range within each - neighborhood to neighborhood, block to block in some
                cases - is wider than almost anywhere else we serve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Everett Neighborhoods */}
        <section className="py-16 md:py-24 bg-warm-bg">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">The honest breakdown…</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8">Everett's Neighborhoods</h2>

              <div className="space-y-8 text-foreground text-base leading-relaxed">
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    North Everett, Bayside & Port Gardner
                  </h3>
                  <p>
                    Where the momentum is right now. Colby Avenue downtown is in the middle of a real revitalization -
                    new restaurants, new businesses, Main Street designation since 2021. The Port of Everett's
                    Waterfront Place has become a genuine destination with Restaurant Row along the marina esplanade -
                    10 restaurants including Tacos and Beer, South Fork Baking Co., Tapped Public House and more along
                    the waterfront deck. The homes near Howarth Park along the bluffs are some of the most impressive in
                    the county - craftsman and colonial revival architecture from the early 1900s, sweeping views of
                    Puget Sound and the Olympic Mountains. A newer generation of buyers is snapping up these homes and
                    putting real work into them, and it shows. Forest Park is nearby: 197 acres of old-growth forest
                    with trails and a swimming pool - one of those places locals love and visitors never find.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">Northwest Everett</h3>
                  <p>
                    Historic charm, walkability, Grand Avenue Park views, Scuttlebutt Brewing, and Everett Community
                    College nearby. Solid established neighborhood with real character.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">Silver Lake</h3>
                  <p>
                    Everett's most suburban feel - family-friendly, parks, good schools, homes around $650-700K. Strong
                    Boeing and commuter presence. Good entry point into the city.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">Boulevard Bluffs</h3>
                  <p>
                    Some of the best views in the city - Puget Sound, the Olympics, Japanese Gulch Conservation Area
                    trails nearby, and highly rated Mukilteo Elementary in the school zone.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">Lowell & the Snohomish River</h3>
                  <p>
                    Quieter, more affordable, historic. The Lowell Riverfront Park trail runs along the river where the
                    Snohomish meets the sloughs and wetlands of the delta. Water is always close in Everett - the river,
                    Union Slough, Port Gardner Bay, Possession Sound. It shapes how the city feels in ways that are hard
                    to describe until you've spent time here.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">South Everett & Casino Road</h3>
                  <p>
                    This is where we want to look carefully at specific streets and blocks before committing. The range
                    here is wide - some solid neighborhoods, some that need more scrutiny. Homework matters more here
                    than anywhere else in Everett.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="py-16 md:py-24 bg-background">
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
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">Why buyers choose it</h3>
                  <ul className="space-y-3 text-foreground text-base">
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Boeing</strong> - the largest building in the world by volume is here. Tens of thousands
                        of direct and supply chain jobs in the county.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Naval Station Everett</strong> - opened 1994, one of the most modern naval bases in the
                        US. Roughly 3,100 sailors homeported here, steady housing demand.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Waterfront revitalization momentum</strong> - Restaurant Row, Port Gardner Bay marina,
                        new stadium coming downtown next to Angel of the Winds Arena.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Angel of the Winds Arena</strong> - Everett Silvertips WHL hockey, concerts, major
                        events year-round.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Forest Park</strong> - 197 acres of old-growth forest inside the city limits. Trails,
                        picnic areas, swimming pool.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Providence Regional Medical Center</strong> - major healthcare employer, expanded
                        significantly in 2025.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Most urban amenities</strong> in Snohomish County - food, entertainment, transit,
                        healthcare all in one city.
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
                        <strong>South Everett and Casino Road</strong> - neighborhood quality varies significantly. Look
                        carefully at specific streets before committing.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>I-5 corridor traffic</strong> is real. Southbound to Seattle during peak hours is a
                        commitment.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Parts of downtown are still mid-transition</strong> - the revitalization is real but
                        it's not finished.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>Mukilteo view homes</strong> command a significant premium. Budget accordingly if
                        waterfront is the goal.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-16 md:py-24 bg-warm-bg">
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
                <div className="bg-background p-6 rounded-lg">
                  <p className="font-heading text-2xl font-bold text-secondary mb-1">113,000+</p>
                  <p className="text-foreground text-sm">Everett population - largest city in Snohomish County</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <p className="font-heading text-2xl font-bold text-secondary mb-1">~$565K</p>
                  <p className="text-foreground text-sm">Everett median home price (varies widely by neighborhood)</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <p className="font-heading text-2xl font-bold text-secondary mb-1">3,100</p>
                  <p className="text-foreground text-sm">Sailors homeported at Naval Station Everett</p>
                </div>
              </div>

              <h3 className="font-heading text-xl font-bold text-primary mb-3">Everett food & drink</h3>
              <p className="text-foreground text-base leading-relaxed mb-6">
                The scene reflects the city's genuine diversity. Vietnamese, Mexican, Chinese, Filipino, Italian -
                immigrant-owned restaurants throughout the city make Everett one of the most interesting places to eat
                in the county. Craft breweries and taprooms have taken hold alongside wine bars and cocktail bars
                following the downtown revitalization energy. Tacos and Beer on the waterfront is a local favorite.
                Nothing overpriced or pretentious.
              </p>

              <h3 className="font-heading text-xl font-bold text-primary mb-3">Coming soon: Downtown stadium</h3>
              <p className="text-foreground text-base leading-relaxed mb-6">
                The city unanimously approved a new multipurpose stadium just east of Angel of the Winds Arena in late
                2024 - groundbreaking targeted for early 2026. New home for the Everett AquaSox (Seattle Mariners High-A
                affiliate, 40 years in Everett) and potentially professional soccer. Right next to Everett Station and
                the future light rail terminus.
              </p>

              <h3 className="font-heading text-xl font-bold text-primary mb-3">Who buys here</h3>
              <p className="text-foreground text-base leading-relaxed">
                Boeing and aerospace workers, military families (Naval Station Everett), healthcare workers, buyers
                wanting urban amenities without Seattle prices, remote workers needing transit access, and buyers who
                want more city than the rest of Snohomish County offers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mukilteo Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">A town on the Sound…</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8">Mukilteo</h2>

              <div className="text-foreground text-base leading-relaxed space-y-5">
                <p>
                  Mukilteo is 21,000 people on a spectacular stretch of shoreline. The 1906 lighthouse at Lighthouse
                  Park is on the National Register of Historic Places - the park itself has over 1,000 feet of
                  sand-and-gravel beach, fire pits, picnic areas, a boat launch, and unobstructed views across
                  Possession Sound to Whidbey Island. You can watch ferries slide past, spot sea lions on the rocks, and
                  stay until the summer evenings stretch long. It genuinely doesn't get old.
                </p>
                <p>
                  The Washington State Ferry to Clinton on Whidbey Island runs from the terminal right next door -
                  commuter and recreational both. Ivar's Mukilteo Landing has been on the waterfront next to the ferry
                  dock since the 1930s: fresh Dungeness crab, fish and chips, outdoor deck, ferries sliding past the
                  window. Diamond Knot Brewery is nearby. The city has plans for a promenade connecting the entire
                  waterfront end to end.
                </p>
                <p>
                  The Sounder commuter rail station connects directly to King Street Station in Seattle - a genuinely
                  good option if you're commuting south. Homes with water views command a premium. The Mukilteo School
                  District is strong. The community is tight-knit and quiet. For most errands you're heading into
                  Everett - Mukilteo is small by design. For buyers who want Puget Sound waterfront at a price point
                  below King County, it deserves a serious look.
                </p>
              </div>
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
                Homes for Sale in Everett & Mukilteo
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                Browse current listings or reach out and I'll put together a custom search by neighborhood. Knowing
                which part of Everett matters - I'll help you focus on the right areas for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8" asChild>
                  <a
                    href="https://debbiewelch.exprealty.com/index?advanced=1&display=Snohomish&areas%5B%5D=county:Snohomish:wa&beds=0&baths=0&min=0&max=100000000&minacres=0&maxacres=50000&minfootage=0&maxfootage=30000&walkscore=&yearbuilt=0&types%5B%5D=2&types%5B%5D=3&types%5B%5D=1&sortby=listings.listingdate+DESC&ppc=Loveable+Website&addht=LoveableWebsite&agency_photos=&view_timing=2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Search Everett & Mukilteo Homes
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8"
                  asChild
                >
                  <Link to="/contact">Ask Me About This Area</Link>
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

export default EverettMukilteo;
