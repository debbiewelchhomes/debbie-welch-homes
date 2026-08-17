import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO } from "@/data/seoData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StanwoodCamano = () => {
  const areaName = "Stanwood & Camano Island";

  return (
    <div className="min-h-screen">
      <SEO
        title={pageSEO.areas.stanwoodCamano.title}
        description={pageSEO.areas.stanwoodCamano.description}
        canonical="/areas/stanwood-camano"
      />
      <Navigation />
      <main>
        {/* Intro */}
        <section className="section bg-background pt-32 md:pt-40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow mb-4">Stanwood & Camano Island</p>
              <h1 className="font-heading h-section text-primary mb-6">
                Buying or Selling in Stanwood & Camano Island
              </h1>
              <p className="text-base md:text-lg text-foreground leading-relaxed measure mx-auto">
                Stanwood and Camano Island sit at the northwest edge of the county, near Port Susan and the Stillaguamish delta. If you are considering a move here, the most useful thing I can give you is
                current, specific information about your price range and the streets you are actually
                looking at, rather than general market headlines.
              </p>
            </div>
          </div>
        </section>

        {/* Search + consult */}
        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading h-section text-primary mb-6">
                See What Is Available Right Now
              </h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed measure mx-auto mb-8">
                This search pulls live listings so you can get a feel for pricing and inventory. If you
                would like help reading what you are seeing, or you want a saved search set up for you,
                just ask.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://debbiewelch.exprealty.com/index.php?advanced=1&display=Snohomish+County+WA%2C+Camano+Island&min=0&max=100000000&beds=0&baths=0&types%5B%5D=1&types%5B%5D=2&types%5B%5D=3&types%5B%5D=20&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&areas%5B%5D=county%3Asnohomish%3Awa&areas%5B%5D=area%3Acamano+island%3Awa&sortby=listings.listingdate+DESC&rtype=map" target="_blank" rel="noopener noreferrer">
                    Search homes in Stanwood & Camano Island
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Ask Me About Stanwood & Camano Island</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coming soon */}
        <section className="section bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-body text-base text-muted-foreground">
                A fuller Stanwood & Camano Island guide, with schools, neighborhoods, and local favorites, is still being
                written. I would rather post it when it is accurate than fill it with guesses. In the
                meantime, ask me anything about the area and I will answer directly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StanwoodCamano;
