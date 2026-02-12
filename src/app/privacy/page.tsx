import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy | Jayden Pileggi Functional Medicine",
  description:
    "Privacy Policy for Jayden Pileggi Functional Medicine blood testing services. Learn how we collect, use, and protect your personal and health information.",
  robots: "noindex, follow",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last Updated: February 12, 2026
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-foreground leading-relaxed mb-4">
              Jayden Pileggi Functional Medicine (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
              protecting your privacy and handling your personal and health information with
              care and respect. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our website, purchase our blood
              testing services, or otherwise interact with us.
            </p>
            <p className="text-foreground leading-relaxed">
              By using our services, you agree to the collection and use of information in
              accordance with this policy. If you do not agree with our policies and
              practices, please do not use our services.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              1.1 Personal Information
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Purchase a blood testing service</li>
              <li>Create an account on our website</li>
              <li>Book a discovery call or consultation</li>
              <li>Contact us via email, phone, or contact forms</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Participate in surveys or promotional activities</li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Full name and date of birth</li>
              <li>Email address and phone number</li>
              <li>Mailing address and shipping address</li>
              <li>Payment and billing information</li>
              <li>Gender and biological sex (for appropriate test selection)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              1.2 Health Information
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              As a health services provider, we collect sensitive health information,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Blood test results and biomarker data (100+ biomarkers)</li>
              <li>Medical history and current health conditions</li>
              <li>Current medications and supplements</li>
              <li>Symptoms and health concerns you report</li>
              <li>Lifestyle factors (diet, exercise, sleep patterns)</li>
              <li>
                Information shared during consultations and discovery calls
              </li>
            </ul>
            <p className="text-muted-foreground text-sm italic mb-6">
              Note: We treat all health information as confidential and implement
              appropriate security measures consistent with healthcare privacy standards.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              1.3 Automatically Collected Information
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about
              your device and browsing activity:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>IP address and geolocation data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or source</li>
              <li>Date and time of visits</li>
              <li>
                Device identifiers and mobile network information
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.1 Service Delivery
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Process and fulfill your blood test orders</li>
              <li>Ship test kits to your specified address</li>
              <li>Coordinate with our partner laboratories for sample analysis</li>
              <li>Generate comprehensive blood test reports</li>
              <li>Provide personalized health consultations and recommendations</li>
              <li>Schedule and conduct discovery calls</li>
              <li>Respond to your inquiries and provide customer support</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.2 Payment Processing
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Process payments securely through our payment processors</li>
              <li>Prevent fraud and unauthorized transactions</li>
              <li>Issue refunds when applicable</li>
              <li>Maintain billing records for accounting purposes</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.3 Communication
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Send order confirmations and shipping notifications</li>
              <li>Deliver test results and health reports</li>
              <li>Schedule consultation appointments</li>
              <li>
                Send important updates about your account or our services
              </li>
              <li>
                Respond to your requests, questions, and feedback
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.4 Marketing (With Your Consent)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Send newsletters and educational content about functional medicine</li>
              <li>Inform you about new services, products, and promotions</li>
              <li>
                Provide personalized recommendations based on your health goals
              </li>
              <li>
                Invite you to participate in surveys or research studies
              </li>
            </ul>
            <p className="text-muted-foreground text-sm italic mb-6">
              You can opt out of marketing communications at any time by clicking the
              &quot;unsubscribe&quot; link in our emails or contacting us directly.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.5 Analytics and Improvement
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Analyze website usage to improve user experience</li>
              <li>Monitor and improve the quality of our services</li>
              <li>Develop new products and services</li>
              <li>Understand customer needs and preferences</li>
              <li>Conduct research and statistical analysis (anonymized data)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.6 Legal Compliance
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Comply with applicable laws and regulations</li>
              <li>Enforce our terms of service and policies</li>
              <li>Protect our legal rights and prevent misuse</li>
              <li>Respond to lawful requests from authorities</li>
            </ul>
          </section>

          {/* 3. How We Share Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. How We Share Your Information
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We respect your privacy and do not sell your personal or health information to
              third parties. We may share your information only in the following
              circumstances:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              3.1 Service Providers
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              We work with trusted third-party service providers who assist us in operating
              our business:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                <strong>Laboratory Partners:</strong> Accredited laboratories that process
                and analyze your blood samples
              </li>
              <li>
                <strong>Shipping Providers:</strong> Courier services that deliver test kits
                and sample collection
              </li>
              <li>
                <strong>Payment Processors:</strong> Secure payment platforms (e.g., Stripe)
                that handle transactions
              </li>
              <li>
                <strong>Email Service Providers:</strong> Platforms that help us send emails
                and newsletters
              </li>
              <li>
                <strong>Calendar/Scheduling Tools:</strong> Services like Calendly for
                booking consultations
              </li>
              <li>
                <strong>Cloud Hosting:</strong> Secure servers that store our data
              </li>
              <li>
                <strong>Analytics Providers:</strong> Tools like Google Analytics and Meta
                Pixel for website analytics
              </li>
            </ul>
            <p className="text-muted-foreground text-sm italic mb-6">
              All service providers are contractually obligated to protect your information
              and use it only for the purposes we specify.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              3.2 Legal Requirements
            </h3>
            <p className="text-foreground leading-relaxed mb-4">
              We may disclose your information if required to do so by law or in response to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>Valid legal processes (court orders, subpoenas, warrants)</li>
              <li>Government or regulatory investigations</li>
              <li>
                Protection of our rights, property, or safety, or that of others
              </li>
              <li>Emergency situations involving potential harm</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              3.3 Business Transfers
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              If we are involved in a merger, acquisition, or sale of assets, your
              information may be transferred as part of that transaction. We will notify you
              of any such change and any choices you may have regarding your information.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              3.4 With Your Consent
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              We may share your information with third parties when you have given us explicit
              consent to do so.
            </p>
          </section>

          {/* 4. Cookies and Tracking Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on
              our website.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              4.1 What Are Cookies?
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              Cookies are small text files stored on your device that help us recognize you
              and remember your preferences. We use both session cookies (which expire when
              you close your browser) and persistent cookies (which remain until deleted).
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              4.2 Types of Cookies We Use
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                <strong>Essential Cookies:</strong> Required for basic website functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors use our
                website (Google Analytics)
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Track your browsing to show relevant
                advertisements (Meta Pixel)
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and preferences
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              4.3 Managing Cookies
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              You can control cookies through your browser settings. Most browsers allow you
              to refuse cookies or delete existing cookies. However, disabling cookies may
              affect the functionality of our website.
            </p>
          </section>

          {/* 5. Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Data Security
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We take the security of your information seriously and implement appropriate
              technical and organizational measures to protect it:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                <strong>Encryption:</strong> All data transmitted between your browser and our
                servers is encrypted using SSL/TLS technology
              </li>
              <li>
                <strong>Secure Storage:</strong> Health data is stored on encrypted,
                secure servers with access controls
              </li>
              <li>
                <strong>Access Controls:</strong> Only authorized personnel have access to
                your information
              </li>
              <li>
                <strong>Regular Audits:</strong> We regularly review our security practices
                and update them as needed
              </li>
              <li>
                <strong>Payment Security:</strong> We use PCI-DSS compliant payment
                processors and do not store credit card information
              </li>
            </ul>
            <p className="text-muted-foreground text-sm italic mb-6">
              While we strive to protect your information, no method of transmission over the
              internet or electronic storage is 100% secure. We cannot guarantee absolute
              security.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Data Retention
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We retain your information for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required
              or permitted by law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                <strong>Health Records:</strong> Maintained for a minimum of 7 years in
                accordance with healthcare record-keeping standards
              </li>
              <li>
                <strong>Account Information:</strong> Retained while your account is active,
                plus 3 years after closure
              </li>
              <li>
                <strong>Transaction Records:</strong> Kept for 7 years for tax and accounting
                purposes
              </li>
              <li>
                <strong>Marketing Data:</strong> Deleted upon your request to unsubscribe
              </li>
            </ul>
          </section>

          {/* 7. Your Privacy Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Your Privacy Rights
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal
              information:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              7.1 Right to Access
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              You have the right to request a copy of the personal information we hold about
              you.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              7.2 Right to Correction
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              You can request that we correct any inaccurate or incomplete information.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              7.3 Right to Deletion
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              You may request that we delete your personal information, subject to certain
              legal obligations to retain records.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              7.4 Right to Restriction
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              You can request that we limit how we use your information in certain
              circumstances.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              7.5 Right to Data Portability
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              You may request a copy of your data in a structured, commonly used format.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              7.6 Right to Object
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              You can object to our processing of your information for marketing purposes or
              based on legitimate interests.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              7.7 Right to Withdraw Consent
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              Where we rely on your consent, you can withdraw it at any time.
            </p>

            <p className="text-foreground leading-relaxed mb-4">
              To exercise any of these rights, please contact us using the information
              provided below. We will respond to your request within 30 days.
            </p>
          </section>

          {/* 8. International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. International Data Transfers
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We are based in Perth, Western Australia. If you are accessing our services
              from outside Australia, please be aware that your information may be
              transferred to, stored, and processed in Australia or other countries where our
              service providers operate. By using our services, you consent to such
              transfers. We ensure that appropriate safeguards are in place to protect your
              information.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Our services are not intended for individuals under the age of 18. We do not
              knowingly collect personal information from children. If you are a parent or
              guardian and believe your child has provided us with information, please
              contact us, and we will delete such information.
            </p>
          </section>

          {/* 10. Third-Party Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Third-Party Links
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Our website may contain links to third-party websites (such as social media
              platforms, payment processors, or scheduling tools). This Privacy Policy does
              not apply to those external sites. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>
          </section>

          {/* 11. Changes to This Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or for legal, operational, or regulatory reasons. We will notify you
              of any material changes by posting the new Privacy Policy on this page and
              updating the &quot;Last Updated&quot; date. Your continued use of our services after such
              changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              12. Contact Us
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy
              or our data practices, please contact us:
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
