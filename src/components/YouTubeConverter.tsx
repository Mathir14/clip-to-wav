import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Download, Link, Loader2 } from "lucide-react";
import VideoPreview from "./VideoPreview";
import DownloadProgress from "./DownloadProgress";
import { useToast } from "@/hooks/use-toast";

const YouTubeConverter = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState<any>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const isValidYouTubeUrl = (url: string) => {
    const youtubeRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeRegex.test(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a YouTube URL",
        variant: "destructive",
      });
      return;
    }

    if (!isValidYouTubeUrl(url)) {
      toast({
        title: "Invalid URL", 
        description: "Please enter a valid YouTube URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Mock API call - replace with actual backend integration
    setTimeout(() => {
      setVideoData({
        title: "Amazing Music Video - Artist Name",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        duration: "3:32",
        views: "1.2M views",
        channel: "Music Channel"
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    // Mock download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          toast({
            title: "Download Complete!",
            description: "Your MP3 file has been downloaded",
            variant: "default",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <Card className="p-8 bg-gradient-card shadow-card border-border/50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="youtube-url" className="text-sm font-medium">
              YouTube Video URL
            </label>
            <div className="relative">
              <Link className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="youtube-url"
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="pl-10 h-12 bg-input/50 border-border/50 focus:border-primary transition-smooth"
                disabled={isLoading || isDownloading}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 bg-gradient-primary hover:shadow-glow transition-smooth font-medium"
            disabled={isLoading || isDownloading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing Video...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Get Video Info
              </>
            )}
          </Button>
        </form>

        {videoData && !isDownloading && (
          <div className="mt-8">
            <VideoPreview {...videoData} onDownload={handleDownload} />
          </div>
        )}

        {isDownloading && (
          <div className="mt-8">
            <DownloadProgress progress={downloadProgress} />
          </div>
        )}
      </Card>
    </div>
  );
};

export default YouTubeConverter;