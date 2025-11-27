import { useState } from "react";
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
    { name: "Buying", href: "#buying" },
    { name: "Selling", href: "#selling" },
    { name: "Relocation", href: "#relocation" },
    { name: "Downsizing", href: "#downsizing" },
  ];

  const areas = [
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
          {/* Logo */}
          <a href="/" className="flex flex-col">
            <span className="font-heading text-xl md:text-2xl font-bold text-primary">
              Debbie Welch Homes
            </span>
            <span className="font-script text-sm text-secondary">
              Helping You Home
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-secondary transition-colors">
              Home
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-secondary transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name}>
                    <a href={service.href} className="w-full">
                      {service.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#properties" className="text-foreground hover:text-secondary transition-colors">
              Properties
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-secondary transition-colors">
                Areas <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border max-h-96 overflow-y-auto">
                {areas.map((area) => (
                  <DropdownMenuItem key={area}>
                    <a href="#neighborhoods" className="w-full">
                      {area}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#blog" className="text-foreground hover:text-secondary transition-colors">
              Blog
            </a>

            <a href="#about" className="text-foreground hover:text-secondary transition-colors">
              About
            </a>

            <Button asChild variant="default" className="bg-secondary hover:bg-secondary/90">
              <a href="#contact">Contact</a>
            </Button>
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
              <a href="#home" className="text-foreground hover:text-secondary transition-colors">
                Home
              </a>
              <div className="flex flex-col gap-2 pl-4">
                <span className="text-sm font-semibold text-muted-foreground">Services</span>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="text-foreground hover:text-secondary transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <a href="#properties" className="text-foreground hover:text-secondary transition-colors">
                Properties
              </a>
              <a href="#blog" className="text-foreground hover:text-secondary transition-colors">
                Blog
              </a>
              <a href="#about" className="text-foreground hover:text-secondary transition-colors">
                About
              </a>
              <Button asChild variant="default" className="bg-secondary hover:bg-secondary/90">
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
