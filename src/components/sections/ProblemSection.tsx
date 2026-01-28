"use client";

import { motion } from "framer-motion";
import { AlertCircle, HelpCircle, Clock, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
  {
    icon: AlertCircle,
    title: "\"Normal\" Doesn't Mean Optimal",
    description:
      "You're told your blood work is 'normal' but you still feel exhausted, foggy, and far from your best.",
  },
  {
    icon: HelpCircle,
    title: "Guessing With Supplements",
    description:
      "You take supplements but don't know if they're actually helping or if you even need them.",
  },
  {
    icon: Clock,
    title: "Waiting Until It's Too Late",
    description:
      "You're tired of waiting until something breaks to finally get answers about your health.",
  },
  {
    icon: TrendingDown,
    title: "Treating Symptoms, Not Causes",
    description:
      "You want to optimize your health proactively, not just treat symptoms after they appear.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Does This Sound{" "}
            <span className="text-primary">Familiar?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most people don't realize their "normal" blood work could be hiding
            the real story about their health
          </p>
        </motion.div>

        {/* Pain Point Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {painPoints.map((point, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-border/50 bg-card hover:border-primary/30 transition-colors duration-300">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-destructive" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl sm:text-2xl font-medium text-foreground max-w-3xl mx-auto">
            Standard lab tests compare you to the{" "}
            <span className="text-destructive">average sick population</span>.
            <br className="hidden sm:block" />
            We compare you to{" "}
            <span className="text-primary">optimal health standards</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
