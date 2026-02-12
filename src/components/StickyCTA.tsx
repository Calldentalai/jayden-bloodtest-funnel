"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToProducts } from "@/lib/utils/scroll";
import { throttle } from "@/lib/utils/throttle";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useMemo(
    () => throttle(() => setIsVisible(window.scrollY > 600), 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-background/98 backdrop-blur-md border-t border-border/50 p-3 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">30-Day Money-Back Guarantee</span>
            </div>
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            >
              Get Your Blood Test
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
