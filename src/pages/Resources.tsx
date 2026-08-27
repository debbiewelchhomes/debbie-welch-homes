import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, BookOpen, Calculator, ExternalLink, HelpCircle, Newspaper } from "lucide-react";

const guideLinks = [
  {
    title: "Home Buyer Guide",
    description: "A practical overview of the buying process, from preparation and financing through closing.",
    href: "https://debbiewelchhomes.myflodesk.com/home-buyer-guide",
  },
  {
    title: "The Ultimate Seller Playbook",
    description: "Planning guidance for pricing, preparing, marketing, and selling your home.",
    href: "https://debbiewelchhomes.myflodesk.com/ultimate-seller-playbook",
  },
  {
    title: "Prepare Your Home for Sale",
    description: "A focused guide to deciding what to repair, update, clean, and organize before listing.",
    href: "https://debbiewelchhomes.myflodesk.com/how-to-prep-your-home-for-sale",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Real Estate Resources | Debbie Welch Homes"
        description="Helpful guides, market reports, mortgage tools, and local real estate articles for Snohomish County buyers, sellers, and downsizers."
        canonical="/resources"
      />
      <Navigation />

      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-warm-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow mb-4">Helpful, practical information…</p>
              <h1 className="font-heading h-section text-primary mb-6">Real Estate Resource Library</h1>
              <p className="copy text-foreground mx-auto">
                Start with the information that matches your next move. These guides and tools are here to help you understand your options before you are asked to make a decision.
              </p>
            </div>
          </div>
        </section>

        <section id="guides" className="section bg-background scroll-mt-28">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-10">
              <BookOpen className="h-8 w-8 text-secondary mb-4" aria-hidden="true" />
              <h2 className="font-heading h-section text-primary mb-4">Buyer & Seller Guides</h2>
              <p className="copy text-foreground">
                Downloadable planning help for buying, preparing a home, and selling with fewer surprises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {guideLinks.map((guide) => (
                <a key={guide.title} href={guide.href} target="_blank" rel="noopener noreferrer" className="group">
                  <Card className="h-full border-border bg-card transition-shadow duration-300 group-hover:shadow-lg">
                    <CardContent className="p-7">
                      <h3 className="font-heading h-card text-primary mb-3">{guide.title}</h3>
                      <p className="copy text-foreground mb-6">{guide.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                        Get Yours Here <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="market-reports" className="section bg-warm-bg scroll-mt-28">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://debbiewelch.exprealty.com/pages/market-reports"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full border-border bg-background transition-shadow duration-300 group-hover:shadow-lg">
                  <CardContent className="p-8">
                    <BarChart3 className="h-8 w-8 text-secondary mb-4" aria-hidden="true" />
                    <h2 className="font-heading h-card text-primary mb-3">Local Market Reports</h2>
                    <p className="copy text-foreground mb-6">
                      Review current trends, recent sales, active listings, and days on market for communities across Snohomish County.
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                      View Market Reports <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </a>

              <Link to="/contact" className="group">
                <Card className="h-full border-border bg-background transition-shadow duration-300 group-hover:shadow-lg">
                  <CardContent className="p-8">
                    <BarChart3 className="h-8 w-8 text-secondary mb-4" aria-hidden="true" />
                    <h2 className="font-heading h-card text-primary mb-3">Request a Personalized Report</h2>
                    <p className="copy text-foreground mb-6">
                      Citywide statistics can be too broad. Ask for a report tailored to your neighborhood, price range, or property type.
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                      Request My Report <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>


        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://debbiewelch.exprealty.com/resources/mortgage-calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full border-border bg-card transition-shadow duration-300 group-hover:shadow-lg">
                  <CardContent className="p-8">
                    <Calculator className="h-8 w-8 text-secondary mb-4" aria-hidden="true" />
                    <h2 className="font-heading h-card text-primary mb-3">Mortgage Calculator</h2>
                    <p className="copy text-foreground mb-6">
                      Estimate a monthly principal and interest payment. Taxes, insurance, HOA dues, and loan costs may change the final amount.
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                      Use the Calculator <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </a>

              <Link to="/blog" className="group">
                <Card className="h-full border-border bg-card transition-shadow duration-300 group-hover:shadow-lg">
                  <CardContent className="p-8">
                    <Newspaper className="h-8 w-8 text-secondary mb-4" aria-hidden="true" />
                    <h2 className="font-heading h-card text-primary mb-3">Local Real Estate Blog</h2>
                    <p className="copy text-foreground mb-6">
                      Read practical articles about buying, selling, downsizing, military moves, and living in Snohomish County.
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                      Read the Blog <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>


        <section className="section bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link to="/resources/faq" className="group">
              <Card className="border-border bg-card transition-shadow duration-300 group-hover:shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <HelpCircle className="h-8 w-8 text-secondary mb-4" aria-hidden="true" />
                  <p className="eyebrow mb-3">Questions are part of the process…</p>
                  <h2 className="font-heading h-section text-primary mb-4">Real Estate Frequently Asked Questions</h2>
                  <p className="copy text-foreground max-w-3xl mb-6">
                    Find straightforward answers about military PCS moves, VA-financed purchases, downsizing, buying and selling at the same time, preparing a home, and working together.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                    Read the FAQs <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="section bg-warm-bg">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link to="/resources/trusted-partners" className="group">
              <Card className="border-border bg-background transition-shadow duration-300 group-hover:shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <p className="eyebrow mb-3">The people behind a smooth move…</p>
                  <h2 className="font-heading h-section text-primary mb-4">Trusted Local Partners</h2>
                  <p className="copy text-foreground max-w-3xl mb-6">
                    Meet the lenders, inspectors, stagers, and real estate media professionals I trust to help keep each part of a transaction organized and moving forward.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                    Meet My Trusted Partners <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
