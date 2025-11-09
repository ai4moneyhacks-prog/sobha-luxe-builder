import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import LocationSection from "@/components/LocationSection";
import GalleryFormSection from "@/components/GalleryFormSection";
import ComplianceFooter from "@/components/ComplianceFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HighlightsSection />
        <LocationSection />
        <GalleryFormSection />
      </main>
      <ComplianceFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
