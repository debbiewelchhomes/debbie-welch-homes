import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatPanel = ({ isOpen, onClose }: ChatPanelProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thank you! I've received your message and will follow up as soon as I can.",
    });
    
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", contactMethod: "", message: "" });
    
    // Close panel after 3 seconds
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/20 z-[9998]"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="fixed bottom-0 right-0 w-full md:w-[420px] md:bottom-6 md:right-6 bg-background rounded-t-2xl md:rounded-2xl shadow-2xl z-[9999] animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-heading text-2xl text-[#3c3e4f]">Chat with Debbie</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Not a bot—just me.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <p className="text-lg font-medium text-[#3c3e4f] mb-2">
                Thank you!
              </p>
              <p className="text-sm text-muted-foreground">
                I've received your message and will follow up as soon as I can.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                Send a quick message with your question or plans, and I'll follow up personally by text or email.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="chat-name" className="text-sm font-medium">
                    Name *
                  </Label>
                  <Input
                    id="chat-name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="chat-email" className="text-sm font-medium">
                    Email *
                  </Label>
                  <Input
                    id="chat-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="chat-phone" className="text-sm font-medium">
                    Phone
                  </Label>
                  <Input
                    id="chat-phone"
                    type="tel"
                    placeholder="(360) 555-1234"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="chat-contact-method" className="text-sm font-medium">
                    Preferred contact method
                  </Label>
                  <Select
                    value={formData.contactMethod}
                    onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
                  >
                    <SelectTrigger id="chat-contact-method" className="mt-1.5">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="chat-message" className="text-sm font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="chat-message"
                    placeholder="Tell me about your question or plans..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="mt-1.5 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  style={{
                    backgroundColor: '#6e808e',
                    color: '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3c3e4f';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#6e808e';
                  }}
                >
                  Send message
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatPanel;
