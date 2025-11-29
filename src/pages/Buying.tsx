import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Buying = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="font-heading text-4xl md:text-6xl text-primary mb-8">
            Buying
          </h1>
          <p className="font-body text-foreground text-lg">
            Buying page content coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Buying;
