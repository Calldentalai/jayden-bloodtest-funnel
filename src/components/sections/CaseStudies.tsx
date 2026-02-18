"use client";

import { ArrowRight, TrendingUp, Quote, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/lib/hooks/useInView";

interface Biomarker {
  name: string;
  unit: string;
  before: {
    value: number;
    status: "low" | "high" | "suboptimal";
  };
  after: {
    value: number;
    status: "optimal";
  };
}

interface CaseStudy {
  name: string;
  age: number;
  location: string;
  concern: string;
  biomarkers: Biomarker[];
  quote: string;
  duration: string;
}

const caseStudies: CaseStudy[] = [
  {
    name: "James P.",
    age: 42,
    location: "Perth, AU",
    concern: "Chronic fatigue",
    duration: "6 months",
    biomarkers: [
      {
        name: "Vitamin D",
        unit: "ng/mL",
        before: { value: 18, status: "low" },
        after: { value: 62, status: "optimal" },
      },
      {
        name: "Ferritin",
        unit: "ng/mL",
        before: { value: 22, status: "low" },
        after: { value: 95, status: "optimal" },
      },
      {
        name: "TSH",
        unit: "mIU/L",
        before: { value: 4.2, status: "suboptimal" },
        after: { value: 1.8, status: "optimal" },
      },
    ],
    quote: "I went from dragging myself through each day to feeling 20 years younger.",
  },
  {
    name: "Rachel W.",
    age: 35,
    location: "London, UK",
    concern: "Brain fog & weight gain",
    duration: "4 months",
    biomarkers: [
      {
        name: "Fasting Insulin",
        unit: "μIU/mL",
        before: { value: 14.5, status: "high" },
        after: { value: 5.2, status: "optimal" },
      },
      {
        name: "CRP",
        unit: "mg/L",
        before: { value: 3.8, status: "high" },
        after: { value: 0.6, status: "optimal" },
      },
      {
        name: "B12",
        unit: "pg/mL",
        before: { value: 280, status: "low" },
        after: { value: 620, status: "optimal" },
      },
    ],
    quote: "The mental clarity alone was worth it. I can finally think straight again.",
  },
  {
    name: "Tom S.",
    age: 28,
    location: "California, USA",
    concern: "Athletic performance plateau",
    duration: "5 months",
    biomarkers: [
      {
        name: "Testosterone",
        unit: "ng/dL",
        before: { value: 380, status: "suboptimal" },
        after: { value: 650, status: "optimal" },
      },
      {
        name: "Magnesium",
        unit: "mg/dL",
        before: { value: 1.6, status: "low" },
        after: { value: 2.1, status: "optimal" },
      },
      {
        name: "Cortisol",
        unit: "μg/dL",
        before: { value: 24, status: "high" },
        after: { value: 14, status: "optimal" },
      },
    ],
    quote: "My recovery time halved and I finally broke through my training plateau.",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "low":
    case "high":
      return "text-red-600";
    case "suboptimal":
      return "text-amber-600";
    case "optimal":
      return "text-emerald-600";
    default:
      return "text-gray-600";
  }
};

const getStatusLabel = (status: string) => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

export function CaseStudies() {
  const { ref: titleRef, isInView: titleInView } = useInView();
  const { ref: card1Ref, isInView: card1InView } = useInView();
  const { ref: card2Ref, isInView: card2InView } = useInView();
  const { ref: card3Ref, isInView: card3InView } = useInView();

  const cardRefs = [
    { ref: card1Ref, isInView: card1InView },
    { ref: card2Ref, isInView: card2InView },
    { ref: card3Ref, isInView: card3InView },
  ];

  return (
    <section className="snap-section py-10 sm:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-6 md:mb-8 ${
            titleInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Real <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            See how comprehensive blood testing changed these lives
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => {
            const { ref, isInView } = cardRefs[index];
            const delay = `delay-${(index + 1) * 100}`;

            return (
              <div
                key={study.name}
                ref={ref}
                className={`${isInView ? `animate-fade-in-up ${delay}` : "opacity-0"}`}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    {/* Person Info */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{study.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {study.age} years • {study.location}
                        </p>
                      </div>
                    </div>

                    {/* Concern Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm font-medium mb-6">
                      <TrendingUp className="w-4 h-4" />
                      {study.concern}
                    </div>

                    {/* Biomarkers Table */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase">
                        <span>Biomarker</span>
                        <span className="flex items-center gap-2 sm:gap-4">
                          <span className="w-14 sm:w-20 text-center">Before</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="w-14 sm:w-20 text-center">After</span>
                        </span>
                      </div>

                      {study.biomarkers.map((marker, markerIndex) => (
                        <div
                          key={markerIndex}
                          className="flex items-center justify-between py-2 border-b border-border last:border-0"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">{marker.name}</div>
                            <div className="text-xs text-muted-foreground">{marker.unit}</div>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                            <div className="w-14 sm:w-20 text-center">
                              <div
                                className={`font-semibold text-sm ${getStatusColor(
                                  marker.before.status
                                )}`}
                              >
                                {marker.before.value}
                              </div>
                              <div
                                className={`text-xs ${getStatusColor(marker.before.status)}`}
                              >
                                {getStatusLabel(marker.before.status)}
                              </div>
                            </div>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                            <div className="w-14 sm:w-20 text-center">
                              <div
                                className={`font-semibold text-sm ${getStatusColor(
                                  marker.after.status
                                )}`}
                              >
                                {marker.after.value}
                              </div>
                              <div
                                className={`text-xs ${getStatusColor(marker.after.status)}`}
                              >
                                {getStatusLabel(marker.after.status)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="text-xs text-muted-foreground text-center pt-2">
                        After {study.duration}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative bg-muted/50 rounded-lg p-4">
                      <Quote className="w-5 h-5 text-primary/30 absolute top-2 left-2" />
                      <p className="text-sm italic text-foreground/90 pl-6">
                        {study.quote}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
