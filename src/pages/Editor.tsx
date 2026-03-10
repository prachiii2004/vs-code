import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Crop, RotateCcw, Sun, Contrast, Palette, Type,
  Eraser, Wand2, Download, Undo, Redo, ZoomIn, ZoomOut,
  Layers, Paintbrush
} from "lucide-react";
import { mockImages } from "@/data/mock-images";

const tools = [
  { icon: Crop, label: "Crop" },
  { icon: RotateCcw, label: "Transform" },
  { icon: Palette, label: "Filters" },
  { icon: Eraser, label: "Remove BG" },
  { icon: Wand2, label: "AI Enhance" },
  { icon: Type, label: "Text" },
  { icon: Paintbrush, label: "Draw" },
  { icon: Layers, label: "Layers" },
];

const Editor = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [brightness, setBrightness] = useState([100]);
  const [contrast, setContrast] = useState([100]);
  const [saturation, setSaturation] = useState([100]);
  const currentImage = mockImages[0];

  return (
    <AppLayout title="Image Editor">
      <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-8rem)]">
        {/* Canvas area */}
        <div className="flex-1 relative bg-muted/30 rounded-2xl overflow-hidden flex items-center justify-center border border-border/50">
          {/* Top bar */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <div className="flex gap-1">
              <Button variant="ghost-muted" size="icon" className="h-8 w-8 bg-card/80 rounded-lg">
                <Undo className="w-4 h-4" />
              </Button>
              <Button variant="ghost-muted" size="icon" className="h-8 w-8 bg-card/80 rounded-lg">
                <Redo className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost-muted" size="icon" className="h-8 w-8 bg-card/80 rounded-lg">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <span className="text-xs font-ui bg-card/80 px-2 py-1 rounded-lg text-muted-foreground">100%</span>
              <Button variant="ghost-muted" size="icon" className="h-8 w-8 bg-card/80 rounded-lg">
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg transition-all duration-300"
            style={{
              filter: `brightness(${brightness[0]}%) contrast(${contrast[0]}%) saturate(${saturation[0]}%)`,
            }}
          />

          {/* Floating tool lozenge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 p-1.5 bg-card/90 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl">
            {tools.map((tool) => (
              <Button
                key={tool.label}
                variant={activeTool === tool.label ? "default" : "ghost-muted"}
                size="icon"
                className={`h-10 w-10 rounded-xl transition-all duration-200 ${activeTool === tool.label ? "gradient-primary" : ""}`}
                onClick={() => setActiveTool(activeTool === tool.label ? null : tool.label)}
                title={tool.label}
              >
                <tool.icon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </div>

        {/* Right panel - only visible when a tool is active */}
        {activeTool && (
          <div className="w-full lg:w-72 bg-card rounded-2xl border border-border/50 p-5 space-y-6 animate-slide-in-left">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-heading font-medium">{activeTool}</h3>
              <Button variant="ghost-muted" size="sm" onClick={() => setActiveTool(null)} className="text-xs">
                Close
              </Button>
            </div>

            {(activeTool === "Filters" || activeTool === "AI Enhance") && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-ui">
                    <span className="text-muted-foreground">Brightness</span>
                    <span>{brightness[0]}%</span>
                  </div>
                  <Slider value={brightness} onValueChange={setBrightness} min={0} max={200} step={1} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-ui">
                    <span className="text-muted-foreground">Contrast</span>
                    <span>{contrast[0]}%</span>
                  </div>
                  <Slider value={contrast} onValueChange={setContrast} min={0} max={200} step={1} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-ui">
                    <span className="text-muted-foreground">Saturation</span>
                    <span>{saturation[0]}%</span>
                  </div>
                  <Slider value={saturation} onValueChange={setSaturation} min={0} max={200} step={1} />
                </div>
              </div>
            )}

            {activeTool === "Remove BG" && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-body">
                  AI will automatically detect and remove the background from your image.
                </p>
                <Button variant="gradient" className="w-full">
                  <Wand2 className="w-4 h-4 mr-2" /> Remove Background
                </Button>
              </div>
            )}

            {activeTool === "Crop" && (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-body">Select an aspect ratio or draw a custom crop area.</p>
                <div className="grid grid-cols-3 gap-2">
                  {["Free", "1:1", "4:3", "16:9", "3:2", "2:3"].map((ratio) => (
                    <Button key={ratio} variant="outline" size="sm" className="text-xs">{ratio}</Button>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-border/50">
              <Button variant="gradient" className="w-full">
                <Download className="w-4 h-4 mr-2" /> Export
              </Button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Editor;
