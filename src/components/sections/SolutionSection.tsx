"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    normal: "Tests 20-30 biomarkers",
    optimal: "Tests 100+ biomarkers",
  },
  {
    normal: "Uses broad 'normal' ranges",
    optimal: "Uses narrow 'optimal' ranges",
  },
  {
    normal: "Based on sick population averages",
    optimal: "Based on thriving individuals",
  },
  {
    normal: "Detects disease after it starts",
    optimal: "Catches dysfunction early",
  },
  {
    normal: "Generic recommendations",
    optimal: "Personalized action plan",
  },
];

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Test, <span className="text-primary">Don't Guess.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blood test that goes beyond "normal" to show you
            what optimal health really looks like
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* Headers */}
            <div className="bg-muted/50 rounded-xl p-4 sm:p-6 text-center">
              <h3 className="font-semibold text-lg text-muted-foreground mb-1">
                Standard Lab Test
              </h3>
              <p className="text-sm text-muted-foreground/70">Doctor's office</p>
            </div>
            <div className="bg-primary/10 rounded-xl p-4 sm:p-6 text-center border-2 border-primary/30">
              <h3 className="font-semibold text-lg text-primary mb-1">
                Our Blood Test
              </h3>
              <p className="text-sm text-primary/70">Functional Medicine</p>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="contents"
              >
                <div className="bg-background rounded-lg p-4 flex items-center gap-3 border border-border/50">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    {row.normal}
                  </span>
                </div>
                <div className="bg-background rounded-lg p-4 flex items-center gap-3 border border-primary/20">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground font-medium">
                    {row.optimal}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
