import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Share2, Edit, X, Eye } from "lucide-react";
import { GalleryImage } from "@/data/mock-images";

interface ImagePreviewModalProps {
  image: GalleryImage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImagePreviewModal = ({ image, open, onOpenChange }: ImagePreviewModalProps) => {
  if (!image) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-2xl border-border/50">
        <div className="grid md:grid-cols-[1fr_320px]">
          {/* Image */}
          <div className="bg-muted/30 flex items-center justify-center min-h-[400px] max-h-[70vh]">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details panel */}
          <div className="p-6 space-y-6 border-l border-border/50">
            <div>
              <h2 className="text-xl font-heading font-medium mb-1">{image.title}</h2>
              <p className="text-sm text-muted-foreground font-body">{image.date}</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-ui">File Size</span>
                <span className="font-ui">{image.size}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-ui">Dimensions</span>
                <span className="font-ui">{image.width} × {image.height}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-ui">Views</span>
                <span className="font-ui flex items-center gap-1"><Eye className="w-3 h-3" />{image.views}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-ui">Visibility</span>
                <Badge variant={image.isPublic ? "default" : "secondary"} className="text-xs">
                  {image.isPublic ? "Public" : "Private"}
                </Badge>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground font-ui mb-2">Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {image.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs font-ui border-secondary/50 text-secondary-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <Button variant="gradient" className="w-full">
                <Download className="w-4 h-4 mr-2" /> Download
              </Button>
              <Button variant="outline" className="w-full">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
              <Button variant="ghost-muted" className="w-full">
                <Edit className="w-4 h-4 mr-2" /> Edit
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImagePreviewModal;
