import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/area-hero-snohomish.webp";

const searchUrl =
  "https://debbiewelch.exprealty.com/index?advanced=1&areas%5B%5D=city%3ASnohomish%3Awa&baths=0&beds=0&display=Snohomish&max=100000000&maxacres=50000&maxfootage=30000&min=0&minacres=0&minfootage=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3";

const Snohomish = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title={pageSEO.areas.snohomish.title}
        description={pageSEO.areas.snohomish.description}
        canonical="/areas/snohomish"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Historic brick storefronts in downtown Snohomish, Washington"
            width={1672}
            height={941}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 60%" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/15"
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 text-center section relative z-10">
            <p className="eyebrow mb-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              Snohomish
            </p>
            <p
              className="font-heading text-xl md:text-2xl text-white max-w-2xl mx-auto"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
            >
              A river town founded in 1859, with a National Historic District downtown and farmland just past
              the edges.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-heading h-section text-primary mb-6">Buying or Selling in Snohomish, WA</h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                The city of Snohomish sits east of Everett along the Snohomish River, near the Pilchuck River
                and Blackmans Lake, with agricultural land surrounding much of it. Founded in 1859, it has a
                National Historic District downtown and a small-town identity that people move here
                specifically for.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                One distinction worth holding onto: the city of Snohomish and the surrounding unincorporated
                Snohomish area are not the same thing, even though listings and mailing addresses often blur
                them. Services, permitting, utilities, and tax treatment can differ. When you send me a listing,
                that is one of the first things I check.
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
                    <span><strong>A genuine historic downtown, recognized as a National Historic District, with an established local character.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>River and lake setting, with parks, trails, and nearby agricultural landscape for open views and outdoor time.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>A mix of in-town homes, newer construction, and rural or acreage property just outside the city.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>A small-town feel while still being within reach of Everett and the I-5 corridor.</strong></span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-4">What to think about</h3>
                <ul className="space-y-3 text-foreground text-base">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Older homes, where they are present, can call for additional inspection, maintenance, insurance review, or renovation planning.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Not every downtown-area property is historic, and not every historic property carries the same requirements.</strong> Verify rather than assume.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>River proximity makes flood mapping and insurance a parcel-by-parcel question.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>City limits versus unincorporated county changes utilities, services, and permitting.</strong></span>
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
              Housing here ranges from older in-town homes on established streets, to newer subdivisions, to
              rural parcels with acreage. With the older stock, it is worth budgeting time for a thorough
              inspection and, where applicable, research into preservation or renovation expectations before you
              plan changes. Insurance carriers can also treat older systems and structures differently, so it
              helps to get quotes early rather than at the end.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Outside the city, well and septic systems, private roads, easements, and land-use designations
              come into play. Near the rivers, elevation and flood mapping matter. These are all answerable
              questions. They just need to be answered for the specific parcel rather than the general area.
            </p>
          </div>
        </section>

        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-heading h-section text-primary mb-8 text-center">Practical Notes for Buyers and Sellers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Buyers</h3><p className="copy text-foreground"><strong>Plan for the age and setting of the property.</strong> Older systems, flood mapping, shoreline or river proximity, wells, septic systems, easements, and historic considerations all deserve address-specific review before an offer becomes firm.</p></div>
              <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Sellers</h3><p className="copy text-foreground"><strong>Documentation helps buyers see character instead of uncertainty.</strong> Permits, repair records, system ages, utility information, flood insurance history when applicable, and details about thoughtful updates can make an older or rural property easier to evaluate.</p></div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading h-section text-primary mb-6">Parks, Trails, and Everyday Life</h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Daily life here tends to center on the historic downtown and the water. The Snohomish and Pilchuck
              Rivers and Blackmans Lake shape the setting, and the city's parks and trails give easy access to
              it. The surrounding agricultural landscape is part of the appeal for many buyers, and it is also
              part of the reality of living here, with seasonal farm activity and rural road traffic.
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
                <span>Confirm school assignment for the exact address with the district.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  Verify utilities, including well and septic where applicable, along with service and
                  inspection history.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  Check flood mapping, shoreline or critical-area conditions, easements, and any HOA
                  obligations.
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
            <h2 className="font-heading h-section text-primary mb-4">Homes for Sale in Snohomish</h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed measure mx-auto mb-8">
              This search pulls live Snohomish listings. If you would like help telling city properties from
              unincorporated ones, or sorting out an older home's condition questions, send me the address.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={searchUrl} target="_blank" rel="noopener noreferrer">
                  Search Snohomish Homes
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Ask Me About Snohomish</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Snohomish;
