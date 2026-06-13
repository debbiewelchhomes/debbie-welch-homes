import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
  };
  return <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Column */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">Contact</h3>
            <div className="space-y-3 text-sm">
              <p className="font-semibold">Debbie Welch, Realtor®</p>
              <p>Debbie Welch Homes at eXp Realty</p>
              <p className="text-primary-foreground/80">45+ year Snohomish County resident and local homeowner/investor</p>
              <p>Serving Snohomish County, Washington and Surrounding Areas</p>
              <p className="pt-4">
                <strong>Call or Text:</strong>{" "}
                <a href="tel:3606318148" className="hover:text-accent transition-colors">(360) 631-8148</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:debbie@debbiewelchhomes.com" className="hover:text-accent transition-colors">
                  debbie@debbiewelchhomes.com
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">
              Get the Local Scoop
            </h3>
            <p className="text-sm mb-6 text-primary-foreground/90">
              Once or twice a month, I share Snohomish County market updates, local events, and practical tips for homeowners, buyers, and downsizers. No spam, no pressure, just helpful info.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required className="bg-primary-foreground text-primary border-primary-foreground/20" />
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                Join the Newsletter
              </Button>
            </form>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">Latest Posts</h3>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Downsizing Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Military Relocation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  First-Time Buyers
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <a href="/privacy" className="text-sm hover:text-accent transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>
            © {new Date().getFullYear()} Debbie Welch Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;