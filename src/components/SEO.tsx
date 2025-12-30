import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  jsonLd?: object;
}

const SEO = ({ 
  title, 
  description, 
  canonical,
  type = "website",
  jsonLd
}: SEOProps) => {
  const baseUrl = "https://debbie-welch-homes.lovable.app";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined;
  const fullTitle = title.includes("Debbie Welch") ? title : `${title} | Debbie Welch Homes`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
