import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";

const UnderConstructionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-secondary text-white py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
        <AlertTriangle className="h-4 w-4 flex-shrink-0" />
        <span>This site is currently under construction. Some features may not be available yet.</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default UnderConstructionBanner;
