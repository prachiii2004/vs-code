import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, Edit, Download, Trash2, ExternalLink, Eye } from "lucide-react";
import { mockImages, GalleryImage } from "@/data/mock-images";
import ImagePreviewModal from "@/components/gallery/ImagePreviewModal";

const allTags = Array.from(new Set(mockImages.flatMap((img) => img.tags)));

const Gallery = () => {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<GalleryImage | null>(null);

  const filtered = mockImages.filter((img) => {
    const matchSearch = !search || img.title.toLowerCase().includes(search.toLowerCase()) || img.tags.some((t) => t.includes(search.toLowerCase()));
    const matchTag = !selectedTag || img.tags.includes(selectedTag);
    return matchSearch && matchTag;
  });

  return (
    <AppLayout title="Gallery">
      <div className="space-y-6 max-w-7xl">
        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search images..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/50 bg-card text-sm font-ui focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Badge
              variant={!selectedTag ? "default" : "outline"}
              className="cursor-pointer text-xs font-ui"
              onClick={() => setSelectedTag(null)}
            >
              All
            </Badge>
            {allTags.slice(0, 8).map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer text-xs font-ui"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filtered.map((img, i) => (
            <div
              key={img.id}
              className="masonry-item group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={() => setPreviewImage(img)}
            >
              <div className="overflow-hidden">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  style={{ aspectRatio: `${img.width}/${img.height}` }}
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex flex-col items-center justify-center">
                <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="ghost" size="icon" className="h-9 w-9 bg-card/90 hover:bg-card text-foreground rounded-lg" onClick={(e) => { e.stopPropagation(); setPreviewImage(img); }}>
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 bg-card/90 hover:bg-card text-foreground rounded-lg" onClick={(e) => e.stopPropagation()}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 bg-card/90 hover:bg-card text-foreground rounded-lg" onClick={(e) => e.stopPropagation()}>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 bg-card/90 hover:bg-card text-foreground rounded-lg" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 bg-card/90 hover:bg-card text-destructive rounded-lg" onClick={(e) => e.stopPropagation()}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-3">
                <p className="text-sm font-ui font-medium truncate">{img.title}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground">{img.date}</p>
                  <div className="flex gap-1">
                    {img.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground font-ui">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImagePreviewModal
        image={previewImage}
        open={!!previewImage}
        onOpenChange={(open) => !open && setPreviewImage(null)}
      />
    </AppLayout>
  );
};

export default Gallery;
