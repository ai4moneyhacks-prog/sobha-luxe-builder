import { Scale, Phone } from "lucide-react";

const ComplianceFooter = () => {
  return (
    <footer className="bg-luxury-black border-t border-luxury-gold/30 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center text-luxury-gold text-sm">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4" />
            <span>RERA Coming Soon</span>
          </div>
          <span className="hidden md:inline">|</span>
          <span>Authorised Channel Partner: Noida Estate Homes</span>
          <span className="hidden md:inline">|</span>
          <a 
            href="tel:+917827495003" 
            className="flex items-center gap-2 hover:text-luxury-gold-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91 7827495003</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ComplianceFooter;
