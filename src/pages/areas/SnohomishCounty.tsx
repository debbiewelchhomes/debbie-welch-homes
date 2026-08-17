import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/area-hero-snohomish-county.webp";

const searchUrl =
  "https://debbiewelch.exprealty.com/index.php?advanced=1&display=Snohomish+County+WA%2C+Camano+Island&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=20&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&areas%5B%5D=county%3Asnohomish%3Awa&areas%5B%5D=area%3Acamano+island%3Awa&sortby=listings.listingdate+DESC&rtype=map";

const areas = [
  {
    name: "Lake Stevens",
    path: "/areas/lake-stevens",
    blurb:
      "A lake-centered community with a mix of established and newer neighborhoods. District boundaries reach beyond city limits, so school assignment needs verifying.",
  },
  {
    name: "Everett & Mukilteo",
    path: "/areas/everett-mukilteo",
    blurb:
      "The county's urban core plus a waterfront neighbor. The widest range of housing ages, price points, and city services in one place.",
  },
  {
    name: "Marysville",
    path: "/areas/marysville",
    blurb:
      "North of Everett along I-5, with a broad spread of neighborhoods. Some areas fall into the Lake Stevens School District despite the Marysville address.",
  },
  {
    name: "Arlington",
    path: "/areas/arlington",
    blurb:
      "A traditional downtown, an active airport and industrial district, and rural edges nearby. Smokey Point feels different from either.",
  },
  {
    name: "Bothell & Mill Creek",
    path: "/areas/bothell-mill-creek",
    blurb:
      "The south end, closest to Seattle and the Eastside. Bothell straddles two counties, so taxes and districts must be checked property by property.",
  },
  {
    name: "Snohomish",
    path: "/areas/snohomish",
    blurb:
      "A river town with a National Historic District downtown and farmland around it. City limits and unincorporated areas are not the same thing.",
  },
  {
    name: "Stanwood & Camano Island",
    path: "/areas/stanwood-camano",
    blurb:
      "Shoreline and rural living at the northwest edge. Stanwood is Snohomish County, Camano is Island County, reached by bridge rather than ferry.",
  },
];

const SnohomishCounty = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title={pageSEO.areas.snohomishCounty.title}
        description={pageSEO.areas.snohomishCounty.description}
        canonical="/areas/snohomish-county"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Aerial view of the Snohomish River and surrounding farmland in Snohomish County, Washington"
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
              Snohomish County
            </p>
            <p
              className="font-heading text-xl md:text-2xl text-white max-w-2xl mx-auto"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
            >
              Start here if you are not sure which area fits, then work outward to the guides.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-heading h-section text-primary mb-6">
                Snohomish County, WA: An Orientation for Buyers and Sellers
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                Snohomish County stretches from the Puget Sound shoreline east into the Cascade foothills. In
                between it holds urban, suburban, small-city, rural, river, and mountain-edge settings, plus
                shoreline and island-adjacent areas at its northwest corner. Two homes at the same price can
                offer completely different daily lives depending on where in the county they sit.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                This page is meant as a starting point rather than a full guide. Use it to narrow down which
                areas are worth a closer look, then read the individual guide for each one.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison grid */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-heading h-section text-primary mb-10 text-center">Compare the Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="block bg-background p-6 rounded-lg border border-border hover:border-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">{area.name}</h3>
                  <p className="text-base text-foreground leading-relaxed">{area.blurb}</p>
                  <span className="mt-4 inline-block text-secondary font-body text-sm">
                    Read the {area.name} guide
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Boundaries */}
        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading h-section text-primary mb-6">
              Why the City Name Does Not Tell You Everything
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
              Across this county, city names, mailing addresses, school district boundaries, utility providers,
              county jurisdiction, and commute patterns do not always line up. A Marysville mailing address can
              sit in a different school district. A Bothell home can sit in a different county than its
              neighbors. A property with a city name in the listing can actually be in unincorporated county,
              with different services and permitting.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              This is not a warning meant to worry you. It is simply the reason I verify these details for the
              specific parcel, every time, rather than relying on what the listing headline says.
            </p>
          </div>
        </section>

        {/* Due diligence */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading h-section text-primary mb-6">What to Verify on Any Property</h2>
            <ul className="space-y-3 text-foreground text-base">
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>School assignment.</strong> Confirm it with the district using the exact address.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  <strong>Utilities and systems.</strong> Confirm city water and sewer, or well and septic, along with available inspection records.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>
                  <strong>Property-specific restrictions.</strong> Review flood, shoreline, critical-area, easement, and HOA conditions as applicable to the parcel.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>Your real commute.</strong> Drive it at the time of day you would actually be traveling.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>Seller documentation.</strong> Permits, repair history, utility details, HOA records, and well or septic information can make a property easier to evaluate and help prevent closing delays.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading h-section text-primary mb-4">Find Your Starting Point</h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed measure mx-auto mb-8">
              Browse the county-wide search to get a feel for pricing across areas, or tell me what matters most
              to you and I will suggest a shorter list of places to look first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={searchUrl} target="_blank" rel="noopener noreferrer">
                  Search Snohomish County &amp; Camano Island
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Ask Me Where to Start</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SnohomishCounty;
