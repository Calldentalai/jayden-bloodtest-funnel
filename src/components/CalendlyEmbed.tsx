"use client";

import { useEffect } from "react";
import { CALENDLY_CONFIG } from "@/lib/config";

interface CalendlyEmbedProps {
  className?: string;
}

export function CalendlyEmbed({ className = "" }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  if (!CALENDLY_CONFIG.url) {
    return (
      <div className={`bg-muted/50 rounded-xl p-8 text-center ${className}`}>
        <p className="text-muted-foreground text-sm">
          Calendly embed placeholder
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          Update CALENDLY_CONFIG.url in src/lib/config.ts
        </p>
      </div>
    );
  }

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={CALENDLY_CONFIG.url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

// Popup button version
export function CalendlyButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const openCalendly = () => {
    if (CALENDLY_CONFIG.url && typeof window !== "undefined") {
      // @ts-ignore - Calendly is loaded via script
      window.Calendly?.initPopupWidget({ url: CALENDLY_CONFIG.url });
    }
  };

  return (
    <button onClick={openCalendly} className={className}>
      {children}
    </button>
  );
}
