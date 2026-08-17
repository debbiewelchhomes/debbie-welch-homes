import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-muted-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          <div>
            <h3 className="font-heading h-card mb-6">Contact</h3>
            <div className="space-y-3 text-sm">
              <p className="font-semibold">Debbie Welch, Realtor®</p>
              <p>Debbie Welch Homes at eXp Realty</p>
              <p className="text-primary-foreground/80">
                45+ year Snohomish County resident and local homeowner/investor
              </p>
              <p>Serving Snohomish County, Washington</p>
              <p className="pt-4">
                <strong>Call or Text:</strong>{" "}
                <a href="tel:3606318148" className="hover:text-accent transition-colors">
                  (360) 631-8148
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:debbie@debbiewelchhomes.com" className="hover:text-accent transition-colors">
                  debbie@debbiewelchhomes.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-heading h-card mb-6">Helpful Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/resources" className="hover:text-accent transition-colors">Resource Library</Link></li>
              <li><Link to="/resources/trusted-partners" className="hover:text-accent transition-colors">Trusted Local Partners</Link></li>
              <li><Link to="/areas/snohomish-county" className="hover:text-accent transition-colors">Explore Snohomish County</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Debbie</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading h-card mb-6">Stay in Touch</h3>
            <p className="text-sm mb-5 text-primary-foreground/90">
              Have a question about the local market or want a custom report for an area you are watching? Send me a note and I will follow up personally within one business day.
            </p>
            <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white mb-7">
              <Link to="/contact">Contact Debbie</Link>
            </Button>
            <div className="border-t border-primary-foreground/20 pt-5">
              <p className="eyebrow-caps text-primary-foreground/75 mb-2">For Real Estate Agents</p>
              <Link to="/about/exp-realty" className="text-sm font-semibold hover:text-accent transition-colors">
                Learn About Working With Me at eXp
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Debbie Welch Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
