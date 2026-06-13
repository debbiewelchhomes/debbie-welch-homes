import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const LakeStevens = () => {
  const introRef = useRef(null);
  const lakeRef = useRef(null);
  const loveRef = useRef(null);
  const schoolsRef = useRef(null);
  const lifeRef = useRef(null);
  const buyersRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const lakeInView = useInView(lakeRef, { once: true, margin: "-100px" });
  const loveInView = useInView(loveRef, { once: true, margin: "-100px" });
  const schoolsInView = useInView(schoolsRef, { once: true, margin: "-100px" });
  const lifeInView = useInView(lifeRef, { once: true, margin: "-100px" });
  const buyersInView = useInView(buyersRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
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
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-warm-bg bg-cover bg-center">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 text-center py-32 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-script text-5xl md:text-7xl text-white mb-4 drop-shadow-lg">
                Lake Stevens
              </p>
              <p className="font-heading text-xl md:text-2xl text-white/90 drop-shadow max-w-2xl mx-auto">
                A real lake town with a real community - and schools that make buyers drive an extra twenty minutes without blinking.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={introRef}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                I know this town…
              </p>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8">
                Lake Stevens, WA - The Honest Version
              </h1>

              <div className="text-foreground text-lg leading-relaxed space-y-5">
                <p>
                  I lived in the Soper Hill area of northwest Lake Stevens for about ten years. I know what the traffic looks like on a Monday morning, where the hidden parking is at the Farmer's Market, and which parks fill up first on a hot July weekend. This isn't a generic overview I pulled from a city website. It's what I actually know from living here.
                </p>
                <p>
                  Lake Stevens has changed a lot in the last decade. It's grown - a lot, honestly - but it's held onto something that a lot of growing towns lose. There's still a real sense of place here. The lake is genuinely central to how people spend their summers, not just a selling point on a listing. The community shows up for each other in ways that still surprise me.
                </p>
                <p>
                  It's not perfect. The commute is real. Some parts of town feel more like suburban sprawl than small-town character. But for the right buyer, it's a genuinely great place to live - and I'll tell you honestly if it fits your situation or not.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Lake Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={lakeRef}
              initial="hidden"
              animate={lakeInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                The actual lake…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8">
                About the Lake Itself
              </h2>

              <div className="text-foreground text-lg leading-relaxed space-y-5">
                <p>
                  The lake is about 1,000 acres and most of the shoreline is private - so if you're not buying a lakefront home, you're using the public access points, of which there are several good ones. The city maintains four main parks on the water: Lundeen Park, North Cove Park, Davies Beach, and Sunset Beach Park, plus the North Lakeshore Swim Beach area.
                </p>
                <p>
                  Boat launches are at North Cove and Davies Beach - both two-lane launches with docks and paid parking. Lundeen has a sandy beach, dock, playground, and basketball court - it's the go-to with kids. North Cove is right downtown, walkable to coffee and the Mill area. Davies is on the west shore with a good swim area and two launches, one for motorized boats and one for non-motorized. Both Lundeen and North Cove went through major renovations in recent years and the upgrades show.
                </p>
                <p>
                  On the water itself: swimming, boating, fishing (rainbow trout stocked regularly, yellow perch year-round), water skiing, jet skis - it's an active lake, not a quiet one. Summer weekends get busy. Parking fills up. That's just the reality. But it's a genuinely fun lake and that access is a real part of what you're paying for when you buy here.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Love It / Might Not Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={loveRef}
              initial="hidden"
              animate={loveInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-12 text-center">
                The Honest Pros and Cons
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
                    Why You'll Love It
                  </h3>
                  <ul className="space-y-4 text-foreground">
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>The school district. Lake Stevens is ranked #1 in Snohomish County by Niche with an A- rating. Families specifically move here for it - and it genuinely shows in the community.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>A real lake with real public access. Four parks, two boat launches, swimming, fishing, boating. Summer here has a rhythm to it that's hard to find at this price point.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>Two distinct town personalities: the east side has the revitalized old downtown, the Mill complex, North Cove Park, Lundeen, local restaurants, a Farmer's Market, and Aquafest. The west side along Highway 9 (Frontier Village area) has Costco and larger box stores for the practical stuff.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>More house for the money than most of western Washington at a comparable quality of life. Median home prices around $680-715K, with neighborhoods that feel established and well-kept.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>Community events that people actually show up for - Aquafest, holiday markets, the Farmer's Market, festivals at the Mill. It doesn't feel like a town that's just going through the motions.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
                    What to Think About First
                  </h3>
                  <ul className="space-y-4 text-foreground">
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>The commute is real. Snohomish County's main north-south routes are I-5 and Highway 9, with US Route 2 heading east toward Monroe and the passes. Boeing traffic, the US 2 trestle - if you're heading south to Seattle or east to the Eastside, drive your actual commute route at actual commute time before you buy.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>It's grown fast, and some of that growth is visible. Parts of town - especially the western corridor - feel suburban in the way that fast-growing towns do. If you're looking for walkability or a dense neighborhood feel, this probably isn't your place.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>The lake is great, but it's not private. If you're not on the water, summer access means public parks and parking fees. Worth knowing going in.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold mt-1">•</span>
                      <span>Further from the I-5 corridor than Marysville or Everett. The tradeoff in beauty and price is real, but so is the extra distance if your job pulls you toward the freeway.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Schools Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={schoolsRef}
              initial="hidden"
              animate={schoolsInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                Worth knowing…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8">
                The Schools
              </h2>

              <div className="text-foreground text-lg leading-relaxed space-y-5">
                <p>
                  The Lake Stevens School District is ranked #1 in Snohomish County by Niche with an A- rating, and 24th out of 247 districts statewide by SchoolDigger. That's not marketing - those are real numbers, and families who've done their homework know it.
                </p>
                <p>
                  Lake Stevens Senior High School performs above state average in both English Language Arts and Math, with a four-year graduation rate consistently in the 82-89% range - higher than the state average. Five district schools were recognized by the Washington State Board of Education in the 2024-25 school year for student achievement and growth. Elementary standouts include Stevens Creek and Glenwood.
                </p>
                <p>
                  This is one of the main reasons families from Boeing, tech, and healthcare are making the commute from Lake Stevens rather than buying closer to work. The school district is genuinely one of the strongest selling points in this part of the county - and it's been consistent, not just a flash in the rankings.
                </p>
                <div className="mt-6">
                  
                    href="https://www.lkstevens.wednet.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-4 bg-background rounded-lg border border-border hover:border-secondary transition-colors text-foreground hover:text-secondary font-medium"
                  >
                    Lake Stevens School District →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Life Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={lifeRef}
              initial="hidden"
              animate={lifeInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                Where to eat, gather…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8">
                Local Life in Lake Stevens
              </h2>

              <div className="text-foreground text-lg leading-relaxed space-y-5">
                <p>
                  The downtown east side has quietly become a real destination. Francisco's for Mexican food. LJ's for a neighborhood spot. Fuente de Cafe for good coffee. Lake Stevens Brewery and The Rustic Cork have added a newer, livelier dimension to the local food and drink scene. Food trucks have become a regular presence in the warmer months. Nothing fancy, nothing trying too hard - just good local options that didn't exist ten years ago.
                </p>
                <p>
                  The Mill on Lake Stevens is the anchor of the downtown waterfront - a revitalized historic complex that hosts the Farmer's Market, Aquafest (the big summer festival on the lake), holiday markets, and other community events throughout the year. North Cove Park and Lundeen Park both got significant overhauls in recent years and are genuinely beautiful now.
                </p>
                <p>
                  For the practical day-to-day stuff - groceries, hardware, errands - the Frontier Village area on the Highway 9 west corridor has Costco and most of the larger retailers you'd need. It's not charming, but it's convenient.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who Buys Here Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <motion.div
              ref={buyersRef}
              initial="hidden"
              animate={buyersInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                Who lands here…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-8">
                Who's Buying in Lake Stevens
              </h2>

              <div className="text-foreground text-lg leading-relaxed space-y-5">
                <p>
                  Lake Stevens tends to attract buyers who've done the math and decided the tradeoff is worth it. The median household income here is around $122,000 and the population is growing fast - about 24% from 2019 to 2024, with projections pushing toward 44,000 residents by 2026.
                </p>
                <p>
                  The biggest buyer profiles I see: families moving north from King County who've been priced out of comparable neighborhoods closer to work. Tech workers - especially from Microsoft and Amazon on the Eastside - who want more house and a better school district than their budget buys closer in. Boeing employees from the Everett plant who want a real community feel without going too far from work. Healthcare workers. Remote workers who can absorb the commute because they're not making it every day.
                </p>
                <p>
                  What they have in common: they're choosing quality of life and school district over commute convenience. Most of them have run the numbers and decided that the drive is the price of admission for what Lake Stevens offers. That calculation is real - and it's worth making honestly before you commit.
                </p>
                <p>
                  If you're wondering whether Lake Stevens makes sense for your situation - your commute, your budget, your priorities - that's exactly the kind of conversation I'm happy to have before you start touring homes.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Homes For Sale Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ctaRef}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="font-script text-3xl md:text-5xl text-secondary mb-4">
                Ready to look…
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
                Homes for Sale in Lake Stevens
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Browse current listings in Lake Stevens - or reach out and I'll put together a custom search based on what you're actually looking for. I know the neighborhoods here well enough to tell you which ones to look at first.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8" asChild>
                  
                    href="https://debbiewelch.exprealty.com/index?advanced=1&display=Snohomish&areas%5B%5D=county:Snohomish:wa&beds=0&baths=0&min=0&max=100000000&minacres=0&maxacres=50000&minfootage=0&maxfootage=30000&walkscore=&yearbuilt=0&types%5B%5D=2&types%5B%5D=3&types%5B%5D=1&sortby=listings.listingdate+DESC&ppc=Loveable+Website&addht=LoveableWebsite&agency_photos=&view_timing=2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Search Lake Stevens Homes
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8" asChild>
                  <Link to="/contact">
                    Ask Me About Lake Stevens
                  </Link>
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