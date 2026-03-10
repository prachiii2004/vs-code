import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const AppLayout = ({ children, title }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center justify-between border-b border-border/50 px-4 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-muted-foreground" />
              {title && <h1 className="text-lg font-heading font-medium">{title}</h1>}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost-muted" size="icon">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost-muted" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost-muted" size="icon" className="rounded-full">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
