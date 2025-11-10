import { Button } from "@/components/ui/button";
import { MapPin, Home, Sparkles, IndianRupee } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const WHATSAPP_URL = "https://wa.me/917827495003?text=Hi,%20I'm%20interested%20in%20Sobha%20pre-launch%20(Sector%201,%20Greater%20Noida%20West).%20Please%20share%20price%20and%20brochure%20details.";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${heroImage})`
      }}
    >
      {/* Floating Ribbon - Pre-Launch Badge */}
      <div className="w-full bg-gradient-to-r from-luxury-gold-dark via-luxury-gold to-luxury-gold-dark py-2 animate-[slideInFromTop_0.6s_ease-out]">
        <p className="text-center text-luxury-black text-xs md:text-[13px] font-bold tracking-wide">
          🏗️ Pre-Launch Now Open | RERA Coming Soon
        </p>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-6 md:py-12">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-5 fade-up">
            
            {/* Trust Line */}
            <div className="flex flex-col items-center gap-1">
              <p className="text-[11px] md:text-xs text-foreground/85 font-serif italic">
                Authorised Channel Partner: Noida Estate Homes
              </p>
              <div className="h-[1px] w-[30px] bg-luxury-gold/60"></div>
            </div>

            {/* Main Heading Block */}
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Experience the Art of Living — By SOBHA
              </h1>
              
              <h2 className="text-base md:text-xl lg:text-2xl text-foreground/90 font-light max-w-3xl mx-auto">
                Luxury 2, 3 & 4 BHK Residences in Sector 1, Greater Noida West
              </h2>
            </div>

            {/* 4 Key Highlights Cards - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6 max-w-3xl mx-auto">
              <div className="bg-luxury-gold/5 border border-luxury-gold/60 rounded-xl p-4 md:p-5 space-y-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-200">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-luxury-gold mx-auto" />
                <p className="text-foreground text-xs md:text-sm font-medium leading-snug">
                  Prime Location<br />Sector 1, Greater Noida West
                </p>
              </div>
              
              <div className="bg-luxury-gold/5 border border-luxury-gold/60 rounded-xl p-4 md:p-5 space-y-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-200">
                <Home className="w-5 h-5 md:w-6 md:h-6 text-luxury-gold mx-auto" />
                <p className="text-foreground text-xs md:text-sm font-medium leading-snug">
                  Luxury Residences<br />2, 3 & 4 BHK
                </p>
              </div>
              
              <div className="bg-luxury-gold/5 border border-luxury-gold/60 rounded-xl p-4 md:p-5 space-y-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-200">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-luxury-gold mx-auto" />
                <p className="text-foreground text-xs md:text-sm font-medium leading-snug">
                  Sobha Signature Quality<br />World-Class Amenities
                </p>
              </div>
              
              <div className="bg-luxury-gold/5 border border-luxury-gold/60 rounded-xl p-4 md:p-5 space-y-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-200">
                <IndianRupee className="w-5 h-5 md:w-6 md:h-6 text-luxury-gold mx-auto" />
                <p className="text-foreground text-xs md:text-sm font-medium leading-snug">
                  Starting Price<br />₹2.25 Cr+
                </p>
              </div>
            </div>

            {/* Pre-CTA Microcopy */}
            <div className="pt-2 md:pt-3">
              <p className="text-[13px] md:text-sm font-semibold text-luxury-gold">
                ⚡ Limited Pre-Launch Slots Open — Enquire Now on WhatsApp
              </p>
            </div>

            {/* Primary CTA Button */}
            <div className="space-y-2">
              <Button 
                variant="luxury" 
                size="lg"
                className="w-[80%] md:w-auto md:h-14 md:px-12 md:text-lg rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] animate-[pulse_3s_ease-in-out_infinite]"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Get Pre-Launch Price on WhatsApp
                </a>
              </Button>
              
              {/* Microtext Below Button */}
              <p className="text-xs md:text-sm text-muted-foreground/80">
                Instant Reply — Takes Less Than 15 Seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
