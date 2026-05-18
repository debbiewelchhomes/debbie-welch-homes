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
    { "@type": "City", "name": "Lake Stevens" },
    { "@type": "City", "name": "Everett" },
    { "@type": "City", "name": "Marysville" },
    { "@type": "City", "name": "Snohomish" },
    { "@type": "City", "name": "Arlington" },
    { "@type": "City", "name": "Bothell" },
    { "@type": "City", "name": "Mill Creek" },
    { "@type": "City", "name": "Stanwood" },
    { "@type": "City", "name": "Mukilteo" }
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

// Helper to build a FAQPage JSON-LD from a list of Q&A pairs
export const buildFaqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer }
  }))
});

// Page-specific SEO data. Titles ≤ 60 chars, descriptions ≤ 160 chars.
export const pageSEO = {
  home: {
    title: "Debbie Welch Homes | Snohomish County Real Estate",
    description: "Snohomish County real estate broker helping buyers, sellers, downsizers, and relocation clients with calm, organized guidance for your next move."
  },
  about: {
    title: "About Debbie Welch | Snohomish County Broker",
    description: "Meet Debbie Welch, a full-service Snohomish County broker helping buyers, sellers, downsizers, and military families with calm guidance."
  },
  contact: {
    title: "Contact Debbie Welch | Snohomish County Realtor",
    description: "Get in touch with Debbie Welch for buying, selling, downsizing, or relocating in Snohomish County. Personal reply within one business day."
  },
  services: {
    title: "Real Estate Services | Debbie Welch Homes",
    description: "Full-service real estate guidance for buyers, sellers, downsizers, and relocation clients across Snohomish County, WA."
  },
  buying: {
    title: "Buying a Home in Snohomish County | Debbie Welch",
    description: "Calm, step-by-step guidance for home buyers in Snohomish County—from first-time buyers to VA loan and relocation clients."
  },
  selling: {
    title: "Selling Your Home in Snohomish County | Debbie Welch",
    description: "Strategic home selling in Snohomish County with clear planning, honest pricing, and calm support through closing."
  },
  relocation: {
    title: "Relocation & PCS to Snohomish County | Debbie Welch",
    description: "Relocating to Snohomish County? Expert guidance for military PCS moves and out-of-area buyers with remote-friendly support."
  },
  downsizing: {
    title: "Downsizing in Snohomish County | Debbie Welch",
    description: "Patient, organized downsizing support for Snohomish County homeowners ready to simplify and move forward."
  },
  listings: {
    title: "Property Listings | Debbie Welch Homes",
    description: "Browse Snohomish County property listings including Lake Stevens, Everett, Marysville, and surrounding areas."
  },
  blog: {
    title: "Real Estate Blog | Debbie Welch Homes",
    description: "Insights, guides, and market updates for Snohomish County home buyers, sellers, and downsizers."
  },
  areas: {
    snohomishCounty: {
      title: "Snohomish County Real Estate Guide | Debbie Welch",
      description: "Explore Snohomish County, WA: neighborhoods, schools, commute, and what to know before buying or selling here."
    },
    arlington: {
      title: "Arlington WA Real Estate Guide | Debbie Welch",
      description: "Buying or selling in Arlington, WA? Local insights on neighborhoods, schools, and the Snohomish County market."
    },
    bothellMillCreek: {
      title: "Bothell & Mill Creek Real Estate | Debbie Welch",
      description: "Local guide to buying and selling homes in Bothell and Mill Creek, WA, from a Snohomish County broker."
    },
    everettMukilteo: {
      title: "Everett & Mukilteo Real Estate | Debbie Welch",
      description: "Local guide to buying and selling homes in Everett and Mukilteo, WA, including Boeing and Naval Station Everett buyers."
    },
    lakeStevens: {
      title: "Lake Stevens WA Real Estate Guide | Debbie Welch",
      description: "Buying or selling in Lake Stevens, WA? Local market insight on neighborhoods, schools, and lake-area homes."
    },
    marysville: {
      title: "Marysville WA Real Estate Guide | Debbie Welch",
      description: "Local guide to buying and selling homes in Marysville, WA, from a longtime Snohomish County broker."
    },
    snohomish: {
      title: "Snohomish WA Real Estate Guide | Debbie Welch",
      description: "Buying or selling in Snohomish, WA? Historic charm, acreage, and growing communities from a local broker."
    },
    stanwoodCamano: {
      title: "Stanwood & Camano Real Estate | Debbie Welch",
      description: "Local guide to buying and selling homes in Stanwood and on Camano Island, WA, from a Snohomish County broker."
    }
  }
};
