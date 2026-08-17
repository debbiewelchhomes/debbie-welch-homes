import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { pageSEO } from "@/data/seoData";

const searchUrl =
  "https://debbiewelch.exprealty.com/index?advanced=1&display=Snohomish&areas%5B%5D=county:Snohomish:wa&beds=0&baths=0&min=0&max=100000000&minacres=0&maxacres=50000&minfootage=0&maxfootage=30000&walkscore=&yearbuilt=0&types%5B%5D=2&types%5B%5D=3&types%5B%5D=1&sortby=listings.listingdate+DESC&ppc=Website&addht=Website&agency_photos=&view_timing=2";

const Listings = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title={pageSEO.listings.title} description={pageSEO.listings.description} canonical="/listings" />
      <Navigation />

      <main>
        <section className="pt-36 pb-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Past Sales</p>
            <h1 className="font-heading h-section text-primary mb-6">
              A Verified Past-Sales Portfolio Is Coming
            </h1>
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-5">
              I am preparing this page with accurate transaction details and photos from homes where I represented
              the buyer or seller. I would rather share a smaller, verified portfolio than fill the page with generic
              examples.
            </p>
            <p className="font-body text-base text-foreground/75 leading-relaxed mb-10">
              In the meantime, you can browse current Snohomish County listings or contact me to talk about the kind
              of home, neighborhood, or move you are considering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={searchUrl} target="_blank" rel="noopener noreferrer">
                  Search Current Homes
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Debbie</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Listings;
