"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToProducts } from "@/lib/utils/scroll";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleExitIntent = useCallback(
    (e: MouseEvent) => {
      if (dismissed) return;
      // Trigger when mouse moves to top of viewport (leaving page)
      if (e.clientY <= 5) {
        setIsVisible(true);
      }
    },
    [dismissed]
  );

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("exitPopupDismissed")) {
      setDismissed(true);
      return;
    }

    // Only add on desktop (no exit intent on mobile)
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    // Delay adding listener to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleExitIntent);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleExitIntent);
    };
  }, [handleExitIntent]);

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
    sessionStorage.setItem("exitPopupDismissed", "true");
  };

  const handleCTA = () => {
    handleDismiss();
    scrollToProducts();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Special offer before you go"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={handleDismiss}
      />

      {/* Popup */}
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in-up border border-border/50">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Gift className="w-7 h-7 text-primary" />
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-2">
            Wait — Before You Go!
          </h3>

          <p className="text-muted-foreground mb-6">
            Did you know that <span className="text-foreground font-medium">standard blood tests miss up to 70% of biomarkers</span> that could explain how you're feeling?
          </p>

          <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/10">
            <p className="text-sm text-foreground font-medium mb-1">
              Your comprehensive test includes:
            </p>
            <p className="text-xs text-muted-foreground">
              100+ biomarkers, 80+ page report, personal consultation with Jayden, and a 30-day money-back guarantee.
            </p>
          </div>

          <Button
            size="lg"
            onClick={handleCTA}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] mb-3"
          >
            See Test Options
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <button
            onClick={handleDismiss}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            No thanks, I'll pass
          </button>
        </div>
      </div>
    </div>
  );
}
