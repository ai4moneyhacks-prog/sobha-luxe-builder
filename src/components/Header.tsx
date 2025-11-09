import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917827495003?text=Hi,%20I'm%20interested%20in%20Sobha%20pre-launch%20(Sector%201,%20Greater%20Noida%20West).%20Please%20share%20price%20and%20brochure%20details.";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-luxury-black to-card border-b border-luxury-gold/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-heading font-bold text-luxury-gold">
          SOBHA
        </div>
        <Button 
          variant="luxury" 
          size="lg" 
          className="hidden md:inline-flex"
          asChild
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </Button>
        <Button 
          variant="luxury" 
          size="sm" 
          className="md:hidden"
          asChild
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
