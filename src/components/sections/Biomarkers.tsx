"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Droplets,
  Activity,
  Zap,
  Shield,
  Pill,
  Flame,
  Brain,
  FlaskConical,
  TrendingUp,
} from "lucide-react";

const categories = [
  {
    icon: Heart,
    title: "Cardiovascular",
    description: "Cholesterol, lipids, heart risk",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-500/10",
    markers: 12,
  },
  {
    icon: Droplets,
    title: "Blood Sugar",
    description: "Glucose, insulin, HbA1c",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/10",
    markers: 8,
  },
  {
    icon: Activity,
    title: "Liver Function",
    description: "Enzymes, proteins, detox",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10",
    markers: 10,
  },
  {
    icon: Zap,
    title: "Thyroid",
    description: "TSH, T3, T4, antibodies",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    markers: 6,
  },
  {
    icon: Shield,
    title: "Immune System",
    description: "WBC, lymphocytes",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    markers: 14,
  },
  {
    icon: Pill,
    title: "Vitamins",
    description: "D, B12, iron, folate",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    markers: 15,
  },
  {
    icon: Brain,
    title: "Kidney",
    description: "Creatinine, eGFR, BUN",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-500/10",
    markers: 8,
  },
  {
    icon: Flame,
    title: "Inflammation",
    description: "CRP, ESR, homocysteine",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-500/10",
    markers: 6,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export function Biomarkers() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-card via-card to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <FlaskConical className="w-4 h-4" />
            Comprehensive Testing
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">100+</span> Biomarkers Analyzed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive look at your body's key health indicators across
            8 critical systems
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {category.description}
                  </p>

                  {/* Marker count badge */}
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-muted/50 text-xs text-muted-foreground">
                    <TrendingUp className="w-3 h-3" />
                    {category.markers} markers
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-r from-primary/5 via-card to-primary/5 p-8">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative grid grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  100+
                </div>
                <p className="text-sm text-muted-foreground mt-1 font-medium">Biomarkers</p>
              </motion.div>

              <motion.div
                className="text-center border-x border-border/50"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  80+
                </div>
                <p className="text-sm text-muted-foreground mt-1 font-medium">Page Report</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  1:1
                </div>
                <p className="text-sm text-muted-foreground mt-1 font-medium">Consultation</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
