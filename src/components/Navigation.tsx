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
    { name: "Downsizing & Life Transitions", href: "/services/downsizing" },
    { name: "Military PCS & Relocation", href: "/services/relocation" },
  ];

  const areas = [
    { name: "Snohomish County", href: "/areas/snohomish-county" },
    { name: "Lake Stevens", href: "/areas/lake-stevens" },
    { name: "Everett & Mukilteo", href: "/areas/everett-mukilteo" },
    { name: "Marysville", href: "/areas/marysville" },
    { name: "Arlington", href: "/areas/arlington" },
    { name: "Bothell & Mill Creek", href: "/areas/bothell-mill-creek" },
    { name: "Snohomish", href: "/areas/snohomish" },
    { name: "Stanwood & Camano Island", href: "/areas/stanwood-camano" },
  ];

  const resources = [
    { name: "Resource Library", href: "/resources" },
    { name: "Buyer & Seller Guides", href: "/resources#guides" },
    {
      name: "Local Market Reports",
      href: "https://debbiewelch.exprealty.com/pages/market-reports",
      external: true,
    },
    { name: "Trusted Local Partners", href: "/resources/trusted-partners" },
    { name: "Frequently Asked Questions", href: "/resources/faq" },
    { name: "Mortgage Calculator", href: "https://debbiewelch.exprealty.com/resources/mortgage-calculator/", external: true },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-center h-24">
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-between w-full max-w-7xl mx-auto">
            {/* Left Navigation Group */}
            <div className="flex items-center gap-6 flex-1 justify-end pr-6 whitespace-nowrap">
              <Link to="/" className="text-foreground hover:text-secondary transition-colors">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <div className="flex items-center gap-1">
                  <Link to="/services" className="text-foreground hover:text-secondary transition-colors">
                    Services
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger aria-label="Open Services menu" className="text-foreground hover:text-secondary transition-colors">
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

              {/* Areas Dropdown */}
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

              {/* Search Homes */}
              <a
                href="https://debbiewelch.exprealty.com/index?advanced=1&display=Snohomish&areas%5B%5D=county:Snohomish:wa&beds=0&baths=0&min=0&max=100000000&minacres=0&maxacres=50000&minfootage=0&maxfootage=30000&walkscore=&yearbuilt=0&types%5B%5D=2&types%5B%5D=3&types%5B%5D=1&sortby=listings.listingdate+DESC&ppc=Loveable+Website&addht=LoveableWebsite&agency_photos=&view_timing=2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Search Homes on the eXp Realty site"
                className="text-foreground hover:text-secondary transition-colors"
              >
                Search Homes
              </a>
            </div>

            {/* Center Logo */}
            <Link to="/" className="flex-shrink-0 px-4">
              <img src={logo} alt="Debbie Welch Homes at eXp Realty" className="h-14 w-auto" />
            </Link>

            {/* Right Navigation Group */}
            <div className="flex items-center gap-6 flex-1 justify-start pl-6 whitespace-nowrap">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-secondary transition-colors">
                  Resources <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-border z-50">
                  {resources.map((resource) => (
                    <DropdownMenuItem key={resource.name}>
                      {resource.external ? (
                        <a href={resource.href} target="_blank" rel="noopener noreferrer" className="w-full">{resource.name}</a>
                      ) : (
                        <Link to={resource.href} className="w-full">{resource.name}</Link>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/about" className="text-foreground hover:text-secondary transition-colors">
                About
              </Link>

              <Link to="/contact" className="text-foreground hover:text-secondary transition-colors">
                Contact
              </Link>

              <Button size="sm" className="bg-secondary text-white hover:bg-secondary/90" asChild>
                <a href="https://cal.com/debbie.welch.homes" target="_blank" rel="noopener noreferrer">
                  Book a Free Consult
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Header */}
          <Link to="/" className="xl:hidden absolute left-0" onClick={() => setMobileMenuOpen(false)}>
            <img src={logo} alt="Debbie Welch Homes at eXp Realty" className="h-11 w-auto" />
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden absolute right-0 p-2" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-secondary transition-colors"
              >
                Home
              </Link>

              <div className="flex flex-col gap-2 pl-4">
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-muted-foreground hover:text-secondary transition-colors"
                >
                  Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={() => setMobileMenuOpen(false)}
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
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-foreground hover:text-secondary transition-colors pl-4"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>

              <a
                href="https://debbiewelch.exprealty.com/index?advanced=1&display=Snohomish&areas%5B%5D=county:Snohomish:wa&beds=0&baths=0&min=0&max=100000000&minacres=0&maxacres=50000&minfootage=0&maxfootage=30000&walkscore=&yearbuilt=0&types%5B%5D=2&types%5B%5D=3&types%5B%5D=1&sortby=listings.listingdate+DESC&ppc=Loveable+Website&addht=LoveableWebsite&agency_photos=&view_timing=2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Search Homes on the eXp Realty site"
                className="text-foreground hover:text-secondary transition-colors"
              >
                Search Homes
              </a>

              <div className="flex flex-col gap-2 pl-4">
                <Link to="/resources" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-muted-foreground hover:text-secondary transition-colors">
                  Resources
                </Link>
                {resources.slice(1).map((resource) =>
                  resource.external ? (
                    <a key={resource.name} href={resource.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-secondary transition-colors pl-4">
                      {resource.name}
                    </a>
                  ) : (
                    <Link key={resource.name} to={resource.href} onClick={() => setMobileMenuOpen(false)} className="text-foreground hover:text-secondary transition-colors pl-4">
                      {resource.name}
                    </Link>
                  ),
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-secondary transition-colors"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-secondary transition-colors"
              >
                Contact
              </Link>

              <Button className="mt-2 bg-secondary text-white hover:bg-secondary/90" asChild>
                <a href="https://cal.com/debbie.welch.homes" target="_blank" rel="noopener noreferrer">
                  Book a Free Consult
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

