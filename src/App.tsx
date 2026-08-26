import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import ChatButton from "@/components/ChatButton";
import Index from "./pages/Index";

const Services = lazy(() => import("./pages/Services"));
const Buying = lazy(() => import("./pages/Buying"));
const Selling = lazy(() => import("./pages/Selling"));
const Relocation = lazy(() => import("./pages/Relocation"));
const Downsizing = lazy(() => import("./pages/Downsizing"));
const Listings = lazy(() => import("./pages/Listings"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const About = lazy(() => import("./pages/About"));
const ExpRealty = lazy(() => import("./pages/ExpRealty"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Resources = lazy(() => import("./pages/Resources"));
const TrustedPartners = lazy(() => import("./pages/TrustedPartners"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const SnohomishCounty = lazy(() => import("./pages/areas/SnohomishCounty"));
const Arlington = lazy(() => import("./pages/areas/Arlington"));
const BothellMillCreek = lazy(() => import("./pages/areas/BothellMillCreek"));
const EverettMukilteo = lazy(() => import("./pages/areas/EverettMukilteo"));
const LakeStevens = lazy(() => import("./pages/areas/LakeStevens"));
const Marysville = lazy(() => import("./pages/areas/Marysville"));
const Snohomish = lazy(() => import("./pages/areas/Snohomish"));
const StanwoodCamano = lazy(() => import("./pages/areas/StanwoodCamano"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Suspense fallback={<main className="min-h-screen bg-background" aria-label="Loading page" />}>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/buying" element={<Buying />} />
      <Route path="/services/selling" element={<Selling />} />
      <Route path="/services/relocation" element={<Relocation />} />
      <Route path="/services/downsizing" element={<Downsizing />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/trusted-partners" element={<TrustedPartners />} />
      <Route path="/resources/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/exp-realty" element={<ExpRealty />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/areas/snohomish-county" element={<SnohomishCounty />} />
      <Route path="/areas/arlington" element={<Arlington />} />
      <Route path="/areas/bothell-mill-creek" element={<BothellMillCreek />} />
      <Route path="/areas/everett-mukilteo" element={<EverettMukilteo />} />
      <Route path="/areas/lake-stevens" element={<LakeStevens />} />
      <Route path="/areas/marysville" element={<Marysville />} />
      <Route path="/areas/snohomish" element={<Snohomish />} />
      <Route path="/areas/stanwood-camano" element={<StanwoodCamano />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);

export const AppShell = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppRoutes />
        <ChatButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;

