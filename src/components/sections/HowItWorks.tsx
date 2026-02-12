"use client";

import { ShoppingCart, Package, Building2, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToProducts } from "@/lib/utils/scroll";
import { useInView } from "@/lib/hooks/useInView";

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
    title: "Receive Confirmation",
    description: "You'll receive a confirmation email with instructions based on your location.",
  },
  {
    icon: Building2,
    step: "03",
    title: "Complete Your Blood Draw",
    description: "Follow your location-specific instructions to complete your blood draw.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Get Your Results",
    description: "In 3-4 weeks, receive your 80+ page report plus personal consultation.",
  },
];

export function HowItWorks() {
  const { ref, isInView } = useInView();

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background scroll-mt-16">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your comprehensive blood analysis is simple — four easy steps
            to understanding your health
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${isInView ? `animate-fade-in-up delay-${(index + 1) * 100}` : "opacity-0"}`}
              >
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border" />
                )}

                <div className="flex flex-col items-center text-center">
                  {/* Step number & Icon */}
                  <div className="relative mb-3 sm:mb-4">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-sm sm:text-lg text-foreground mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 ${isInView ? "animate-fade-in-up delay-500" : "opacity-0"}`}
        >
          <Button
            size="lg"
            onClick={scrollToProducts}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Your Health Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
