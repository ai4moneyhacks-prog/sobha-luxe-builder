import { Button } from "@/components/ui/button";
import { MapPin, Train, GraduationCap, Hospital, ShoppingCart, Navigation, Building2 } from "lucide-react";
import locationMap from "@/assets/location-map.jpg";

const LOCATION_WHATSAPP_URL = "https://wa.me/917827495003?text=Hi,%20please%20share%20Sobha%20project%20location%20details%20and%20nearby%20connectivity%20info.";

const landmarks = [
  { icon: Train, text: "Upcoming Metro Station – 5 mins" },
  { icon: GraduationCap, text: "DPS School – 3 mins" },
  { icon: Hospital, text: "Yatharth Hospital – 10 mins" },
  { icon: ShoppingCart, text: "Gaur City Mall – 7 mins" },
  { icon: Navigation, text: "NH-24 & FNG Expressway – 10 mins" },
  { icon: Building2, text: "Corporate IT Hub – 15 mins" }
];

const LocationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background border-t border-luxury-gold/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12 fade-up">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              Prime Location Advantage & Nearby Landmarks
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-light">
              Located in the heart of Greater Noida West — everything you need within minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Map */}
            <div className="relative rounded-2xl overflow-hidden border border-luxury-gold/20 shadow-[0_0_30px_hsl(45_68%_52%/0.15)]">
              <img 
                src={locationMap} 
                alt="Sobha Project Location Map - Sector 1, Greater Noida West" 
                className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
            </div>

            {/* Right Column - Landmarks List */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {landmarks.map((landmark, index) => {
                  const Icon = landmark.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-4 bg-secondary/30 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-4 hover:border-luxury-gold/40 hover:bg-secondary/40 transition-all duration-300"
                    >
                      <Icon className="w-6 h-6 text-luxury-gold flex-shrink-0" />
                      <span className="text-foreground font-medium text-base md:text-lg">
                        {landmark.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Secondary CTA */}
              <div className="pt-4">
                <Button 
                  variant="luxuryOutline" 
                  size="lg"
                  className="w-full md:w-auto"
                  asChild
                >
                  <a href={LOCATION_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-5 h-5" />
                    View Exact Location on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
