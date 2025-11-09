import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917827495003?text=Hi,%20I'm%20interested%20in%20Sobha%20pre-launch%20(Sector%201,%20Greater%20Noida%20West).%20Please%20share%20price%20and%20brochure%20details.";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-luxury-gold-dark to-luxury-gold shadow-lg hover:shadow-[0_0_40px_hsl(45_68%_52%/0.8)] hover:scale-110 transition-all duration-300 group animate-[pulse_3s_ease-in-out_infinite]"
      aria-label="Contact on WhatsApp"
      style={{
        boxShadow: '0 0 20px hsl(45 68% 52% / 0.4), 0 0 40px hsl(45 68% 52% / 0.2)'
      }}
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-luxury-black" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-luxury-gold"></span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
