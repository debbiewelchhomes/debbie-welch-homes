import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    lookingFor: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission - will be wired to actual backend later
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        lookingFor: "",
        message: "",
      });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Script Line */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-4xl md:text-5xl lg:text-6xl text-center font-['Oooh_Baby'] text-[#6e808e]">
            Get in touch…
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-[#e1dfdc] rounded-lg p-8 md:p-12 shadow-sm">
            {/* Heading + Intro */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Cormorant_Garamond'] text-[#3c3e4f] mb-6 text-center">
              Let's Talk About Your Next Move
            </h1>
            
            <p className="text-base md:text-lg font-['Montserrat'] text-foreground mb-8 text-center leading-relaxed">
              Whether you're thinking about buying, selling, downsizing, or relocating to Snohomish County, we can start with a simple conversation. Share a few details below about what you're hoping to do, and I'll follow up personally within one business day.
            </p>

            {/* Contact Details */}
            <div className="mb-10 pb-8 border-b border-[#bcc5c6]">
              <p className="text-sm font-['Montserrat'] font-semibold text-[#3c3e4f] mb-4">
                Reach me directly:
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:360-631-8148" 
                  className="flex items-center gap-3 text-foreground hover:text-[#6e808e] transition-colors font-['Montserrat']"
                >
                  <Phone className="h-4 w-4 text-[#6e808e]" />
                  <span>360-631-8148</span>
                </a>
                <a 
                  href="mailto:debbie@debbiewelchhomes.com" 
                  className="flex items-center gap-3 text-foreground hover:text-[#6e808e] transition-colors font-['Montserrat']"
                >
                  <Mail className="h-4 w-4 text-[#6e808e]" />
                  <span>debbie@debbiewelchhomes.com</span>
                </a>
                <div className="flex items-center gap-3 text-foreground font-['Montserrat']">
                  <MapPin className="h-4 w-4 text-[#6e808e]" />
                  <span>Based in Snohomish County, WA</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-['Montserrat'] font-medium text-[#3c3e4f] mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      className="bg-background font-['Montserrat']"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-['Montserrat'] font-medium text-[#3c3e4f] mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className="bg-background font-['Montserrat']"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-['Montserrat'] font-medium text-[#3c3e4f] mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-background font-['Montserrat']"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-['Montserrat'] font-medium text-[#3c3e4f] mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-background font-['Montserrat']"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lookingFor" className="block text-sm font-['Montserrat'] font-medium text-[#3c3e4f] mb-2">
                    What are you looking for?
                  </label>
                  <Select value={formData.lookingFor} onValueChange={(value) => handleChange("lookingFor", value)}>
                    <SelectTrigger className="bg-background font-['Montserrat']">
                      <SelectValue placeholder="Select one..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buying">Buying</SelectItem>
                      <SelectItem value="selling">Selling</SelectItem>
                      <SelectItem value="relocating">Relocating</SelectItem>
                      <SelectItem value="downsizing">Downsizing</SelectItem>
                      <SelectItem value="exploring">Just Exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-['Montserrat'] font-medium text-[#3c3e4f] mb-2">
                    How can I help? <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="bg-background font-['Montserrat']"
                    placeholder="Tell me a bit about what you're looking for..."
                  />
                </div>

                <p className="text-sm text-muted-foreground font-['Montserrat'] italic">
                  I respect your time and inbox—no spam, ever.
                </p>

                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-6 text-base font-['Montserrat']"
                >
                  Submit
                </Button>
              </form>
            ) : (
              <div className="py-12 text-center">
                <p className="text-xl font-['Montserrat'] text-[#3c3e4f] mb-2">
                  Thank you for reaching out!
                </p>
                <p className="text-base font-['Montserrat'] text-foreground">
                  I'll be in touch within one business day.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Secondary Note */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm md:text-base font-['Montserrat'] text-muted-foreground max-w-2xl mx-auto">
            Prefer email or a quick message instead? You can also reach me through my Facebook page or reply to any of my emails if you're already on my list.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
