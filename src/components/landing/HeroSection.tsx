import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroPreview from "@/assets/hero-preview.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
      
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-ui animate-fade-in">
              <Sparkles className="w-4 h-4 text-secondary" />
              AI-Powered Creative Studio
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light tracking-tight leading-[1.1] animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Next-Gen
              <br />
              <span className="gradient-text font-medium">Creative Studio</span>
            </h1>
            
            <p className="text-lg font-body text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Upload, edit, enhance, and manage your images with powerful AI tools in one creative workspace.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="gradient" size="lg" asChild>
                <Link to="/dashboard">
                  Create New
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/gallery">Browse Gallery</Link>
              </Button>
            </div>
          </div>
          
          {/* Right preview card */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
              <img 
                src={heroPreview} 
                alt="VisionCanvas AI Studio Preview" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl gradient-primary opacity-20 blur-xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-secondary/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
