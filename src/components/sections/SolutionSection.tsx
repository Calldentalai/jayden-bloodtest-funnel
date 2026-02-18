"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

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

const rowVariants = {
  hidden: { opacity: 0, x: 0 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

export function SolutionSection() {
  return (
    <section className="snap-section py-10 sm:py-12 lg:py-16 bg-card">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Test, <span className="text-primary">Don&apos;t Guess.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blood test that goes beyond &quot;normal&quot; to show you
            what optimal health really looks like
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {/* Headers */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-muted/50 rounded-xl p-3 sm:p-6 text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-muted-foreground mb-0.5">
                Standard Lab Test
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground/70">Doctor&apos;s office</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-primary/10 rounded-xl p-3 sm:p-6 text-center border-2 border-primary/30"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-primary mb-0.5">
                Our Blood Test
              </h3>
              <p className="text-xs sm:text-sm text-primary/70">Functional Medicine</p>
            </motion.div>

            {/* Comparison Rows */}
            {comparisons.map((row, index) => (
              <motion.div
                key={index}
                className="contents"
                custom={index}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-background rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 border border-border/50 transition-colors hover:border-destructive/20"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    {row.normal}
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-background rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 border border-primary/20 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-foreground font-medium">
                    {row.optimal}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Arrow indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-8"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>See the difference</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
