import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize } from "lucide-react";
import { pageSEO } from "@/data/seoData";

const Listings = () => {
  const properties = [
    {
      id: 1,
      status: "Just Sold",
      title: "Lake Stevens Single-Family Home",
      location: "Lake Stevens, WA – Snohomish County",
      beds: 3,
      baths: 2,
      sqft: "1,850",
      price: "$725,000",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    },
    {
      id: 2,
      status: "Represented Buyer",
      title: "Everett Rambler Near Boeing",
      location: "Everett, WA – Snohomish County",
      beds: 4,
      baths: 2,
      sqft: "1,600",
      price: "$650,000",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    },
    {
      id: 3,
      status: "Just Sold",
      title: "Marysville Two-Story Home",
      location: "Marysville, WA – Snohomish County",
      beds: 3,
      baths: 2.5,
      sqft: "2,050",
      price: "$615,000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 4,
      status: "Represented Seller",
      title: "Snohomish Historic Charmer",
      location: "Snohomish, WA – Snohomish County",
      beds: 3,
      baths: 1.75,
      sqft: "1,900",
      price: "$785,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: 5,
      status: "Just Sold",
      title: "Everett Condo Near Waterfront",
      location: "Everett, WA – Snohomish County",
      beds: 2,
      baths: 2,
      sqft: "1,150",
      price: "$485,000",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
      id: 6,
      status: "Represented Buyer",
      title: "Marysville Newer Construction",
      location: "Marysville, WA – Snohomish County",
      beds: 4,
      baths: 2.5,
      sqft: "2,400",
      price: "$695,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      id: 7,
      status: "Just Sold",
      title: "Arlington Family Home",
      location: "Arlington, WA – Snohomish County",
      beds: 4,
      baths: 2.5,
      sqft: "2,200",
      price: "$680,000",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    },
    {
      id: 8,
      status: "Represented Seller",
      title: "Bothell Modern Home",
      location: "Bothell, WA – Snohomish County",
      beds: 3,
      baths: 2,
      sqft: "1,750",
      price: "$825,000",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    },
    {
      id: 9,
      status: "Represented Buyer",
      title: "Mill Creek Contemporary",
      location: "Mill Creek, WA – Snohomish County",
      beds: 4,
      baths: 3,
      sqft: "2,600",
      price: "$890,000",
      image: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=800&q=80",
    },
  ];

  const getStatusVariant = (status: string) => {
    if (status.includes("Sold")) return "default";
    if (status.includes("Buyer")) return "secondary";
    return "outline";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title={pageSEO.listings.title} description={pageSEO.listings.description} canonical="/listings" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-script text-4xl md:text-5xl text-secondary mb-6">
            Check these out…
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-8">
            See Properties I've Helped Buyers & Sellers With in Snohomish County
          </h1>
          <p className="font-body text-lg text-foreground/80 leading-relaxed">
            Every home tells a story, and these are just a few of the Snohomish County properties I've helped my clients buy and sell over the years. From first homes to long-time family houses, this portfolio gives you a feel for the neighborhoods, price points, and styles I work with across Lake Stevens, Everett, Marysville, Snohomish, and nearby communities.
          </p>
        </div>
      </section>

      {/* Property Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <Badge 
                    variant={getStatusVariant(property.status)}
                    className="absolute top-4 right-4 bg-background/90 text-foreground border-border"
                  >
                    {property.status}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <p className="text-2xl font-heading text-primary font-semibold mb-2">
                    {property.price}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      {property.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="h-4 w-4" />
                      {property.sqft} Sq Ft
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-primary mb-2">
                    {property.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {property.location}
                  </p>
                  <Button variant="secondary" className="w-full" asChild>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      Details
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Button */}
      <section className="pb-20 px-4">
        <div className="container mx-auto text-center">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => {
              // Ready for future dynamic listing data integration
              console.log("Load more listings");
            }}
          >
            Load More
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Listings;
