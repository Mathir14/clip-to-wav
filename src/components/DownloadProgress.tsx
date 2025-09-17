import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Music, Loader2 } from "lucide-react";

interface DownloadProgressProps {
  progress: number;
}

const DownloadProgress = ({ progress }: DownloadProgressProps) => {
  const getStatusText = () => {
    if (progress < 30) return "Extracting audio...";
    if (progress < 60) return "Converting to MP3..."; 
    if (progress < 90) return "Optimizing quality...";
    return "Almost done!";
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-card border-border/50">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 bg-audio-primary/20 rounded-full">
            {progress < 100 ? (
              <Loader2 className="text-audio-primary animate-spin" size={24} />
            ) : (
              <Music className="text-audio-success" size={24} />
            )}
          </div>
          <div>
            <h3 className="font-semibold">
              {progress < 100 ? getStatusText() : "Download Complete!"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {progress < 100 ? "Please wait while we process your audio" : "Your MP3 is ready"}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="text-sm text-muted-foreground">
            {progress}% complete
          </div>
        </div>

        {progress < 100 && (
          <div className="text-xs text-muted-foreground">
            This usually takes 10-30 seconds depending on video length
          </div>
        )}
      </div>
    </Card>
  );
};

export default DownloadProgress;