"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE_CONFIG } from "@/lib/config";
import { useInView } from "@/lib/hooks/useInView";

const faqs = [
  {
    question: "How is this different from a regular blood test?",
    answer:
      "Standard lab tests typically measure 20-30 biomarkers and use 'normal' ranges based on population averages that include unhealthy individuals. Our comprehensive test analyzes 100+ biomarkers and compares your results to optimal ranges — the levels seen in thriving, healthy people. This approach catches early dysfunction before it becomes disease.",
  },
  {
    question: "How does the testing process work?",
    answer:
      "After ordering, you'll receive a confirmation email with instructions based on your location. Depending on where you are, you may receive a test kit or a pathology form to visit a local lab. A quick blood draw takes about 10 minutes. Your samples are then analyzed, and within 3-4 weeks, you'll receive your comprehensive 80+ page report plus a personal consultation with Jayden.",
  },
  {
    question: "What biomarkers are included in the test?",
    answer:
      "The test covers 8 major health categories: Cardiovascular Health (cholesterol, lipids, and heart risk markers), Blood Sugar and Metabolism, Liver Function, Thyroid and Hormones, Immune System markers, Vitamins and Minerals, Kidney Function, and Inflammation Markers — plus gender-specific hormone panels tailored to your biology.",
  },
  {
    question: "Who is this test for?",
    answer:
      "This test is for two types of people: those who feel 'off' but have been told their labs are normal — dealing with unexplained fatigue, brain fog, or weight issues — and those who are already healthy but want to optimize their performance and take their health to the next level. Whether you're looking to fix a problem or fine-tune what's already working, this test gives you the data to make informed decisions about your body.",
  },
  {
    question: "How long does it take to get results?",
    answer:
      "From the time of your blood draw, you can expect your comprehensive report within 3-4 weeks. This includes a detailed 80+ page analysis, and you'll also schedule a personal consultation with Jayden to walk through your results together.",
  },
  {
    question: "What happens during the consultation?",
    answer:
      "During your one-on-one consultation, Jayden walks you through your results in detail. He explains what each marker means, identifies priority areas for improvement, and provides a personalized action plan — including dietary recommendations, lifestyle changes, and supplement suggestions tailored to your unique results.",
  },
  {
    question: "Can I order from outside Australia?",
    answer:
      "Absolutely! We serve clients globally with partner labs across the USA, UK, New Zealand, and Australia. After ordering, you'll receive location-specific instructions to complete your blood draw at a lab near you.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes — we stand behind our testing. If you're not satisfied with the thoroughness of your report or consultation, simply reach out within 30 days and we'll work with you to make it right.",
  },
];

export function FAQ() {
  const { ref, isInView } = useInView();

  return (
    <section id="faq" className="snap-section py-10 sm:py-12 lg:py-16 bg-background scroll-mt-16">
      <div ref={ref} className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-8 sm:mb-16 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our comprehensive blood testing
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`max-w-3xl mx-auto ${isInView ? "animate-fade-in-up delay-200" : "opacity-0"}`}
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
        </div>

        {/* Still have questions */}
        <div
          className={`text-center mt-12 ${isInView ? "animate-fade-in delay-400" : "opacity-0"}`}
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
        </div>
      </div>
    </section>
  );
}
