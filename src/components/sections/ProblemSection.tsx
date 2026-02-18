"use client";

import { motion } from "framer-motion";
import { AlertCircle, HelpCircle, Clock, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    title: "\"Normal\" Doesn't Mean Optimal",
    description:
      "You're told your blood work is 'normal' but you still feel exhausted, foggy, and far from your best.",
    accent: "from-red-500/20 to-red-500/5",
  },
  {
    icon: HelpCircle,
    title: "Guessing With Supplements",
    description:
      "You take supplements but don't know if they're actually helping or if you even need them.",
    accent: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Clock,
    title: "Waiting Until It's Too Late",
    description:
      "You're tired of waiting until something breaks to finally get answers about your health.",
    accent: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: TrendingDown,
    title: "Treating Symptoms, Not Causes",
    description:
      "You want to optimize your health proactively, not just treat symptoms after they appear.",
    accent: "from-rose-500/20 to-rose-500/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 16,
    },
  },
};

export function ProblemSection() {
  return (
    <section className="snap-section py-10 sm:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4"
          >
            <AlertCircle className="w-4 h-4" />
            Sound Familiar?
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Does This Sound{" "}
            <span className="text-primary">Familiar?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Most people don&apos;t realize their &quot;normal&quot; blood work could be hiding
            the real story about their health
          </p>
        </motion.div>

        {/* Pain Point Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl border border-border/50 bg-card p-5 sm:p-6 transition-all duration-300 hover:border-destructive/30 hover:shadow-lg hover:shadow-destructive/5">
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${point.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-foreground mb-1.5 group-hover:text-destructive transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>

                {/* Decorative corner glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-destructive/10 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-6 sm:mt-8"
        >
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-card border border-border/50">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground max-w-3xl mx-auto">
              Standard lab tests compare you to the{" "}
              <span className="text-destructive font-semibold">average sick population</span>.
              <br className="hidden sm:block" />
              We compare you to{" "}
              <span className="text-primary font-semibold">optimal health standards</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
