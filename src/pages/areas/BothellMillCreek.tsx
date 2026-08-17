import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/area-hero-bothell-mill-creek.webp";

const searchUrl =
  "https://debbiewelch.exprealty.com/index?advanced=1&areas%5B%5D=city%3ABothell%3Awa&areas%5B%5D=city%3AMill+Creek%3Awa&baths=0&beds=0&display=Bothell%2C+Mill+Creek&max=100000000&maxacres=50000&maxfootage=30000&min=0&minacres=0&minfootage=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3";

const BothellMillCreek = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title={pageSEO.areas.bothellMillCreek.title}
        description={pageSEO.areas.bothellMillCreek.description}
        canonical="/areas/bothell-mill-creek"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Wooden pedestrian bridge over water in Bothell, Washington"
            width={1672}
            height={941}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 35%" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/15"
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 text-center section relative z-10">
            <p className="eyebrow mb-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              Bothell &amp; Mill Creek
            </p>
            <p
              className="font-heading text-xl md:text-2xl text-white max-w-2xl mx-auto"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
            >
              The south end of the county, where county lines and school district lines do not follow the
              mailing address.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-heading h-section text-primary mb-6">
                Buying or Selling in Bothell &amp; Mill Creek, WA
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                These two communities sit at the south end of Snohomish County, closest to Seattle, Bellevue,
                and the wider Eastside. The single most important practical detail here is that Bothell
                straddles King County and Snohomish County. Two homes on nearby streets can sit in different
                counties, with different taxes, different services, and different school district assignments.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Mill Creek is more consistent by comparison. It began as a planned golf-course community and
                still reads that way in its street layout, landscaping, and association structures. If you are
                comparing the two, you are usually comparing a planned, cohesive feel against Bothell's wider
                mix of older neighborhoods, newer infill, and a redeveloped downtown core.
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
                    <span><strong>Access toward employment centers in Everett, Seattle, Bellevue, and the Eastside from one general location.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Substantial public open space.</strong> Bothell manages roughly 400 acres of parkland and open space along with its trail systems.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Mill Creek has 11 city parks, nature trails including the North Creek Trail, and Mill Creek Town Center as a walkable retail and dining hub.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>A broad range of housing, from established homes to newer townhomes and condominiums.</strong></span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-4">What to think about</h3>
                <ul className="space-y-3 text-foreground text-base">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>The county question in Bothell is not academic.</strong> Confirm county, taxes, and services for the specific parcel.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>School assignment varies.</strong> Mill Creek is served by Everett Public Schools, while Bothell addresses may fall under Northshore or another district depending on location.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Traffic varies widely by corridor and time of day.</strong> No one can promise you a commute time.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Many neighborhoods carry homeowner associations.</strong> Read the dues, rules, and reserve documents before you are emotionally committed.</span>
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
              Because Bothell spans a county boundary and includes both older neighborhoods and newer infill,
              the same search can return very different properties. Some are inside city limits, some are in
              unincorporated areas, and jurisdiction affects permitting, utility providers, and what the tax
              bill looks like. Mill Creek's planned-community origins mean association governance is more
              common, which can be a benefit or a constraint depending on how you want to use your property.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              The reliable approach is to treat every listing as its own case: confirm the county, the taxing
              district, the utility providers, the association if there is one, and the school assignment for
              that exact address before you draw conclusions from the city name.
            </p>
          </div>
        </section>

        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-heading h-section text-primary mb-8 text-center">Practical Notes for Buyers and Sellers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Buyers</h3><p className="copy text-foreground"><strong>Check the parcel, not just the mailing address.</strong> County, school district, taxes, utilities, HOA rules, and commute routes can change within a short distance. For condos and townhomes, review the association budget, reserves, insurance, and meeting minutes before committing.</p></div>
              <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Sellers</h3><p className="copy text-foreground"><strong>Make the location differences easy to understand.</strong> Clear information about schools, county, commuting options, nearby trails, association details, and recent improvements helps buyers compare your home accurately with properties carrying the same city name.</p></div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading h-section text-primary mb-6">Parks, Trails, and Everyday Life</h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Bothell's parkland and trail network is a real part of daily life here, not just a line on a
              brochure. Mill Creek adds 11 city parks and nature trails, including the North Creek Trail, and
              Mill Creek Town Center gives the area a compact, walkable place to eat, shop, and meet people
              without getting in the car for everything.
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
                <span>
                  Verify school assignment directly with the district using the exact address, especially in
                  Bothell.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Confirm which county the parcel is in and what that means for taxes and services.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  Review HOA or condominium documents, dues, and reserves, plus utility providers and any
                  critical-area conditions.
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
            <h2 className="font-heading h-section text-primary mb-4">
              Homes for Sale in Bothell &amp; Mill Creek
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed measure mx-auto mb-8">
              This search pulls live Bothell and Mill Creek listings. If you would like help sorting out which
              county, district, or association a home falls under, that is exactly the kind of question to send
              me.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={searchUrl} target="_blank" rel="noopener noreferrer">
                  Search Bothell &amp; Mill Creek Homes
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Ask Me About Bothell &amp; Mill Creek</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BothellMillCreek;
