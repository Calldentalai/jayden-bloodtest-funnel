"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export function WhatsAppChat() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

  // Format phone number for WhatsApp (remove spaces, add country code)
  const phoneNumber = SITE_CONFIG.phone.replace(/\s/g, "");
  const whatsappUrl = `https://wa.me/61${phoneNumber.replace(/^0/, "")}?text=${encodeURIComponent("Hi Jayden, I'm interested in the comprehensive blood test. Can you tell me more?")}`;

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="relative bg-card rounded-xl shadow-lg border border-border/50 p-3 max-w-[200px] animate-fade-in">
          <button
            onClick={() => setIsTooltipVisible(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3 text-muted-foreground" />
          </button>
          <p className="text-xs text-foreground font-medium">Questions?</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Chat with Jayden on WhatsApp
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
    </div>
  );
}
