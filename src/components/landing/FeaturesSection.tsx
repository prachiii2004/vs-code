import { Sparkles, Upload, Tags, Crop, FolderOpen, Share2 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Image Generation",
    description: "Generate stunning images using text prompts with state-of-the-art AI models.",
  },
  {
    icon: Upload,
    title: "Upload & Share",
    description: "Upload photos and share them using public or private links with fine-grained control.",
  },
  {
    icon: Tags,
    title: "AI Metadata",
    description: "Automatically generate tags and descriptions for images using intelligent analysis.",
  },
  {
    icon: Crop,
    title: "Image Editing",
    description: "Professional editing tools — crop, resize, filters, brightness and contrast adjustments.",
  },
  {
    icon: FolderOpen,
    title: "Gallery Management",
    description: "Organize images into collections and folders for streamlined creative workflows.",
  },
  {
    icon: Share2,
    title: "Smart Sharing",
    description: "Generate shareable links, set privacy controls, and share to social platforms.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-light mb-4">
            Everything you need, <span className="gradient-text font-medium">nothing you don't</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A focused set of tools designed to enhance your creative workflow without overwhelming it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-medium mb-2">{feature.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
