import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, CheckCircle, XCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Refund Policy | Jayden Pileggi Functional Medicine",
  description:
    "30-day money-back guarantee on all blood testing services from Jayden Pileggi Functional Medicine. Learn about our refund policy and process.",
  robots: "noindex, follow",
  alternates: {
    canonical: "/refund",
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Refund Policy
            </h1>
            <p className="text-muted-foreground">
              Last Updated: February 12, 2026
            </p>
          </div>

          {/* Money-Back Guarantee Badge */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                30-Day Money-Back Guarantee
              </h2>
              <p className="text-foreground leading-relaxed max-w-2xl mx-auto">
                We stand behind the quality of our comprehensive blood testing services. If
                you&apos;re not satisfied, we offer a full refund within 30 days of your purchase,
                subject to the conditions outlined below.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-foreground leading-relaxed mb-4">
              At Jayden Pileggi Functional Medicine, your satisfaction is our priority. We are
              confident that our comprehensive blood testing services and personalized
              consultations will provide valuable insights into your health. However, we
              understand that circumstances may arise where a refund is necessary.
            </p>
            <p className="text-foreground leading-relaxed">
              This Refund Policy outlines the terms and conditions under which refunds are
              issued for our blood testing services. By purchasing our services, you agree to
              the terms of this policy.
            </p>
          </section>

          {/* 1. 30-Day Money-Back Guarantee */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. 30-Day Money-Back Guarantee
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We offer a 30-day money-back guarantee on all blood test purchases. If you are
              not satisfied with our service, you may request a full refund within 30 days of
              your original purchase date, provided you meet the eligibility criteria outlined
              below.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              1.1 How the Guarantee Works
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              The 30-day period begins on the date your payment is processed, not the date
              you receive your test kit or results. You have 30 calendar days from purchase to
              request a refund if you are dissatisfied with our service.
            </p>
          </section>

          {/* 2. Eligibility for Refunds */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Eligibility for Refunds
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              To be eligible for a refund, the following conditions must be met:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">
                    Refund Request Within 30 Days
                  </p>
                  <p className="text-muted-foreground text-sm">
                    You must submit your refund request within 30 calendar days of your
                    purchase date.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">
                    Participation in the Process
                  </p>
                  <p className="text-muted-foreground text-sm">
                    You have made a good-faith effort to participate in the blood testing
                    process, including collecting your sample (if applicable) and engaging
                    with the consultation.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">Reason for Dissatisfaction</p>
                  <p className="text-muted-foreground text-sm">
                    You provide a brief explanation of why the service did not meet your
                    expectations (this helps us improve).
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">No Prior Refund Abuse</p>
                  <p className="text-muted-foreground text-sm">
                    You have not previously abused our refund policy or engaged in fraudulent
                    refund requests.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Non-Refundable Circumstances */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Non-Refundable Circumstances
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While we strive to accommodate refund requests, there are certain circumstances
              where refunds will not be issued:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">
                    Beyond 30-Day Window
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Refund requests made more than 30 days after purchase will not be honored.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">
                    Non-Participation
                  </p>
                  <p className="text-muted-foreground text-sm">
                    If you failed to collect your blood sample, return it to the laboratory,
                    or attend your scheduled consultation without valid reason, refunds may be
                    denied.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">
                    User Error or Negligence
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Refunds will not be provided if the service was compromised due to your
                    failure to follow instructions (e.g., improper sample collection,
                    providing incorrect information).
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">
                    Changed Mind After Results
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Simply receiving results you didn&apos;t expect or disagree with does not
                    qualify for a refund. Our service provides objective biomarker data, not
                    guaranteed outcomes.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">
                    Third-Party Services
                  </p>
                  <p className="text-muted-foreground text-sm">
                    We cannot refund costs incurred with third-party providers (e.g., shipping
                    fees charged by couriers, laboratory processing fees already incurred).
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold">Fraudulent Activity</p>
                  <p className="text-muted-foreground text-sm">
                    Any attempt to defraud or abuse our refund policy will result in denial of
                    the refund and potential legal action.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Partial Refunds */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Partial Refunds
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              In certain circumstances, we may offer partial refunds rather than full refunds:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              4.1 Kit Shipped But Not Used
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              If you have received your test kit but have not yet collected or returned your
              sample, you may be eligible for a partial refund minus shipping and handling
              costs.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              4.2 Sample Processed
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              If your sample has been processed by the laboratory, we may offer a partial
              refund that accounts for the laboratory processing costs incurred (typically
              50-70% of the purchase price, depending on the circumstances).
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              4.3 Consultation Completed
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              If you have completed your consultation but remain dissatisfied, we may offer a
              partial refund minus the consultation service fee.
            </p>
          </section>

          {/* 5. How to Request a Refund */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. How to Request a Refund
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              To request a refund, please follow these steps:
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4 mb-6">
              <div>
                <p className="text-foreground font-semibold mb-2">Step 1: Contact Us</p>
                <p className="text-muted-foreground text-sm">
                  Send an email to{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-primary hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>{" "}
                  with the subject line &quot;Refund Request&quot; or call us at{" "}
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                    className="text-primary hover:underline"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  .
                </p>
              </div>

              <div>
                <p className="text-foreground font-semibold mb-2">
                  Step 2: Provide Required Information
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  Include the following in your refund request:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>Your full name and email address used for purchase</li>
                  <li>Order number or purchase confirmation</li>
                  <li>Date of purchase</li>
                  <li>
                    Brief explanation of why you are requesting a refund
                  </li>
                  <li>
                    Current status of your order (kit received, sample sent, results received,
                    etc.)
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-foreground font-semibold mb-2">Step 3: Review Process</p>
                <p className="text-muted-foreground text-sm">
                  We will review your request within 3-5 business days and respond with a
                  decision. We may ask follow-up questions to better understand your situation.
                </p>
              </div>

              <div>
                <p className="text-foreground font-semibold mb-2">Step 4: Refund Issuance</p>
                <p className="text-muted-foreground text-sm">
                  If approved, your refund will be processed within 7-10 business days to the
                  original payment method used for purchase.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Refund Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Refund Processing
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              6.1 Processing Time
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              Once your refund is approved, it will be processed within 7-10 business days.
              The time it takes for the refund to appear in your account depends on your
              payment provider and may take an additional 5-10 business days.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              6.2 Refund Method
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              Refunds are issued to the original payment method used for the purchase. We
              cannot issue refunds to a different card, account, or payment method.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              6.3 Refund Confirmation
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              You will receive an email confirmation once your refund has been processed. If
              you do not see the refund in your account within the expected timeframe, please
              contact your bank or payment provider.
            </p>
          </section>

          {/* 7. Cancellations Before Shipping */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Cancellations Before Shipping
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              If you wish to cancel your order before your test kit has been shipped, you may
              be eligible for a full refund. Please contact us immediately after purchase to
              request cancellation. Once the kit has shipped, standard refund terms apply.
            </p>
          </section>

          {/* 8. Exchanges and Replacements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Exchanges and Replacements
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              8.1 Defective or Damaged Kits
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              If you receive a damaged or defective test kit, we will send a replacement at no
              charge. Please contact us within 7 days of receiving the kit with photos of the
              damage.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              8.2 Lost or Undelivered Kits
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              If your test kit is lost in transit or never arrives, please contact us. We will
              work with the shipping provider to locate the package or send a replacement.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              8.3 Wrong Test Ordered
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              If you accidentally ordered the wrong test (e.g., male test instead of female
              test), contact us before opening the kit. We may be able to exchange it for the
              correct test or offer a refund minus shipping costs.
            </p>
          </section>

          {/* 9. Laboratory Errors */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Laboratory Errors
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              In the rare event that a laboratory error occurs resulting in invalid or
              compromised results, we will coordinate with the lab to provide a replacement
              test at no charge. You will not need to request a refund in this scenario; we
              will proactively resolve the issue.
            </p>
          </section>

          {/* 10. Chargebacks and Payment Disputes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Chargebacks and Payment Disputes
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              If you have an issue with your purchase, we encourage you to contact us directly
              rather than filing a chargeback with your bank or payment provider. Chargebacks
              can result in:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Suspension or termination of your account</li>
              <li>
                Inability to use our services in the future
              </li>
              <li>
                Additional fees or legal action to recover costs
              </li>
            </ul>
            <p className="text-foreground leading-relaxed mb-6">
              We are committed to resolving any issues fairly and promptly. Please give us the
              opportunity to address your concerns before initiating a chargeback.
            </p>
          </section>

          {/* 11. Modifications to Refund Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              11. Modifications to Refund Policy
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We reserve the right to modify this Refund Policy at any time. Any changes will
              be posted on this page with an updated &quot;Last Updated&quot; date. Your purchase is
              governed by the Refund Policy in effect at the time of purchase.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              12. Contact Us
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              If you have questions about our Refund Policy or need to request a refund,
              please contact us:
            </p>
            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <p className="text-foreground font-semibold">
                Jayden Pileggi Functional Medicine
              </p>
              <div className="flex items-center gap-2 text-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <p className="text-foreground">{SITE_CONFIG.location}</p>
            </div>
          </section>

          {/* Our Commitment */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Our Commitment to You
              </h3>
              <p className="text-foreground leading-relaxed">
                We are dedicated to providing exceptional service and value. While we hope you
                will be thrilled with your comprehensive blood test and consultation, we
                understand that situations arise. Our 30-day money-back guarantee is our
                commitment to your satisfaction and our confidence in the quality of our
                services. We will always work with you in good faith to resolve any concerns.
              </p>
            </div>
          </section>

          {/* Medical Disclaimer */}
          <section className="mt-16 pt-8 border-t border-border/50">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Medical Disclaimer
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The information and services provided by Jayden Pileggi Functional Medicine
                are for educational and informational purposes only and are not intended as a
                substitute for professional medical advice, diagnosis, or treatment. Always
                seek the advice of your physician or other qualified health provider with any
                questions you may have regarding a medical condition. Never disregard
                professional medical advice or delay in seeking it because of something you
                have read on our website or learned through our services.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
