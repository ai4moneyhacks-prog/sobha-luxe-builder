import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import clubhouseImage from "@/assets/clubhouse.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import landscapeImage from "@/assets/landscape.jpg";
import heroImage from "@/assets/hero-building.jpg";

const images = [
  { src: heroImage, alt: "Exterior View" },
  { src: clubhouseImage, alt: "Clubhouse & Amenities" },
  { src: livingRoomImage, alt: "Premium Living Room" },
  { src: landscapeImage, alt: "Landscaped Gardens" },
];

const GalleryFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    budget: "",
    bhk: "",
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreed) {
      alert("Please agree to be contacted via WhatsApp or phone.");
      return;
    }

    const message = `Hi, I'm ${formData.name}. Interested in Sobha pre-launch (Sector 1, Greater Noida West). Budget ${formData.budget}. ${formData.bhk ? `Looking for ${formData.bhk}.` : ''} Please share brochure & booking details.`;
    const whatsappURL = `https://wa.me/917827495003?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Gallery */}
          <div className="text-center space-y-8 fade-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              Experience the Sobha Lifestyle
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-lg border-2 border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300 group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-luxury-black/90 to-transparent p-4">
                    <p className="text-foreground font-medium">{image.alt}</p>
                    <p className="text-xs text-muted-foreground">Artist's Impression · Representative Only</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border border-luxury-gold/30 rounded-xl p-8 md:p-12 fade-up">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Get the Brochure & Booking Details
              </h3>
              <p className="text-muted-foreground">
                Submit your details and receive exclusive information instantly on WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-luxury-gold/20 focus:border-luxury-gold text-foreground"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-foreground">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="bg-secondary/50 border-luxury-gold/20 focus:border-luxury-gold text-foreground"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-foreground">Budget</Label>
                  <Input
                    id="budget"
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="bg-secondary/50 border-luxury-gold/20 focus:border-luxury-gold text-foreground"
                    placeholder="e.g., ₹2.5 Cr"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bhk" className="text-foreground">BHK Preference</Label>
                  <Input
                    id="bhk"
                    type="text"
                    value={formData.bhk}
                    onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                    className="bg-secondary/50 border-luxury-gold/20 focus:border-luxury-gold text-foreground"
                    placeholder="e.g., 3 BHK"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="agreed"
                  checked={formData.agreed}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, agreed: checked as boolean })
                  }
                  className="mt-1 border-luxury-gold/50 data-[state=checked]:bg-luxury-gold data-[state=checked]:border-luxury-gold"
                />
                <Label 
                  htmlFor="agreed" 
                  className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                >
                  I agree to be contacted via WhatsApp or phone.
                </Label>
              </div>

              <Button 
                type="submit"
                variant="luxury" 
                size="xl"
                className="w-full"
              >
                Send My Enquiry on WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryFormSection;
