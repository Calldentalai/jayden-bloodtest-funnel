import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service | Jayden Pileggi Functional Medicine",
  description:
    "Terms of Service for Jayden Pileggi Functional Medicine blood testing services. Read our terms and conditions before purchasing.",
  robots: "noindex, follow",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last Updated: February 12, 2026
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-foreground leading-relaxed mb-4">
              Welcome to Jayden Pileggi Functional Medicine. These Terms of Service
              (&quot;Terms&quot;) govern your access to and use of our website, blood testing services,
              consultations, and any related products or services (collectively, the
              &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these
              Terms.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Please read these Terms carefully before using our Services. If you do not
              agree to these Terms, you may not access or use our Services.
            </p>
            <p className="text-foreground leading-relaxed">
              These Terms constitute a legally binding agreement between you and Jayden
              Pileggi Functional Medicine (ABN to be inserted), a functional medicine
              practice operating in Perth, Western Australia.
            </p>
          </section>

          {/* 1. Acceptance of Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              By using our Services, you represent that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>You are at least 18 years of age</li>
              <li>
                You have the legal capacity to enter into a binding agreement
              </li>
              <li>
                You will comply with these Terms and all applicable laws and regulations
              </li>
              <li>
                All information you provide to us is accurate, current, and complete
              </li>
            </ul>
          </section>

          {/* 2. Description of Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Description of Services
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Jayden Pileggi Functional Medicine provides comprehensive blood testing
              services and functional medicine consultations, including:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.1 Blood Testing Services
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Comprehensive blood test kits analyzing 100+ biomarkers
              </li>
              <li>
                Specialized test options for males and females
              </li>
              <li>
                Home test kit delivery to your specified address
              </li>
              <li>
                Laboratory analysis through accredited partner laboratories
              </li>
              <li>
                Detailed blood test reports with biomarker results and reference ranges
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.2 Consultation Services
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Personalized consultation included with blood test purchase
              </li>
              <li>
                Review and interpretation of blood test results
              </li>
              <li>
                Functional medicine recommendations tailored to your health goals
              </li>
              <li>
                Optional paid discovery calls for initial health assessments
              </li>
              <li>
                Follow-up consultations and ongoing support (as applicable)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.3 Educational Resources
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Access to educational content about functional medicine
              </li>
              <li>
                Health and wellness information through our website and newsletters
              </li>
              <li>
                Guidance on understanding your biomarkers and health data
              </li>
            </ul>
          </section>

          {/* 3. Eligibility and Medical Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Eligibility and Medical Requirements
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              3.1 Age Requirement
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              You must be at least 18 years of age to purchase our Services. If you are under
              18, you may only use our Services under the supervision of a parent or legal
              guardian who agrees to these Terms.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              3.2 Geographic Availability
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              Our Services are available to customers worldwide, including the United States,
              United Kingdom, Australia, New Zealand, and other countries where our partner
              laboratories operate. Shipping times and availability may vary by location.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              3.3 Health Conditions
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              Our blood testing services are intended for generally healthy adults seeking to
              optimize their health and wellness. You should consult with your primary
              healthcare provider before using our Services if you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Have a diagnosed medical condition or chronic illness
              </li>
              <li>Are currently under medical treatment or supervision</li>
              <li>Are pregnant or breastfeeding</li>
              <li>
                Have a bleeding disorder or are taking blood-thinning medications
              </li>
              <li>Have a compromised immune system</li>
            </ul>
          </section>

          {/* 4. Medical Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Medical Disclaimer
            </h2>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
              <p className="text-foreground leading-relaxed mb-4">
                <strong>IMPORTANT: NOT A SUBSTITUTE FOR MEDICAL ADVICE</strong>
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The Services provided by Jayden Pileggi Functional Medicine are for
                educational, informational, and wellness purposes only. They are NOT intended
                to diagnose, treat, cure, or prevent any disease or medical condition.
              </p>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              By using our Services, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Our Services do not replace the advice, diagnosis, or treatment of a licensed
                physician or healthcare provider
              </li>
              <li>
                You should always seek the advice of your doctor or other qualified health
                provider with any questions about a medical condition
              </li>
              <li>
                Never disregard professional medical advice or delay seeking it because of
                information obtained through our Services
              </li>
              <li>
                If you think you may have a medical emergency, call your doctor or emergency
                services immediately
              </li>
              <li>
                You are responsible for discussing any recommendations with your healthcare
                provider before implementing them
              </li>
              <li>
                Individual results may vary, and we make no guarantees about specific health
                outcomes
              </li>
            </ul>
          </section>

          {/* 5. Practitioner-Client Relationship */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Practitioner-Client Relationship
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              When you purchase our Services, a practitioner-client relationship is
              established for the purpose of providing functional medicine consultations and
              blood test interpretation.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              This relationship:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Is limited to the scope of services you have purchased
              </li>
              <li>
                Does not constitute a traditional doctor-patient relationship
              </li>
              <li>
                Is subject to confidentiality as outlined in our Privacy Policy
              </li>
              <li>
                May be terminated by either party with written notice
              </li>
              <li>
                Requires your active participation and honest disclosure of health information
              </li>
            </ul>
          </section>

          {/* 6. Ordering and Payment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Ordering and Payment
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              6.1 Placing Orders
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              When you place an order through our website, you are making an offer to purchase
              our Services. We reserve the right to accept or decline your order for any
              reason. All orders are subject to availability and confirmation of payment.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              6.2 Pricing
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              All prices are displayed in the applicable currency and include any mandatory
              taxes unless otherwise stated. We reserve the right to change prices at any time
              without notice. Price changes will not affect orders already placed.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              6.3 Payment Processing
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Payment is required at the time of purchase
              </li>
              <li>
                We accept major credit cards, debit cards, and other payment methods through
                our secure payment processors
              </li>
              <li>
                Payment information is processed by third-party payment processors (e.g.,
                Stripe)
              </li>
              <li>
                You authorize us to charge your payment method for all fees and charges
              </li>
              <li>
                We do not store your credit card information on our servers
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              6.4 Failed Payments
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              If payment fails or is declined, we reserve the right to cancel your order and
              withhold delivery of Services until payment is successfully processed.
            </p>
          </section>

          {/* 7. Shipping and Delivery */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Shipping and Delivery
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              7.1 Test Kit Shipping
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              Upon successful payment, your blood test kit will be shipped to the address you
              provide during checkout:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Shipping times vary by location (typically 5-10 business days)
              </li>
              <li>
                You will receive tracking information via email once shipped
              </li>
              <li>
                You are responsible for providing a valid, accurate shipping address
              </li>
              <li>
                We are not liable for delays caused by courier services or customs
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              7.2 Incorrect Addresses
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              If you provide an incorrect or incomplete address, we are not responsible for
              non-delivery or delays. Additional fees may apply for re-shipping to a corrected
              address.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              7.3 International Shipping
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              International customers may be subject to import duties, taxes, or customs fees
              imposed by your country. You are responsible for all such fees.
            </p>
          </section>

          {/* 8. Test Sample Collection and Return */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Test Sample Collection and Return
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              8.1 Your Responsibilities
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              When you receive your test kit, you are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Following all instructions provided with the test kit
              </li>
              <li>
                Collecting your sample according to the specified guidelines
              </li>
              <li>
                Returning the sample to the laboratory within the specified timeframe
              </li>
              <li>
                Ensuring the sample is properly packaged and shipped as instructed
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              8.2 Invalid or Insufficient Samples
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              If the laboratory determines that your sample is insufficient, contaminated, or
              otherwise unusable, you may be required to provide a new sample. We will work
              with you to resolve any issues, but we are not responsible for user error in
              sample collection.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              8.3 Processing Time
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              Laboratory analysis typically takes 7-14 business days after the lab receives
              your sample. You will be notified when your results are ready.
            </p>
          </section>

          {/* 9. Results and Consultations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Results and Consultations
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              9.1 Delivery of Results
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              Your blood test results will be delivered to you digitally via email or through
              a secure client portal. Results are confidential and will only be shared with
              you and authorized personnel.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              9.2 Consultation Scheduling
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              Your purchase includes a personalized consultation to review your results. You
              will be contacted to schedule this consultation after your results are ready.
              Consultations are typically conducted via video call or phone.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              9.3 Missed Appointments
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              If you miss a scheduled consultation without providing at least 24 hours notice,
              we reserve the right to charge a rescheduling fee or forfeit your included
              consultation.
            </p>
          </section>

          {/* 10. Refund Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Refund Policy
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Our refund policy is detailed in full on our{" "}
              <Link href="/refund" className="text-primary hover:underline">
                Refund Policy page
              </Link>
              . By using our Services, you agree to the terms of our refund policy, which is
              incorporated by reference into these Terms.
            </p>
          </section>

          {/* 11. Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              11. Intellectual Property
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              All content on our website and in our Services, including but not limited to
              text, graphics, logos, images, videos, software, and educational materials, is
              the property of Jayden Pileggi Functional Medicine or our licensors and is
              protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Copy, reproduce, distribute, or create derivative works from our content
              </li>
              <li>
                Use our content for commercial purposes without written permission
              </li>
              <li>
                Remove or alter any copyright, trademark, or proprietary notices
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any software or technology
              </li>
            </ul>
          </section>

          {/* 12. User Conduct */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              12. User Conduct
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              You agree to use our Services only for lawful purposes and in accordance with
              these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Provide false, inaccurate, or misleading information
              </li>
              <li>
                Impersonate another person or misrepresent your affiliation
              </li>
              <li>
                Use our Services to harass, abuse, or harm another person
              </li>
              <li>
                Interfere with or disrupt our Services or servers
              </li>
              <li>
                Attempt to gain unauthorized access to our systems
              </li>
              <li>
                Use automated systems (bots, scrapers) to access our Services
              </li>
              <li>
                Violate any applicable laws or regulations
              </li>
            </ul>
          </section>

          {/* 13. Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              13. Limitation of Liability
            </h2>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
              <p className="text-foreground leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, JAYDEN PILEGGI FUNCTIONAL MEDICINE
                SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
                DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
                INTANGIBLE LOSSES.
              </p>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              Our liability to you for any claim arising out of or relating to these Terms or
              our Services is limited to the amount you paid for the Services in question.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                Errors, mistakes, or inaccuracies in blood test results caused by laboratory
                error, sample contamination, or user error
              </li>
              <li>
                Health outcomes or lack of improvement resulting from following our
                recommendations
              </li>
              <li>
                Delays in shipping, delivery, or processing caused by third parties
              </li>
              <li>
                Unauthorized access to or alteration of your transmissions or data
              </li>
              <li>
                Statements or conduct of any third party using our Services
              </li>
            </ul>
          </section>

          {/* 14. Indemnification */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              14. Indemnification
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              You agree to indemnify, defend, and hold harmless Jayden Pileggi Functional
              Medicine, its officers, directors, employees, agents, and affiliates from any
              claims, liabilities, damages, losses, and expenses (including reasonable
              attorneys&apos; fees) arising out of or related to: (a) your use of our Services; (b)
              your violation of these Terms; (c) your violation of any rights of another
              person or entity; or (d) any inaccurate or misleading information you provide.
            </p>
          </section>

          {/* 15. Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              15. Privacy
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Your privacy is important to us. Our collection and use of personal information
              is governed by our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              , which is incorporated by reference into these Terms. By using our Services,
              you consent to our collection, use, and sharing of your information as described
              in our Privacy Policy.
            </p>
          </section>

          {/* 16. Modifications to Services and Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              16. Modifications to Services and Terms
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              16.1 Changes to Services
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              We reserve the right to modify, suspend, or discontinue any aspect of our
              Services at any time without notice. We are not liable to you or any third party
              for any modification, suspension, or discontinuation of our Services.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              16.2 Changes to Terms
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              We may update these Terms from time to time. If we make material changes, we
              will notify you by posting the updated Terms on this page and updating the
              &quot;Last Updated&quot; date. Your continued use of our Services after such changes
              constitutes your acceptance of the updated Terms.
            </p>
          </section>

          {/* 17. Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              17. Termination
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We may terminate or suspend your access to our Services immediately, without
              prior notice or liability, for any reason, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Breach of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Request by law enforcement or government agencies</li>
              <li>
                Conduct that we believe is harmful to other users or our business
              </li>
            </ul>
            <p className="text-foreground leading-relaxed mb-6">
              Upon termination, your right to use our Services will immediately cease. All
              provisions of these Terms that by their nature should survive termination shall
              survive, including but not limited to ownership provisions, warranty
              disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          {/* 18. Governing Law and Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              18. Governing Law and Dispute Resolution
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              18.1 Governing Law
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              These Terms and your use of our Services are governed by the laws of Western
              Australia and the Commonwealth of Australia, without regard to conflict of law
              principles.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              18.2 Dispute Resolution
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              If a dispute arises between you and Jayden Pileggi Functional Medicine:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                You agree to first attempt to resolve the dispute informally by contacting us
              </li>
              <li>
                If the dispute cannot be resolved informally within 30 days, either party may
                pursue mediation
              </li>
              <li>
                Any legal action must be brought in the courts of Western Australia, and you
                consent to the exclusive jurisdiction of those courts
              </li>
            </ul>
          </section>

          {/* 19. Severability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              19. Severability
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              If any provision of these Terms is found to be invalid, illegal, or
              unenforceable, the remaining provisions shall continue in full force and effect.
              The invalid provision shall be modified to the minimum extent necessary to make
              it valid and enforceable.
            </p>
          </section>

          {/* 20. Entire Agreement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              20. Entire Agreement
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              These Terms, together with our Privacy Policy and Refund Policy, constitute the
              entire agreement between you and Jayden Pileggi Functional Medicine regarding
              your use of our Services and supersede all prior agreements and understandings.
            </p>
          </section>

          {/* 21. Waiver */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              21. Waiver
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Our failure to enforce any provision of these Terms shall not constitute a
              waiver of that provision or any other provision. Any waiver must be in writing
              and signed by an authorized representative.
            </p>
          </section>

          {/* 22. Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              22. Contact Information
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              If you have any questions about these Terms, please contact us:
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
