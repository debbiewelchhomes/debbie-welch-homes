import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/area-hero-stanwood-camano.webp";

const searchUrl =
  "https://debbiewelch.exprealty.com/index.php?advanced=1&display=Snohomish+County+WA%2C+Camano+Island&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=20&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&areas%5B%5D=county%3Asnohomish%3Awa&areas%5B%5D=area%3Acamano+island%3Awa&sortby=listings.listingdate+DESC&rtype=map";

const StanwoodCamano = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title={pageSEO.areas.stanwoodCamano.title}
        description={pageSEO.areas.stanwoodCamano.description}
        canonical="/areas/stanwood-camano"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Stanwood welcome sign in Stanwood, Washington"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 10%" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/15"
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 text-center section relative z-10">
            <p className="eyebrow mb-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              Stanwood &amp; Camano Island
            </p>
            <p
              className="font-heading text-xl md:text-2xl text-white max-w-2xl mx-auto"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
            >
              Where the Stillaguamish River meets the Salish Sea, and a bridge, not a ferry, carries you to the
              island.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-heading h-section text-primary mb-6">
                Buying or Selling in Stanwood &amp; Camano Island, WA
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                Stanwood sits at the northwest edge of Snohomish County, where the Stillaguamish River meets the
                Salish Sea, and serves as the mainland gateway to Camano Island. The island is reached by
                bridge, so there is no ferry schedule to plan around.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                The most important practical distinction is jurisdictional. Stanwood is in Snohomish County.
                Camano Island is in Island County. That single line changes taxes, services, permitting, school
                districts, and sometimes insurance. People often shop both in one afternoon, which is exactly
                why it is worth being clear about which side of the water any given property sits on.
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
                <h3 className="font-body text-2xl md:text-3xl font-semibold text-primary mb-5">Why Buyers Consider It</h3>
                <ul className="space-y-3 text-foreground text-base">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Shoreline, forest, and recreation access, including Camano Island State Park and Cama Beach State Park.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>A traditional Stanwood downtown with agricultural roots and everyday services on the mainland side.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Bridge access to Camano Island, so island property does not require a ferry crossing.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>A wide range of property types, from in-town homes to rural and water-oriented parcels.</strong></span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-body text-2xl md:text-3xl font-semibold text-primary mb-5">What to Think About</h3>
                <ul className="space-y-3 text-foreground text-base">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Two counties, two sets of rules.</strong> Confirm which county a property is in before comparing taxes or services.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Wells, septic systems, and private road or access agreements are common outside of town and need real review.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Shoreline, bluff, drainage, and flood considerations apply to many properties near the water and the river delta.</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span><strong>Distance to daily services and to I-5 varies a lot by location.</strong> Test the drive you would actually make.</span>
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
              In Stanwood, you will find in-town homes with city utilities alongside rural and agricultural
              parcels just outside. On Camano Island, many properties rely on wells and septic systems, and
              access can involve private roads or shared easements. Water-oriented parcels bring their own set
              of questions about shoreline regulation, bank stability, drainage, and insurance.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              These are all workable. They simply take a slower, more document-driven process than a standard
              in-city purchase, and it is far cheaper to ask the questions during inspection than after closing.
            </p>
          </div>
        </section>

        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-heading h-section text-primary mb-8 text-center">Practical Notes for Buyers and Sellers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Buyers</h3><p className="copy text-foreground"><strong>Allow extra time for property-specific research.</strong> County jurisdiction, wells, septic systems, private roads, shared access, shoreline rules, drainage, bluff conditions, insurance, and travel time to daily services should all be understood before closing.</p></div>
              <div className="card-surface"><h3 className="font-heading h-card text-primary mb-3">For Sellers</h3><p className="copy text-foreground"><strong>Prepare the records that explain how the property works.</strong> Well and septic documents, road agreements, surveys, permits, maintenance history, shoreline information, and insurance details can prevent a distinctive property from feeling unnecessarily complicated.</p></div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading h-section text-primary mb-6">Parks, Shoreline, and Everyday Life</h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Camano Island State Park and Cama Beach State Park anchor public access to shoreline, forest, and
              recreation on the island. On the mainland, Stanwood's downtown and its agricultural surroundings
              carry the everyday rhythm, with coastal and outdoor recreation close at hand for people who want
              to be near the water without a ferry in the routine.
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
                  Confirm school assignment with the correct district for the exact address, which differs
                  across the two counties.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  Verify water source and septic condition, including flow tests, water quality, and inspection
                  records.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  Review shoreline, flood, easement, access, and HOA conditions along with insurance
                  availability.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Drive your commute and your everyday errand route at realistic times.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading h-section text-primary mb-4">
              Homes for Sale in Stanwood &amp; Camano Island
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed measure mx-auto mb-8">
              This search covers Snohomish County along with Camano Island, so it is broader than Stanwood
              alone. Tell me what you are after and I will narrow it to the right area and property type for
              you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={searchUrl} target="_blank" rel="noopener noreferrer">
                  Search Snohomish County &amp; Camano Island
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Ask Me About Stanwood &amp; Camano</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StanwoodCamano;
