"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE_CONFIG } from "@/lib/config";

const faqs = [
  {
    question: "How is this different from a regular blood test?",
    answer:
      "Standard lab tests typically measure 20-30 biomarkers and use 'normal' ranges based on sick population averages. Our comprehensive test analyzes 100+ biomarkers and compares your results to 'optimal' ranges — what's seen in thriving, healthy individuals. This catches dysfunction before it becomes disease.",
  },
  {
    question: "How does the testing process work?",
    answer:
      "After ordering, you'll receive a test kit delivered to your home. Take this kit to any of our partner labs near you (we have locations across USA, UK, Australia, and NZ). A quick blood draw takes about 10 minutes. Your samples are then analyzed, and within 3-4 weeks, you'll receive your comprehensive 80+ page report plus a personal consultation with Jayden.",
  },
  {
    question: "What biomarkers are included in the test?",
    answer:
      "The test covers 8 major health categories: Cardiovascular Health (cholesterol, lipids, heart risk markers), Blood Sugar & Metabolism, Liver Function, Thyroid & Hormones, Immune System markers, Vitamins & Minerals, Kidney Function, and Inflammation Markers. Plus gender-specific hormone panels.",
  },
  {
    question: "Who is this test for?",
    answer:
      "This test is ideal for anyone who: feels 'off' but has been told their labs are normal, wants to optimize their health proactively, is dealing with unexplained fatigue, brain fog, or weight issues, wants to prevent health problems before they start, or is serious about understanding their body at a deeper level.",
  },
  {
    question: "How long does it take to get results?",
    answer:
      "From the time of your blood draw, expect to receive your comprehensive report within 3-4 weeks. This includes a detailed 80+ page analysis plus scheduling your personal consultation call with Jayden to walk through your results.",
  },
  {
    question: "What happens during the consultation?",
    answer:
      "During your 1-on-1 consultation with Jayden, you'll go through your results in detail. He'll explain what each marker means, identify priority areas for improvement, and provide a personalized action plan including dietary recommendations, lifestyle changes, and supplement suggestions based on your unique results.",
  },
  {
    question: "Can I order from outside Australia?",
    answer:
      "Yes! We serve clients globally with partner labs in the USA, UK, New Zealand, and Australia. When you order, you'll receive information about the nearest participating lab in your area.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "We stand behind our testing. If you're not satisfied with the thoroughness of your report or consultation, contact us within 30 days and we'll work with you to make it right.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-28 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our comprehensive blood testing
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-primary hover:underline"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
