"use client";

import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { VIDEO_TESTIMONIALS_CONFIG } from "@/lib/config";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Sydney, Australia",
    text: "My doctor told me everything was 'normal' for years. Jayden's test revealed my vitamin D was severely low and my thyroid was borderline. Within 3 months of following his recommendations, I had more energy than I've had in a decade.",
    rating: 5,
  },
  {
    name: "Michael T.",
    location: "London, UK",
    text: "The level of detail in the report is incredible. Finally understanding why I've been feeling off for so long. The consultation call with Jayden was worth every penny — he explained everything clearly and gave me a real action plan.",
    rating: 5,
  },
  {
    name: "Emma R.",
    location: "Auckland, NZ",
    text: "I was skeptical at first, but the insights from this blood test completely changed my approach to health. Discovered inflammation markers I never knew about. Now 6 months later, I feel like a different person.",
    rating: 5,
  },
  {
    name: "David K.",
    location: "California, USA",
    text: "As someone who's tried everything for chronic fatigue, this test finally gave me answers. Jayden identified several metabolic issues that my regular doctor missed. Game changer.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Real Results from <span className="text-primary">Real People</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands who've discovered what their standard blood tests missed
          </p>
        </motion.div>

        {/* Video Testimonials - Shows when enabled */}
        {VIDEO_TESTIMONIALS_CONFIG.enabled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
          >
            {VIDEO_TESTIMONIALS_CONFIG.testimonials.map((video, index) => (
              <div
                key={index}
                className="aspect-video relative rounded-xl overflow-hidden bg-muted group cursor-pointer"
              >
                {video.videoUrl ? (
                  <iframe
                    src={video.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/10">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{video.name}'s Story</p>
                    <p className="text-xs text-muted-foreground mt-1">Video coming soon</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* Written Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                {/* Decorative gradient background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />

                <CardContent className="p-6 relative">
                  {/* Quote Icon with gradient background */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author with enhanced styling */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                      <span className="text-sm font-bold text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-16 pt-8 border-t border-border/50"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">2,500+</p>
            <p className="text-sm text-muted-foreground">Tests Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground">Countries Served</p>
          </div>
        </motion.div>

        {/* Link to full testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href="https://www.jaydenpileggifunctionalmedicine.com/testimonials"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            View more testimonials on our main website
          </a>
        </motion.div>
      </div>
    </section>
  );
}
