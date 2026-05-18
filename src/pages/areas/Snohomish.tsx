import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { pageSEO } from "@/data/seoData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Snohomish = () => {
  const areaName = "Snohomish";
  
  return (
    <div className="min-h-screen">
      <SEO title={pageSEO.areas.snohomish.title} description={pageSEO.areas.snohomish.description} canonical="/areas/snohomish" />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-warm-bg bg-cover bg-center">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 text-center py-32 relative z-10">
            <p className="font-script text-5xl md:text-7xl text-white mb-4 drop-shadow-lg">
              {areaName}
            </p>
          </div>
        </section>

        {/* Welcome & Video Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6">Buyer's Dream…</p>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
                Welcome to {areaName}
              </h1>
              <p className="text-base md:text-lg text-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                This is where we'll describe why {areaName} is such a popular corner of Snohomish County—the location, the vibe, and what life feels like here. Perfect for families, commuters, and anyone looking for that blend of community and convenience. I'll customize this copy with specific details about what makes this area special.
              </p>
              <div className="aspect-video bg-warm-bg rounded-lg flex items-center justify-center border border-border">
                <p className="text-muted-foreground">Video Placeholder - YouTube embed will go here</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="font-script text-3xl md:text-5xl text-secondary mb-6 text-center">On the map…</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6 text-center">
                Location of {areaName}
              </h2>
              <p className="text-base md:text-lg text-foreground mb-8 text-center max-w-2xl mx-auto leading-relaxed">
                This will show where {areaName} sits within Snohomish County and what's nearby. Easy access to highways, shopping, schools, and outdoor recreation.
              </p>
              <div className="aspect-video bg-warm-bg rounded-lg flex items-center justify-center border border-border">
                <p className="text-muted-foreground">Google Maps Embed Placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Width Scenic Photo */}
        <section className="relative h-[50vh] md:h-[60vh] bg-warm-bg bg-cover bg-center">
          <div className="absolute inset-0 bg-black/10"></div>
        </section>

        {/* Love It / Might Not Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                  Why You'll LOVE It
                </h2>
                <ul className="space-y-4 text-foreground">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Quiet, residential streets and easy access to local amenities.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Mix of established neighborhoods and newer construction.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Strong sense of community with local events and activities.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Great schools and family-friendly atmosphere.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Close to parks, trails, and outdoor recreation.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                  Why You Might Not
                </h2>
                <ul className="space-y-4 text-foreground">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Commute times to Seattle or the Eastside can be longer.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Limited walkability in some areas—car is often necessary.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Fewer dining and entertainment options than urban centers.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>May feel too quiet if you prefer a faster-paced lifestyle.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Home Styles Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-12 text-center">
              Home Styles in {areaName}
            </h2>
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video bg-background rounded-lg flex items-center justify-center border border-border">
                  <p className="text-muted-foreground">Image Placeholder 1</p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                    Classic Style
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Traditional homes with timeless appeal, featuring established yards and character details.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                    Second Style
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Modern construction with open floor plans and updated amenities throughout.
                  </p>
                </div>
                <div className="aspect-video bg-background rounded-lg flex items-center justify-center border border-border order-1 md:order-2">
                  <p className="text-muted-foreground">Image Placeholder 2</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video bg-background rounded-lg flex items-center justify-center border border-border">
                  <p className="text-muted-foreground">Image Placeholder 3</p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                    Third Style
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Acreage properties offering space and privacy for those seeking a rural lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schools Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6 text-center">
                Schools
              </h2>
              <p className="text-lg text-foreground mb-8 text-center">
                Here's where you'll find information about local schools serving {areaName}.
              </p>
              <div className="space-y-3">
                <a href="#" className="block p-4 bg-warm-bg rounded-lg hover:bg-accent transition-colors">
                  Link to School 1
                </a>
                <a href="#" className="block p-4 bg-warm-bg rounded-lg hover:bg-accent transition-colors">
                  Link to School 2
                </a>
                <a href="#" className="block p-4 bg-warm-bg rounded-lg hover:bg-accent transition-colors">
                  Link to School 3
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Places of Interest Section */}
        <section className="py-20 md:py-32 bg-warm-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6 text-center">
                Places of Interest
              </h2>
              <p className="text-lg text-foreground mb-8 text-center">
                Local spots worth checking out in and around {areaName}.
              </p>
              <div className="space-y-3">
                <a href="#" className="block p-4 bg-background rounded-lg hover:bg-accent transition-colors border border-border">
                  Link to Park 1
                </a>
                <a href="#" className="block p-4 bg-background rounded-lg hover:bg-accent transition-colors border border-border">
                  Link to Restaurant 1
                </a>
                <a href="#" className="block p-4 bg-background rounded-lg hover:bg-accent transition-colors border border-border">
                  Link to Local Spot 1
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Homes For Sale & Sold Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <p className="font-script text-3xl md:text-5xl text-secondary mb-6 text-center">Get a feel for…</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-12 text-center">
              Homes For Sale & Sold in {areaName}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-warm-bg flex items-center justify-center">
                    <p className="text-muted-foreground">Property Image {i}</p>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                      Sample Property {i}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">3 bed • 2 bath • 1,800 sq ft</p>
                    <p className="text-2xl font-bold text-primary mb-4">$575,000</p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="#">Details</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" asChild>
                <a 
                  href="https://debbiewelch.exprealty.com/index?advanced=1&display=Snohomish&areas%5B%5D=county:Snohomish:wa&beds=0&baths=0&min=0&max=100000000&minacres=0&maxacres=50000&minfootage=0&maxfootage=30000&walkscore=&yearbuilt=0&types%5B%5D=2&types%5B%5D=3&types%5B%5D=1&sortby=listings.listingdate+DESC&ppc=Loveable+Website&addht=LoveableWebsite&agency_photos=&view_timing=2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Search homes in {areaName}
                </a>
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
