"use client";

import { motion } from "framer-motion";
import {
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Activity,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrollToProducts } from "@/lib/utils/scroll";

const reportFeatures = [
  {
    icon: FileText,
    title: "80+ Page Report",
    description: "Detailed breakdown of every biomarker with clear explanations",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Optimal vs Normal Ranges",
    description: "See where you stand compared to thriving individuals, not sick averages",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: AlertCircle,
    title: "Priority Areas",
    description: "Know exactly which markers need attention first",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: CheckCircle2,
    title: "Action Steps",
    description: "Personalized recommendations for diet, supplements, and lifestyle",
    color: "from-purple-500 to-purple-600",
  },
];

const sampleMarkers = [
  {
    name: "Vitamin D",
    value: 28,
    unit: "ng/mL",
    status: "low",
    optimalMin: 50,
    optimalMax: 70,
    rangeMin: 0,
    rangeMax: 100,
    color: "#ef4444"
  },
  {
    name: "Ferritin",
    value: 45,
    unit: "ng/mL",
    status: "suboptimal",
    optimalMin: 70,
    optimalMax: 150,
    rangeMin: 0,
    rangeMax: 200,
    color: "#f59e0b"
  },
  {
    name: "TSH",
    value: 1.5,
    unit: "mIU/L",
    status: "optimal",
    optimalMin: 1.0,
    optimalMax: 2.0,
    rangeMin: 0,
    rangeMax: 5,
    color: "#22c55e"
  },
  {
    name: "Fasting Insulin",
    value: 4.2,
    unit: "μIU/mL",
    status: "optimal",
    optimalMin: 2,
    optimalMax: 6,
    rangeMin: 0,
    rangeMax: 15,
    color: "#22c55e"
  },
  {
    name: "Vitamin B12",
    value: 380,
    unit: "pg/mL",
    status: "suboptimal",
    optimalMin: 500,
    optimalMax: 800,
    rangeMin: 0,
    rangeMax: 1000,
    color: "#f59e0b"
  },
];

function getStatusInfo(status: string) {
  switch (status) {
    case "optimal":
      return {
        text: "Optimal",
        color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
        dotColor: "bg-emerald-500"
      };
    case "suboptimal":
      return {
        text: "Needs Attention",
        color: "text-amber-600 bg-amber-500/10 border-amber-500/20",
        dotColor: "bg-amber-500"
      };
    case "low":
      return {
        text: "Low",
        color: "text-red-600 bg-red-500/10 border-red-500/20",
        dotColor: "bg-red-500"
      };
    default:
      return {
        text: status,
        color: "text-muted-foreground bg-muted",
        dotColor: "bg-muted-foreground"
      };
  }
}

function BiomarkerBar({ marker, index }: { marker: typeof sampleMarkers[0], index: number }) {
  const statusInfo = getStatusInfo(marker.status);
  const valuePercent = ((marker.value - marker.rangeMin) / (marker.rangeMax - marker.rangeMin)) * 100;
  const optimalStartPercent = ((marker.optimalMin - marker.rangeMin) / (marker.rangeMax - marker.rangeMin)) * 100;
  const optimalEndPercent = ((marker.optimalMax - marker.rangeMin) / (marker.rangeMax - marker.rangeMin)) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className="p-4 hover:bg-muted/30 transition-colors rounded-lg"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${statusInfo.dotColor}`} />
          <span className="font-medium text-foreground">{marker.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground">{marker.value}</span>
          <span className="text-xs text-muted-foreground">{marker.unit}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full border ${statusInfo.color}`}>
            {statusInfo.text}
          </span>
        </div>
      </div>

      {/* Progress bar with optimal range indicator */}
      <div className="relative h-3 bg-muted rounded-full overflow-hidden">
        {/* Optimal range background */}
        <div
          className="absolute h-full bg-emerald-500/20 rounded-full"
          style={{
            left: `${optimalStartPercent}%`,
            width: `${optimalEndPercent - optimalStartPercent}%`
          }}
        />

        {/* Current value bar */}
        <motion.div
          className="absolute h-full rounded-full"
          style={{ backgroundColor: marker.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.min(valuePercent, 100)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
        />

        {/* Optimal range markers */}
        <div
          className="absolute top-0 h-full w-0.5 bg-emerald-500"
          style={{ left: `${optimalStartPercent}%` }}
        />
        <div
          className="absolute top-0 h-full w-0.5 bg-emerald-500"
          style={{ left: `${optimalEndPercent}%` }}
        />
      </div>

      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-muted-foreground">{marker.rangeMin}</span>
        <span className="text-[10px] text-emerald-600">
          Optimal: {marker.optimalMin}-{marker.optimalMax}
        </span>
        <span className="text-[10px] text-muted-foreground">{marker.rangeMax}</span>
      </div>
    </motion.div>
  );
}

export function SampleReport() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-background to-muted/30">
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
            <Activity className="w-4 h-4" />
            Sample Report Preview
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your <span className="text-primary">Personalized</span> Report
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See exactly what you'll receive — a comprehensive analysis that goes
            far beyond standard lab results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Sample Report Preview with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <Card className="border-border/50 overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">Biomarker Analysis</h4>
                    <p className="text-sm text-white/80">Sample from your 80+ page report</p>
                  </div>
                </div>
              </div>

              {/* Stats summary */}
              <div className="grid grid-cols-3 divide-x divide-border/50 border-b border-border/50">
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-600">2</p>
                  <p className="text-xs text-muted-foreground">Optimal</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold text-amber-600">2</p>
                  <p className="text-xs text-muted-foreground">Need Attention</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold text-red-600">1</p>
                  <p className="text-xs text-muted-foreground">Low</p>
                </div>
              </div>

              <CardContent className="p-2">
                <div className="space-y-1">
                  {sampleMarkers.map((marker, index) => (
                    <BiomarkerBar key={index} marker={marker} index={index} />
                  ))}
                </div>

                <motion.div
                  className="mt-4 p-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-lg text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm text-foreground font-medium flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    + 95 more biomarkers in your full report
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              What's Included in Your Report
            </h3>

            <div className="space-y-4">
              {reportFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 4 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  onClick={scrollToProducts}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all px-8"
                >
                  Get Your Report Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <p className="text-xs text-muted-foreground mt-3">
                100+ biomarkers • 80+ page report • Personal consultation
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
