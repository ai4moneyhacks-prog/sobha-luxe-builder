import { Button } from "@/components/ui/button";
import { MapPin, Home, IndianRupee, CreditCard, Sparkles, Leaf, Train, Search } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const WHATSAPP_URL = "https://wa.me/917827495003?text=Hi,%20I'm%20interested%20in%20Sobha%20pre-launch%20(Sector%201,%20Greater%20Noida%20West).%20Please%20share%20price%20and%20brochure%20details.";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[100vh] md:min-h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(14, 14, 14, 0.65), rgba(14, 14, 14, 0.75)), url(${heroImage})`
      }}
    >
      {/* Floating Mini-Trust Ribbon */}
      <div className="absolute top-20 right-4 md:top-24 md:right-6 z-10 fade-up">
        <p className="text-[11px] md:text-xs text-luxury-gold/60 font-serif italic animate-pulse">
          Authorised Channel Partner: Noida Estate Homes
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 fade-up">
          {/* Pre-launch Badge */}
          <div className="inline-flex items-center gap-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full px-6 py-2 text-luxury-gold text-sm font-medium backdrop-blur-sm">
            🏗️ Pre-Launch Now Open | RERA Coming Soon
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
            SOBHA – Luxury 2, 3 & 4 BHK Residences
          </h1>
          
          <h2 className="text-lg md:text-2xl text-muted-foreground font-light">
            in Sector 1, Greater Noida West
          </h2>

          <p className="text-sm md:text-lg text-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
            Signature Sobha quality, premium amenities, and strategic connectivity — curated for modern families & investors.
          </p>

          {/* Snapshot Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-5 md:mt-8">
            <div className="bg-card/50 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-4 md:p-6 space-y-2">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mx-auto" />
              <p className="text-foreground font-medium text-xs md:text-base">Sector 1, Greater Noida West</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-4 md:p-6 space-y-2">
              <Home className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mx-auto" />
              <p className="text-foreground font-medium text-xs md:text-base">2, 3 & 4 BHK Apartments</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-4 md:p-6 space-y-2">
              <IndianRupee className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mx-auto" />
              <p className="text-foreground font-medium text-xs md:text-base">Starting ₹2.25 Cr+</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-4 md:p-6 space-y-2">
              <CreditCard className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mx-auto" />
              <p className="text-foreground font-medium text-xs md:text-base">Flexible Payment Plan: 25:25:25:25</p>
            </div>
          </div>

          {/* Trust Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="flex items-center justify-center gap-3 bg-secondary/30 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-luxury-gold flex-shrink-0" />
              <span className="text-foreground text-xs md:text-sm font-medium">Premium Sobha Quality</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-secondary/30 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <Leaf className="w-4 h-4 md:w-5 md:h-5 text-luxury-gold flex-shrink-0" />
              <span className="text-foreground text-xs md:text-sm font-medium">World-Class Amenities</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-secondary/30 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <Train className="w-4 h-4 md:w-5 md:h-5 text-luxury-gold flex-shrink-0" />
              <span className="text-foreground text-xs md:text-sm font-medium">Strategic Connectivity</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-2 mt-5 md:mt-8">
            <Button 
              variant="luxury" 
              size="lg"
              className="w-full md:w-auto md:h-14 md:px-10 md:text-lg"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Search className="w-4 h-4 md:w-5 md:h-5" />
                Get Pre-Launch Price on WhatsApp
              </a>
            </Button>
            
            {/* Golden Ribbon - Sticky on scroll */}
            <div className="sticky top-16 z-20 py-2">
              <p className="text-[13px] font-semibold text-luxury-gold">
                ⚡ Limited Pre-Launch Slots Open — Enquire Now on WhatsApp
              </p>
            </div>
            
            <p className="text-xs md:text-sm text-muted-foreground">
              Instant reply – takes less than 15 seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
