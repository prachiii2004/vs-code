import AppLayout from "@/components/layout/AppLayout";
import { Image, HardDrive, FolderOpen, Share2, Edit, Download, Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockImages } from "@/data/mock-images";

const stats = [
  { label: "Total Media", value: "2,847", icon: Image, change: "+12%" },
  { label: "Storage Used", value: "14.2 GB", icon: HardDrive, change: "68%" },
  { label: "Projects", value: "23", icon: FolderOpen, change: "+3" },
  { label: "Shared Files", value: "156", icon: Share2, change: "+8" },
];

const Dashboard = () => {
  return (
    <AppLayout title="Dashboard">
      <div className="space-y-8 max-w-7xl">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-5 bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-colors animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="text-xs font-ui text-muted-foreground">{stat.change}</span>
              </div>
              <p className="text-2xl font-heading font-medium">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-ui">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Uploads */}
        <div>
          <h2 className="text-xl font-heading font-medium mb-4">Recent Uploads</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {mockImages.slice(0, 6).map((img, i) => (
              <div
                key={img.id}
                className="group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
                style={{ animationDelay: `${(i + 4) * 0.08}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="icon" className="h-8 w-8 bg-card/80 hover:bg-card text-foreground rounded-lg">
                      <Edit className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 bg-card/80 hover:bg-card text-foreground rounded-lg">
                      <Download className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 bg-card/80 hover:bg-card text-foreground rounded-lg">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 bg-card/80 hover:bg-card text-destructive rounded-lg">
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-ui font-medium truncate">{img.title}</p>
                  <p className="text-[10px] text-muted-foreground">{img.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
