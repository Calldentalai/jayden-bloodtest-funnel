"use client";

import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToProducts } from "@/lib/utils/scroll";
import { VIDEO_CONFIG } from "@/lib/config";
import { useInView } from "@/lib/hooks/useInView";

export function VideoSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="snap-section py-8 lg:py-12 bg-card">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-6 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch Jayden explain how comprehensive blood testing can transform
            your understanding of your health
          </p>
        </div>

        {/* Video Container */}
        <div
          className={`max-w-4xl mx-auto ${isInView ? "animate-fade-in-up delay-200" : "opacity-0"}`}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-border/50 shadow-xl">
            {VIDEO_CONFIG.hasVideo && VIDEO_CONFIG.vimeoId ? (
              <iframe
                src={`https://player.vimeo.com/video/${VIDEO_CONFIG.vimeoId}?h=0&title=0&byline=0&portrait=0`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={VIDEO_CONFIG.title}
              />
            ) : (
              <VideoPlaceholder />
            )}
          </div>

          {/* Video Caption */}
          <p
            className={`text-center text-sm text-muted-foreground mt-4 ${isInView ? "animate-fade-in delay-400" : "opacity-0"}`}
          >
            3-minute overview of the comprehensive blood testing process
          </p>
        </div>

        {/* CTA Below Video */}
        <div
          className={`text-center mt-6 ${isInView ? "animate-fade-in-up delay-400" : "opacity-0"}`}
        >
          <p className="text-lg text-foreground font-medium mb-4">
            Ready to Get Started?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Your Blood Test
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/10">
      <button
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-transform"
        aria-label="Play video"
      >
        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-1" fill="currentColor" />
      </button>

      <div className="mt-4 sm:mt-6 text-center px-6">
        <p className="text-foreground font-semibold text-base sm:text-lg">
          Video Coming Soon
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm mt-2 max-w-sm mx-auto">
          Jayden will walk you through the blood testing process
        </p>
      </div>
    </div>
  );
}
