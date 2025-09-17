import HeroSection from "@/components/HeroSection";
import YouTubeConverter from "@/components/YouTubeConverter";
import RecentDownloads from "@/components/RecentDownloads";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <YouTubeConverter />
      <RecentDownloads />
      
      {/* Footer */}
      <footer className="border-t border-border/30 py-8 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Made with ❤️ for music lovers everywhere
          </p>
          <div className="flex justify-center gap-6 text-xs text-muted-foreground">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
