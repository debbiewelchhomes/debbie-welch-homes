import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Contact Column */}
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

          {/* Stay in Touch Column */}
          <div>
            <h3 className="font-heading h-card mb-6">Stay in Touch</h3>
            <p className="text-sm mb-6 text-primary-foreground/90">
              Have a question about the Snohomish County market, or want a custom report for the area you're
              watching? Send me a note and I'll follow up personally within one business day.
            </p>
            <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/contact">Contact Debbie</Link>
            </Button>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-heading h-card mb-6">From the Blog</h3>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <Link to="/blog?q=downsizing" className="hover:text-accent transition-colors">
                  Downsizing Tips
                </Link>
              </li>
              <li>
                <Link to="/blog?q=military" className="hover:text-accent transition-colors">
                  Military Relocation
                </Link>
              </li>
              <li>
                <Link to="/blog?q=first-time" className="hover:text-accent transition-colors">
                  First-Time Buyers
                </Link>
              </li>
            </ul>

            <div className="flex flex-col items-start gap-3">
              <Link to="/resources/trusted-partners" className="text-sm hover:text-accent transition-colors">
                Trusted Local Partners
              </Link>
              <Link to="/privacy-policy" className="text-sm hover:text-accent transition-colors">
                Privacy Policy
              </Link>
            </div>

          </div>

          <div>
            <h3 className="font-heading h-card mb-6">For Real Estate Agents</h3>
            <p className="text-sm mb-4 text-primary-foreground/90">
              Curious about eXp Realty or looking for practical support as you grow your business?
            </p>
            <Link to="/about/exp-realty" className="text-sm font-semibold hover:text-accent transition-colors">
              Work With Me at eXp Realty
            </Link>
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
