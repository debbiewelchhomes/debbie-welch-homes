import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    category: "Mortgage Lending",
    name: "Jared Paul, CrossCountry Mortgage",
    description: "Jared grew up locally and is a former Marine. He helps buyers compare conventional, FHA, VA, purchase, and refinance options and is licensed in Washington.",
    href: "https://crosscountrymortgage.com/scottsdale-az-4636/jared-paul/",
  },
  {
    category: "Home Staging",
    name: "Cecilia Rehbein, Summit Staging & Design",
    description: "Cecilia's local staging and design business helps prepare homes to photograph well, welcome buyers, and make a strong first impression.",
    href: "https://www.instagram.com/summitstaging/",
  },
  {
    category: "Real Estate Photography",
    name: "Melinda Wong, Pics by Pix Photography",
    description: "Melinda provides Puget Sound real estate photography, video, aerial images, 3D tours, floor plans, and virtual staging.",
    href: "https://picsbypixphotography.com/realestate",
  },
];

const inspectors = [
  { name: "John Sobieski, Home Inspections Services NW" },
  { name: "Titan Inspection Services", href: "https://titaninspectionservices.com/home-inspections-in-snohomish/" },
  { name: "Butch Hamilton, Hamilton Home Inspections", href: "https://hamiltonhomeinspections.com/" },
];

const TrustedPartners = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Trusted Local Real Estate Partners | Debbie Welch Homes"
      description="Meet the trusted Snohomish County lenders, inspectors, stagers, and real estate photographers Debbie Welch recommends as transaction resources."
      canonical="/resources/trusted-partners"
    />
    <Navigation />
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-warm-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">Good people make a difference…</p>
            <h1 className="font-heading h-section text-primary mb-6">Trusted Local Partners</h1>
            <p className="copy-lead text-foreground">
              I may be your main point of contact, but a successful move often takes a dependable team. These are professionals I trust to help keep preparation, financing, inspections, marketing, and the details around a transaction moving smoothly.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {partners.map((partner) => (
              <a key={partner.name} href={partner.href} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="h-full border-border bg-card transition-shadow duration-300 group-hover:shadow-lg">
                  <CardContent className="p-7">
                    <p className="eyebrow-caps mb-3">{partner.category}</p>
                    <h2 className="font-heading h-card text-primary mb-3">{partner.name}</h2>
                    <p className="copy text-foreground mb-5">{partner.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                      Visit Their Website <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <Card className="border-border bg-warm-bg">
            <CardContent className="p-7 md:p-9">
              <p className="eyebrow-caps mb-3">Home Inspections</p>
              <h2 className="font-heading h-card text-primary mb-4">Inspection Options</h2>
              <p className="copy text-foreground mb-6">
                A licensed home inspector evaluates a property's condition so you can make informed decisions. I can share options known for thorough, timely reports, but you always choose who earns your business.
              </p>
              <ul className="grid md:grid-cols-3 gap-4">
                {inspectors.map((inspector) => (
                  <li key={inspector.name} className="bg-background rounded-lg p-5">
                    {inspector.href ? (
                      <a href={inspector.href} target="_blank" rel="noopener noreferrer" className="font-medium text-secondary hover:underline">
                        {inspector.name}
                      </a>
                    ) : (
                      <span className="font-medium text-primary">{inspector.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <p className="copy text-muted-foreground max-w-4xl mx-auto mt-10 text-center">
            These recommendations are offered as a convenience, not a requirement or guarantee. You are always welcome to choose any qualified provider. I can also share additional options based on the property, location, and work involved.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default TrustedPartners;
