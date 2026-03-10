export interface GalleryImage {
  id: string;
  title: string;
  url: string;
  tags: string[];
  date: string;
  size: string;
  width: number;
  height: number;
  views: number;
  isPublic: boolean;
  collection?: string;
}

const unsplashImages: GalleryImage[] = [
  { id: "1", title: "Mountain Sunrise", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600", tags: ["nature", "landscape", "mountains"], date: "2026-03-08", size: "3.2 MB", width: 600, height: 400, views: 234, isPublic: true, collection: "Travel Photos" },
  { id: "2", title: "Ocean Waves", url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600", tags: ["nature", "ocean", "water"], date: "2026-03-07", size: "2.8 MB", width: 600, height: 800, views: 189, isPublic: true, collection: "Travel Photos" },
  { id: "3", title: "City Night", url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600", tags: ["city", "night", "urban"], date: "2026-03-06", size: "4.1 MB", width: 600, height: 450, views: 567, isPublic: false, collection: "Design Work" },
  { id: "4", title: "Forest Path", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600", tags: ["nature", "forest", "green"], date: "2026-03-05", size: "2.5 MB", width: 600, height: 900, views: 312, isPublic: true },
  { id: "5", title: "Portrait Study", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600", tags: ["portrait", "people", "studio"], date: "2026-03-04", size: "1.9 MB", width: 600, height: 750, views: 445, isPublic: false, collection: "Design Work" },
  { id: "6", title: "Abstract Art", url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600", tags: ["abstract", "art", "color"], date: "2026-03-03", size: "3.7 MB", width: 600, height: 600, views: 678, isPublic: true, collection: "AI Generated Art" },
  { id: "7", title: "Desert Dunes", url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600", tags: ["nature", "desert", "landscape"], date: "2026-03-02", size: "2.1 MB", width: 600, height: 400, views: 198, isPublic: true, collection: "Travel Photos" },
  { id: "8", title: "Food Photography", url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600", tags: ["food", "photography", "studio"], date: "2026-03-01", size: "1.8 MB", width: 600, height: 500, views: 890, isPublic: true },
  { id: "9", title: "Architecture Detail", url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600", tags: ["architecture", "city", "design"], date: "2026-02-28", size: "4.5 MB", width: 600, height: 850, views: 234, isPublic: false, collection: "Design Work" },
  { id: "10", title: "Flower Macro", url: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600", tags: ["nature", "flower", "macro"], date: "2026-02-27", size: "2.3 MB", width: 600, height: 600, views: 156, isPublic: true },
  { id: "11", title: "Street Art", url: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=600", tags: ["art", "street", "urban"], date: "2026-02-26", size: "3.0 MB", width: 600, height: 450, views: 423, isPublic: true, collection: "AI Generated Art" },
  { id: "12", title: "Northern Lights", url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=600", tags: ["nature", "aurora", "night"], date: "2026-02-25", size: "5.2 MB", width: 600, height: 400, views: 1023, isPublic: true, collection: "Travel Photos" },
];

export const mockImages = unsplashImages;

export const collections = [
  { id: "c1", name: "Travel Photos", count: 4, cover: unsplashImages[0].url },
  { id: "c2", name: "Design Work", count: 3, cover: unsplashImages[2].url },
  { id: "c3", name: "AI Generated Art", count: 2, cover: unsplashImages[5].url },
];
