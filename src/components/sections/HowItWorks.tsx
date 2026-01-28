"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Package, Building2, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToProducts } from "@/lib/utils/scroll";

const steps = [
  {
    icon: ShoppingCart,
    step: "01",
    title: "Order Your Test Kit",
    description: "Select male or female blood test and complete your order online.",
  },
  {
    icon: Package,
    step: "02",
    title: "Receive at Home",
    description: "Your test kit is delivered directly to your door within days.",
  },
  {
    icon: Building2,
    step: "03",
    title: "Visit a Lab",
    description: "Take your kit to a local partner lab for a quick blood draw.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Get Your Results",
    description: "In 3-4 weeks, receive your 80+ page report plus personal consultation.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your comprehensive blood analysis is simple — four easy steps
            to understanding your health
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="relative"
              >
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border" />
                )}

                <div className="flex flex-col items-center text-center">
                  {/* Step number & Icon */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              Start Your Health Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
