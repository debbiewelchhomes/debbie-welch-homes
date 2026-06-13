import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ExpRealty = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="eXp Realty | Debbie Welch Homes"
        description="Learn more about eXp Realty and how Debbie Welch partners with this innovative real estate brokerage to serve Snohomish County clients."
        canonical="/exp-realty"
      />
      <Navigation />
      <main>
        {/* Add your eXp Realty content here */}
      </main>
      <Footer />
    </div>
  );
};

export default ExpRealty;
