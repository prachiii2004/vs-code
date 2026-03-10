import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { User, Bell, Shield, Palette } from "lucide-react";

const SettingsPage = () => {
  return (
    <AppLayout title="Settings">
      <div className="max-w-2xl space-y-6">
        {[
          { icon: User, title: "Profile", desc: "Manage your account details and preferences." },
          { icon: Bell, title: "Notifications", desc: "Configure how you receive updates and alerts." },
          { icon: Shield, title: "Privacy", desc: "Control your data and sharing defaults." },
          { icon: Palette, title: "Appearance", desc: "Customize the look and feel of your workspace." },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-heading font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body mt-0.5">{item.desc}</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        ))}
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
