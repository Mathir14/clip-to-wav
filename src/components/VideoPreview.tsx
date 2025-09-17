import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Play, Clock, Eye } from "lucide-react";

interface VideoPreviewProps {
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  channel: string;
  onDownload: () => void;
}

const VideoPreview = ({ title, thumbnail, duration, views, channel, onDownload }: VideoPreviewProps) => {
  return (
    <Card className="p-6 bg-gradient-card shadow-card border-border/50">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Thumbnail */}
        <div className="relative flex-shrink-0">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full md:w-48 h-32 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
            <Play className="text-white" size={32} />
          </div>
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        </div>

        {/* Video Info */}
        <div className="flex-1 space-y-3">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{channel}</p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye size={14} />
              {views}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              {duration}
            </div>
          </div>

          <div className="pt-2">
            <Button 
              onClick={onDownload}
              className="w-full md:w-auto bg-gradient-secondary hover:shadow-glow transition-smooth font-medium"
            >
              <Download className="mr-2 h-4 w-4" />
              Download MP3
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoPreview;