"use client";

import { Instagram, Mail, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToProducts } from "@/lib/utils/scroll";
import { SITE_CONFIG, CALENDLY_CONFIG } from "@/lib/config";
import { useInView } from "@/lib/hooks/useInView";

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: SITE_CONFIG.social.instagram,
  },
  {
    icon: Globe,
    label: "Website",
    href: SITE_CONFIG.social.mainWebsite,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
  },
];

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

export function Footer() {
  const { ref, isInView } = useInView();

  return (
    <footer className="bg-card border-t border-border/50 pb-24 md:pb-0" style={{ scrollSnapAlign: "start" }}>
      {/* Final CTA Section - More compact */}
      <div className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-xl mx-auto ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Ready to Get Real Answers?
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Take the first step toward understanding your body.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="default"
                onClick={scrollToProducts}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Order Your Test
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="default"
                variant="outline"
                onClick={() => window.open(CALENDLY_CONFIG.url, "_blank", "noopener,noreferrer")}
                className="border-primary/30 text-foreground hover:bg-primary/5 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Book Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content - Compact */}
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Brand */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-foreground">Jayden Pileggi</h3>
              <p className="text-xs text-muted-foreground">
                Functional Medicine Practitioner
              </p>
            </div>

            {/* Center - Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary hover:scale-110 active:scale-95 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Right - Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright - Single line */}
          <div className="mt-6 pt-6 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Jayden Pileggi Functional Medicine. All rights reserved.
              <span className="hidden sm:inline"> • This site is not endorsed by Facebook/Meta.</span>
            </p>
            <p className="text-[10px] text-muted-foreground/60 mt-2 max-w-2xl mx-auto">
              Disclaimer: The information provided through this service is for educational purposes and is not intended to replace professional medical advice.
              Always consult with a qualified healthcare provider before making health decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
