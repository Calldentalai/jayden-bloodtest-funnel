"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToProducts, scrollToDiscoveryCall } from "@/lib/utils/scroll";
import { SITE_CONFIG } from "@/lib/config";

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
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      {/* Final CTA Section - More compact */}
      <div className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Ready to Get Real Answers?
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Take the first step toward understanding your body.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="default"
                  onClick={scrollToProducts}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                >
                  Order Your Test
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="default"
                  variant="outline"
                  onClick={scrollToDiscoveryCall}
                  className="border-primary/30 text-foreground hover:bg-primary/5"
                >
                  Book Discovery Call
                </Button>
              </motion.div>
            </div>
          </motion.div>
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
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
