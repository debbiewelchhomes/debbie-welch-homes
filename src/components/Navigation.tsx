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
import logo from "@/assets/logo-horizontal.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: "Buying", href: "/services/buying" },
    { name: "Selling", href: "/services/selling" },
    { name: "Relocation", href: "/services/relocation" },
    { name: "Downsizing", href: "/services/downsizing" },
  ];

  const areas = [
    { name: "Snohomish County", href: "/areas/snohomish-county" },
    { name: "Arlington", href: "/areas/arlington" },
    { name: "Bothell & Mill Creek", href: "/areas/bothell-mill-creek" },
    { name: "Everett & Mukilteo", href: "/areas/everett-mukilteo" },
    { name: "Lake Stevens", href: "/areas/lake-stevens" },
    { name: "Marysville", href: "/areas/marysville" },
    { name: "Snohomish", href: "/areas/snohomish" },
    { name: "Stanwood & Camano", href: "/areas/stanwood-camano" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-center h-20">
          {/* Desktop Navigation - Logo centered, nav groups on sides */}
          <div className="hidden lg:flex items-center justify-between w-full max-w-7xl mx-auto">
            {/* Left Navigation Group */}
            <div className="flex items-center gap-8 flex-1 justify-end pr-8">
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

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-secondary transition-colors">
                  Areas <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-border max-h-96 overflow-y-auto">
                  {areas.map((area) => (
                    <DropdownMenuItem key={area.name}>
                      <Link to={area.href} className="w-full">
                        {area.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <a 
                href="https://debbiewelch.exprealty.com/index?advanced=1&display=Snohomish&areas%5B%5D=county:Snohomish:wa&beds=0&baths=0&min=0&max=100000000&minacres=0&maxacres=50000&minfootage=0&maxfootage=30000&walkscore=&yearbuilt=0&types%5B%5D=2&types%5B%5D=3&types%5B%5D=1&sortby=listings.listingdate+DESC&ppc=Loveable+Website&addht=LoveableWebsite&agency_photos=&view_timing=2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-secondary transition-colors"
              >
                Search
              </a>
            </div>

            {/* Center Logo */}
            <Link to="/" className="flex-shrink-0 px-4">
              <img 
                src={logo} 
                alt="Debbie Welch Homes at eXp Realty" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Right Navigation Group */}
            <div className="flex items-center gap-8 flex-1 justify-start pl-8">
              <Link to="/listings" className="text-foreground hover:text-secondary transition-colors">
                Listings
              </Link>

              <Link to="/blog" className="text-foreground hover:text-secondary transition-colors">
                Blog
              </Link>

              <Link to="/about" className="text-foreground hover:text-secondary transition-colors">
                About
              </Link>

              <Link to="/contact" className="text-foreground hover:text-secondary transition-colors">
                Contact
              </Link>
            </div>
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
              <div className="flex justify-center mb-4">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img 
                    src={logo} 
                    alt="Debbie Welch Homes at eXp Realty" 
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
              
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
              <div className="flex flex-col gap-2 pl-4">
                <span className="text-sm font-semibold text-muted-foreground">Areas</span>
                {areas.map((area) => (
                  <Link
                    key={area.name}
                    to={area.href}
                    className="text-foreground hover:text-secondary transition-colors"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
              <a 
                href="https://debbiewelch.exprealty.com/index?advanced=1&display=Snohomish&areas%5B%5D=county:Snohomish:wa&beds=0&baths=0&min=0&max=100000000&minacres=0&maxacres=50000&minfootage=0&maxfootage=30000&walkscore=&yearbuilt=0&types%5B%5D=2&types%5B%5D=3&types%5B%5D=1&sortby=listings.listingdate+DESC&ppc=Loveable+Website&addht=LoveableWebsite&agency_photos=&view_timing=2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-secondary transition-colors"
              >
                Search
              </a>
              <Link to="/listings" className="text-foreground hover:text-secondary transition-colors">
                Listings
              </Link>
              <Link to="/blog" className="text-foreground hover:text-secondary transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-foreground hover:text-secondary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-foreground hover:text-secondary transition-colors">
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
