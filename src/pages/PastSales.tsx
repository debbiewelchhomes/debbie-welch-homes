import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pageSEO } from "@/data/seoData";
import { ArrowRight, BedDouble, Bath, Ruler, ExternalLink } from "lucide-react";

type Representation = "Seller Representation" | "Buyer Representation";

interface PastSale {
  community: string;
  representation: Representation;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
}

const sales: PastSale[] = [
  { community: "Marysville, WA", representation: "Seller Representation", price: "$415,000", beds: 2, baths: 1, sqft: "667 sq ft" },
  { community: "Everett, WA", representation: "Seller Representation", price: "$507,000", beds: 3, baths: 1, sqft: "1,516 sq ft" },
  { community: "Marysville, WA", representation: "Buyer Representation", price: "$631,209", beds: 3, baths: 3, sqft: "1,834 sq ft" },
  { community: "Marysville, WA", representation: "Seller Representation", price: "$230,000", beds: 1, baths: 1, sqft: "595 sq ft" },
  { community: "Lake Stevens, WA", representation: "Seller Representation", price: "$790,000", beds: 5, baths: 3, sqft: "2,717 sq ft" },
];

const representationFilters = ["All", "Seller Representation", "Buyer Representation"] as const;
type RepresentationFilter = (typeof representationFilters)[number];

const PastSales = () => {
  const [repFilter, setRepFilter] = useState<RepresentationFilter>("All");
  const [communityFilter, setCommunityFilter] = useState<string>("All");

  const communities = useMemo(
    () => ["All", ...Array.from(new Set(sales.map((s) => s.community)))],
    []
  );

  const filtered = sales.filter(
    (s) =>
      (repFilter === "All" || s.representation === repFilter) &&
      (communityFilter === "All" || s.community === communityFilter)
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={pageSEO.pastSales.title}
        description={pageSEO.pastSales.description}
        canonical="/past-sales"
      />
      <Navigation />

      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-warm-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow mb-4">A selected sample, not a complete history…</p>
              <h1 className="font-heading h-section text-primary mb-6">Past Sales Across Snohomish County</h1>
              <p className="copy text-foreground mx-auto">
                A selection of recent buyer and seller representation in the communities Debbie calls home. Every move has its own details, priorities, and timing. These examples offer a glimpse of the range of homes and clients she has helped.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-background" aria-label="Past sales with filters">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-10 space-y-6">
              <div role="group" aria-label="Filter by representation type" className="flex flex-wrap gap-3 justify-center">
                {representationFilters.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={repFilter === option}
                    onClick={() => setRepFilter(option)}
                    className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${
                      repFilter === option
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-secondary hover:text-secondary"
                    }`}
                  >
                    {option === "All" ? "All Sales" : option}
                  </button>
                ))}
              </div>
              <div role="group" aria-label="Filter by community" className="flex flex-wrap gap-3 justify-center">
                {communities.map((community) => (
                  <button
                    key={community}
                    type="button"
                    aria-pressed={communityFilter === community}
                    onClick={() => setCommunityFilter(community)}
                    className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${
                      communityFilter === community
                        ? "bg-secondary text-white border-secondary"
                        : "bg-background text-foreground border-border hover:border-secondary hover:text-secondary"
                    }`}
                  >
                    {community === "All" ? "All Communities" : community.replace(", WA", "")}
                  </button>
                ))}
              </div>
            </div>

            <p className="sr-only" role="status" aria-live="polite">
              Showing {filtered.length} of {sales.length} selected sales.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((sale, i) => (
                <Card
                  key={`${sale.community}-${sale.price}-${i}`}
                  className="border-border bg-card transition-shadow duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-7">
                    <p className="eyebrow mb-3">{sale.representation}</p>
                    <h2 className="font-heading h-card text-primary mb-1">{sale.community}</h2>
                    <p className="font-heading text-2xl text-secondary mb-5">{sale.price}</p>
                    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/80">
                      <li className="inline-flex items-center gap-2">
                        <BedDouble className="h-4 w-4 text-secondary" aria-hidden="true" />
                        <span>{sale.beds} {sale.beds === 1 ? "bed" : "beds"}</span>
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <Bath className="h-4 w-4 text-secondary" aria-hidden="true" />
                        <span>{sale.baths} {sale.baths === 1 ? "bath" : "baths"}</span>
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <Ruler className="h-4 w-4 text-secondary" aria-hidden="true" />
                        <span>{sale.sqft}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="copy text-foreground text-center mt-8">
                No selected sales match these filters. Try a different combination.
              </p>
            )}

            <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mt-12">
              Recent sales shown are periodically reviewed for accuracy. Details are provided for general information and may be updated.
            </p>

            <div className="text-center mt-8">
              <a
                href="https://www.zillow.com/profile/Debbie%20Welch%20Realtor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View More of Debbie's Sales on Zillow (opens in a new tab)"
                className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                View More of Debbie's Sales on Zillow <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading h-section text-primary mb-4">Thinking About Your Own Move?</h2>
            <p className="copy text-foreground mb-8">
              Whether you are buying your next home or preparing to sell, a calm conversation is a good place to start.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Debbie <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PastSales;
