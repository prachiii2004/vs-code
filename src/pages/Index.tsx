import LandingNav from "@/components/landing/LandingNav";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import { Aperture } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <div className="pt-16">
        <HeroSection />
        <FeaturesSection />
        
        {/* Footer */}
        <footer className="py-12 border-t border-border/50">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Aperture className="w-5 h-5" />
              <span className="text-sm font-ui">VisionCanvas © 2026</span>
            </div>
            <p className="text-xs text-muted-foreground font-body">
              A premium AI-powered creative workspace
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
