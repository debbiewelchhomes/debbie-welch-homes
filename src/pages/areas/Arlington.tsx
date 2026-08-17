import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/area-hero-arlington.webp";

const searchUrl =
  "https://debbiewelch.exprealty.com/index?advanced=1&areas%5B%5D=city%3AArlington%3Awa&baths=0&beds=0&display=Arlington&max=100000000&maxacres=50000&maxfootage=30000&min=0&minacres=0&minfootage=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3";

const Arlington = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title={pageSEO.areas.arlington.title}
        description={pageSEO.areas.arlington.description}
        canonical="/areas/arlington"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Downtown Arlington storefronts and American flags in Arlington, Washington"
            width={1672}
            height={941}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 55%" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/15"
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 text-center section relative z-10">
            <p className="eyebrow mb-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              Arlington
            </p>
            <p
              className="font-heading text-xl md:text-2xl text-white max-w-2xl mx-auto"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
            >
              A traditional downtown, a working airport and industrial district, and rural edges that begin
              sooner than most buyers expect.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-heading h-section text-primary mb-6">Buying or Selling in Arlington, WA</h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                Arlington sits in the north end of Snohomish County, along the Stillaguamish River and just off
                I-5. The practical thing to understand is that Arlington is not one single feel. Downtown
                Arlington has an older, walkable main street. Smokey Point, at the freeway, is newer, more
                retail-oriented, and reads very differently. Head a few minutes past either one and you are into
                more rural property with different rules and different costs.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                The city also has an active municipal airport with an industrial and manufacturing district
                around it, which shapes employment, traffic patterns, and what you hear and see from certain
                neighborhoods. None of that is good or bad on its own. It just means the address matters more
                here than the city name does.
              </p>
            </div>
          </div>
        </section>

        {/* Balanced */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-heading h-section text-primary mb-10 text-center">An Honest Look</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Why buyers consider it</h3>
                <ul className="space-y-3 text-foreground text-base">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>
                      A real downtown with a defined main street, rather than only newer commercial development.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>
                      Trail and park access, including the Centennial Trail, the Airport Trail, Centennial Park,
                      and a number of smaller city parks.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>
                      A wide range of housing types, from established in-town homes to newer developments to
                      more rural properties outside the city.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Direct I-5 access at Smokey Point for buyers who travel south for work.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-4">What to think about</h3>
                <ul className="space-y-3 text-foreground text-base">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>
                      Downtown, Smokey Point, and rural-edge properties are genuinely different living
                      experiences. Visit all three before deciding what you want.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>
                      Some properties sit inside city limits and some sit in unincorporated Snohomish County.
                      That affects permitting, services, and utilities.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>
                      The airport and surrounding industrial area are active. Worth understanding for any home
                      nearby.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>
                      Commute conditions vary by time of day and direction. Test your actual route before you
                      commit.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Housing and location */}
        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading h-section text-primary mb-6">Housing and Location Considerations</h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
              In-town Arlington tends toward established homes on smaller, platted lots with city water and
              sewer. Newer growth areas, particularly near Smokey Point, bring more recent construction and, in
              some cases, homeowner associations. Move outside the city and you may be looking at acreage, well
              or septic systems, private road agreements, or land-use designations that limit what you can build
              or add later.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              None of this is unusual for north county. It simply means the useful questions are
              address-specific: which jurisdiction the parcel is in, what utilities serve it, what the zoning
              allows, and whether the property has any easement or access conditions attached. I go through that
              with you before you write an offer, not after.
            </p>
          </div>
        </section>

        {/* Community */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading h-section text-primary mb-6">Parks, Trails, and Everyday Life</h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              The Centennial Trail runs through the area and is a genuine daily-use amenity for walking, running,
              and cycling. The Airport Trail adds a shorter local loop, and Centennial Park along with the city's
              other parks covers the everyday needs of playgrounds, fields, and open space. Downtown Arlington
              carries most of the local gathering places, while Smokey Point handles the bigger shopping runs.
            </p>
          </div>
        </section>

        {/* Due diligence */}
        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading h-section text-primary mb-6">Before You Write an Offer</h2>
            <ul className="space-y-3 text-foreground text-base">
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Confirm school assignment for the exact address with the district, not the listing.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  Verify utilities: city water and sewer, or well and septic, along with any inspection or
                  maintenance records.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  Check flood mapping near the river, plus any critical-area, easement, or HOA conditions.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Drive your commute at the hour you would actually be driving it.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading h-section text-primary mb-4">Homes for Sale in Arlington</h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed measure mx-auto mb-8">
              This search pulls live Arlington listings so you can get a feel for pricing and inventory. If you
              would like help reading what you are seeing, or a saved search set up for you, just ask.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={searchUrl} target="_blank" rel="noopener noreferrer">
                  Search Arlington Homes
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Ask Me About Arlington</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Arlington;
