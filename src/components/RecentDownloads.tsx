import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Clock, Music } from "lucide-react";

interface RecentDownload {
  id: string;
  title: string;
  duration: string;
  downloadedAt: string;
  thumbnail: string;
}

const RecentDownloads = () => {
  // Mock recent downloads data
  const recentDownloads: RecentDownload[] = [
    {
      id: "1",
      title: "Epic Music Mix 2024",
      duration: "4:32",
      downloadedAt: "2 minutes ago",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg"
    },
    {
      id: "2", 
      title: "Chill Lofi Beats",
      duration: "2:18",
      downloadedAt: "15 minutes ago",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg"
    },
    {
      id: "3",
      title: "Rock Anthem Collection",
      duration: "6:45",
      downloadedAt: "1 hour ago", 
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg"
    }
  ];

  if (recentDownloads.length === 0) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="text-audio-primary" size={20} />
        <h2 className="text-xl font-semibold">Recent Downloads</h2>
      </div>

      <div className="space-y-4">
        {recentDownloads.map((download) => (
          <Card key={download.id} className="p-4 bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-smooth">
            <div className="flex items-center gap-4">
              <img 
                src={download.thumbnail} 
                alt={download.title}
                className="w-16 h-12 object-cover rounded-md"
              />
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium line-clamp-1">{download.title}</h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                  <span>{download.duration}</span>
                  <span>•</span>
                  <span>{download.downloadedAt}</span>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline" 
                className="border-border/50 hover:bg-audio-primary/10 hover:border-audio-primary/50 transition-smooth"
              >
                <Download size={14} className="mr-1" />
                Redownload
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-6">
        <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
          <Music className="mr-2 h-4 w-4" />
          View All Downloads
        </Button>
      </div>
    </div>
  );
};

export default RecentDownloads;