import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import ChatButton from "@/components/ChatButton";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Buying from "./pages/Buying";
import Selling from "./pages/Selling";
import Relocation from "./pages/Relocation";
import Downsizing from "./pages/Downsizing";
import Listings from "./pages/Listings";
import SnohomishCounty from "./pages/areas/SnohomishCounty";
import Arlington from "./pages/areas/Arlington";
import BothellMillCreek from "./pages/areas/BothellMillCreek";
import EverettMukilteo from "./pages/areas/EverettMukilteo";
import LakeStevens from "./pages/areas/LakeStevens";
import Marysville from "./pages/areas/Marysville";
import Snohomish from "./pages/areas/Snohomish";
import StanwoodCamano from "./pages/areas/StanwoodCamano";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/buying" element={<Buying />} />
            <Route path="/services/selling" element={<Selling />} />
            <Route path="/services/relocation" element={<Relocation />} />
            <Route path="/services/downsizing" element={<Downsizing />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/areas/snohomish-county" element={<SnohomishCounty />} />
            <Route path="/areas/arlington" element={<Arlington />} />
            <Route path="/areas/bothell-mill-creek" element={<BothellMillCreek />} />
            <Route path="/areas/everett-mukilteo" element={<EverettMukilteo />} />
            <Route path="/areas/lake-stevens" element={<LakeStevens />} />
            <Route path="/areas/marysville" element={<Marysville />} />
            <Route path="/areas/snohomish" element={<Snohomish />} />
            <Route path="/areas/stanwood-camano" element={<StanwoodCamano />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ChatButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
