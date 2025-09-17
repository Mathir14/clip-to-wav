import { Music, Headphones, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-hero py-20 px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <Music size={40} className="text-audio-primary" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <Headphones size={36} className="text-audio-secondary" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-pulse delay-2000">
          <Download size={32} className="text-audio-tertiary" />
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow">
              <Music size={32} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              YouTube to MP3
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform any YouTube video into high-quality MP3 audio files. 
            Simple, fast, and completely free.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-xl bg-gradient-card shadow-card border border-border/50">
            <div className="w-12 h-12 bg-audio-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Download className="text-audio-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Fast Downloads</h3>
            <p className="text-sm text-muted-foreground">Extract audio in seconds with our optimized processing</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-card shadow-card border border-border/50">
            <div className="w-12 h-12 bg-audio-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Headphones className="text-audio-secondary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">High Quality</h3>
            <p className="text-sm text-muted-foreground">Get the best audio quality from your favorite videos</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-card shadow-card border border-border/50">
            <div className="w-12 h-12 bg-audio-tertiary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Music className="text-audio-tertiary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Free Forever</h3>
            <p className="text-sm text-muted-foreground">No subscriptions, no limits, just pure audio extraction</p>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
          <p className="text-sm text-destructive-foreground">
            ⚠️ This tool is for educational and personal use only. Please respect YouTube's Terms of Service and copyright laws.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;