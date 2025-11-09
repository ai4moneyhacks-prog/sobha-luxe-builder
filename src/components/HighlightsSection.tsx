import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917827495003?text=Hi,%20I'm%20interested%20in%20Sobha%20pre-launch%20(Sector%201,%20Greater%20Noida%20West).%20Please%20share%20price%20and%20brochure%20details.";

const highlights = [
  "Exclusive Pre-Launch Opportunity",
  "Spacious 2, 3 & 4 BHK Layouts",
  "Expected Possession: 2028",
  "Early Buyer Benefits Available"
];

const HighlightsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12 fade-up">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              Project Highlights & Floor Plans
            </h2>
            <p className="text-lg text-muted-foreground">(On Request)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-secondary/50 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-6 hover:border-luxury-gold/40 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                <span className="text-foreground font-medium text-lg">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Price and floor plans are shared exclusively on WhatsApp.
            </p>
            <Button 
              variant="luxuryOutline" 
              size="lg"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                View Details on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
