import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Buying", href: "/services/buying" },
    { name: "Selling", href: "/services/selling" },
    { name: "Relocation", href: "/services/relocation" },
    { name: "Downsizing", href: "/services/downsizing" },
  ];

  const areas = [
    "Snohomish County",
    "Arlington",
    "Bothell & Mill Creek",
    "Everett & Mukilteo",
    "Lake Stevens",
    "Marysville",
    "Snohomish",
    "Stanwood & Camano",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation - Reordered with center logo space */}
          <div className="hidden lg:flex items-center justify-center gap-6 flex-1">
            <Link to="/" className="text-foreground hover:text-secondary transition-colors">
              Home
            </Link>
            
            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link to="/services" className="text-foreground hover:text-secondary transition-colors">
                  Services
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-foreground hover:text-secondary transition-colors">
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border-border z-50">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.name}>
                        <Link to={service.href} className="w-full">
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <Link to="/" className="text-foreground hover:text-secondary transition-colors">
              Listings
            </Link>

            <Link to="/" className="text-foreground hover:text-secondary transition-colors">
              Search
            </Link>

            {/* Center Logo Area */}
            <div className="flex-shrink-0 w-32 h-12 mx-6 flex items-center justify-center">
              <div className="text-xs text-muted-foreground">Logo</div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-secondary transition-colors">
                Areas <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border max-h-96 overflow-y-auto">
                {areas.map((area) => (
                  <DropdownMenuItem key={area}>
                    <Link to="/" className="w-full">
                      {area}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/" className="text-foreground hover:text-secondary transition-colors">
              Blog
            </Link>

            <Link to="/" className="text-foreground hover:text-secondary transition-colors">
              About
            </Link>

            <Link to="/" className="text-foreground hover:text-secondary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <div className="text-center text-xs text-muted-foreground mb-2">Logo</div>
              
              <Link to="/" className="text-foreground hover:text-secondary transition-colors">
                Home
              </Link>
              <div className="flex flex-col gap-2 pl-4">
                <Link to="/services" className="text-sm font-semibold text-muted-foreground hover:text-secondary transition-colors">
                  Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="text-foreground hover:text-secondary transition-colors pl-4"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link to="/" className="text-foreground hover:text-secondary transition-colors">
                Listings
              </Link>
              <Link to="/" className="text-foreground hover:text-secondary transition-colors">
                Search
              </Link>
              <div className="flex flex-col gap-2 pl-4">
                <span className="text-sm font-semibold text-muted-foreground">Areas</span>
                {areas.map((area) => (
                  <Link
                    key={area}
                    to="/"
                    className="text-foreground hover:text-secondary transition-colors"
                  >
                    {area}
                  </Link>
                ))}
              </div>
              <Link to="/" className="text-foreground hover:text-secondary transition-colors">
                Blog
              </Link>
              <Link to="/" className="text-foreground hover:text-secondary transition-colors">
                About
              </Link>
              <Link to="/" className="text-foreground hover:text-secondary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
