import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Buying from "./pages/Buying";
import Selling from "./pages/Selling";
import Relocation from "./pages/Relocation";
import Downsizing from "./pages/Downsizing";
import Listings from "./pages/Listings";
import NotFound from "./pages/NotFound";

// Declare Facebook SDK types
declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Facebook Messenger Chat Plugin - SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v12.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Set attributes on chatbox after mount
    const chatbox = document.getElementById('fb-customer-chat');
    if (chatbox) {
      chatbox.setAttribute("page_id", "102493361706173");
      chatbox.setAttribute("attribution", "biz_inbox");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <style>{`
          .fb-customerchat {
            z-index: 9999 !important;
          }
        `}</style>
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
        {/* Facebook Messenger Chat Plugin */}
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
