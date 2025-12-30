// RealEstateAgent JSON-LD schema for About/Contact pages
export const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Debbie Welch",
  "alternateName": "Debbie Welch Homes",
  "url": "https://debbie-welch-homes.lovable.app",
  "telephone": "360-631-8148",
  "email": "debbie@debbiewelchhomes.com",
  "description": "Snohomish County real estate broker helping buyers, sellers, downsizers, and relocation clients in Lake Stevens, Everett, Marysville, Snohomish, Arlington, Bothell, Mill Creek, Stanwood & Camano.",
  "areaServed": [
    {
      "@type": "City",
      "name": "Lake Stevens",
      "containedInPlace": {
        "@type": "County",
        "name": "Snohomish County",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      }
    },
    {
      "@type": "City",
      "name": "Everett"
    },
    {
      "@type": "City",
      "name": "Marysville"
    },
    {
      "@type": "City",
      "name": "Snohomish"
    },
    {
      "@type": "City",
      "name": "Arlington"
    },
    {
      "@type": "City",
      "name": "Bothell"
    },
    {
      "@type": "City",
      "name": "Mill Creek"
    },
    {
      "@type": "City",
      "name": "Stanwood"
    },
    {
      "@type": "City",
      "name": "Mukilteo"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "WA",
    "addressCountry": "US"
  },
  "worksFor": {
    "@type": "RealEstateAgent",
    "name": "eXp Realty"
  },
  "knowsAbout": [
    "Residential Real Estate",
    "First-Time Home Buyers",
    "Downsizing",
    "Military Relocation",
    "PCS Moves",
    "VA Loans",
    "Snohomish County Real Estate"
  ]
};

// Page-specific SEO data
export const pageSEO = {
  home: {
    title: "Debbie Welch Homes | Snohomish County Real Estate Agent | Helping You Home",
    description: "Debbie Welch is a Snohomish County real estate broker helping buyers, sellers, downsizers, and relocation clients in Lake Stevens, Everett, Marysville, Snohomish, Arlington, Bothell, Mill Creek, Stanwood & Camano."
  },
  about: {
    title: "About Debbie Welch | Snohomish County Real Estate Broker",
    description: "Meet Debbie Welch, a full-service real estate broker in Snohomish County helping buyers, sellers, downsizers, and military families with calm, organized guidance."
  },
  contact: {
    title: "Contact Debbie Welch | Snohomish County Real Estate",
    description: "Get in touch with Debbie Welch for buying, selling, downsizing, or relocating in Snohomish County. Personal response within one business day."
  },
  services: {
    title: "Real Estate Services | Debbie Welch Homes",
    description: "Full-service real estate guidance for buyers, sellers, downsizers, and relocation clients in Snohomish County, WA."
  },
  buying: {
    title: "Buying a Home in Snohomish County | Debbie Welch Homes",
    description: "Calm, step-by-step guidance for home buyers in Snohomish County. From first-time buyers to VA loan clients."
  },
  selling: {
    title: "Selling Your Home in Snohomish County | Debbie Welch Homes",
    description: "Strategic home selling in Snohomish County with clear planning, honest pricing, and calm support through closing."
  },
  relocation: {
    title: "Relocation & PCS to Snohomish County | Debbie Welch Homes",
    description: "Relocating to Snohomish County? Expert guidance for military PCS moves and out-of-area buyers with remote-friendly support."
  },
  downsizing: {
    title: "Downsizing in Snohomish County | Debbie Welch Homes",
    description: "Patient, organized downsizing support for Snohomish County homeowners ready to simplify and move forward."
  },
  listings: {
    title: "Property Listings | Debbie Welch Homes",
    description: "Browse current property listings in Snohomish County including Lake Stevens, Everett, Marysville, and surrounding areas."
  },
  blog: {
    title: "Real Estate Blog | Debbie Welch Homes",
    description: "Insights, guides, and market updates for Snohomish County home buyers, sellers, and downsizers."
  }
};
