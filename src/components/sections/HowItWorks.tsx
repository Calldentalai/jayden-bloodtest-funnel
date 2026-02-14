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
    color: "from-primary to-primary/70",
  },
  {
    icon: Package,
    step: "02",
    title: "Receive Confirmation",
    description: "You'll receive a confirmation email with instructions based on your location.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Building2,
    step: "03",
    title: "Complete Your Blood Draw",
    description: "Follow your location-specific instructions to complete your blood draw.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    step: "04",
    title: "Get Your Results",
    description: "In 3-4 weeks, receive your 80+ page report plus personal consultation.",
    color: "from-amber-500 to-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 16,
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: 0.4,
    },
  },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="snap-section py-8 lg:py-12 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3"
          >
            <ArrowRight className="w-4 h-4" />
            Simple Process
          </motion.div>
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="relative group"
              >
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <motion.div
                    variants={lineVariants}
                    className="hidden lg:block absolute top-8 sm:top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-border to-border/30 origin-left"
                  />
                )}

                <div className="flex flex-col items-center text-center">
                  {/* Step number & Icon */}
                  <div className="relative mb-3 sm:mb-5">
                    <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      style={{ background: `linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`, opacity: 0.1 }}
                    >
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    {/* Actual icon on top */}
                    <div className="absolute inset-0 w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <motion.span
                      className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center justify-center shadow-md"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.step}
                    </motion.span>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-sm sm:text-lg text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-6 sm:mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg hover:shadow-xl transition-all"
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
