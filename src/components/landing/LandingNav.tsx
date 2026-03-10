import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Aperture } from "lucide-react";

const LandingNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Aperture className="w-7 h-7 text-primary" />
          <span className="text-xl font-heading font-medium">VisionCanvas</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/gallery" className="text-sm font-ui text-muted-foreground hover:text-foreground transition-colors">Gallery</Link>
          <Link to="/upload" className="text-sm font-ui text-muted-foreground hover:text-foreground transition-colors">Upload</Link>
          <Link to="/editor" className="text-sm font-ui text-muted-foreground hover:text-foreground transition-colors">Editor</Link>
        </div>
        
        <Button variant="gradient" size="sm" asChild>
          <Link to="/dashboard">Get Started</Link>
        </Button>
      </div>
    </nav>
  );
};

export default LandingNav;
