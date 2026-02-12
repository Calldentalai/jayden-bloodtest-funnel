"use client";

import Script from "next/script";
import { SITE_CONFIG } from "@/lib/config";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Jayden Pileggi Functional Medicine",
    description:
      "Comprehensive blood testing and functional medicine services with 100+ biomarkers analyzed using optimal ranges.",
    url: SITE_CONFIG.siteUrl,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    image: `${SITE_CONFIG.siteUrl}/images/jayden-hero.jpg`,
    logo: `${SITE_CONFIG.siteUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "Western Australia",
      addressCountry: "AU",
    },
    founder: {
      "@type": "Person",
      name: "Jayden Pileggi",
      jobTitle: "Certified Functional Medicine Practitioner",
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.mainWebsite,
    ],
    priceRange: "$$",
    areaServed: [
      "United States",
      "United Kingdom",
      "Australia",
      "New Zealand",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    name: "Comprehensive Blood Test",
    description:
      "In-depth blood analysis with 100+ biomarkers including thyroid, hormones, vitamins, and metabolic markers. Analyzed using optimal functional ranges, not just standard lab ranges.",
    provider: {
      "@type": "MedicalBusiness",
      name: "Jayden Pileggi Functional Medicine",
    },
    usesDevice: {
      "@type": "MedicalDevice",
      name: "CLIA-certified laboratory testing",
    },
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Functional Medicine",
    },
  };

  const productSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Comprehensive Male Blood Test",
      description:
        "Complete blood panel for men with 100+ biomarkers including testosterone, thyroid, metabolic markers, vitamins, and more. Includes 80+ page report and personal consultation.",
      image: `${SITE_CONFIG.siteUrl}/images/jayden-hero.jpg`,
      brand: {
        "@type": "Brand",
        name: "Jayden Pileggi Functional Medicine",
      },
      offers: {
        "@type": "Offer",
        url: `${SITE_CONFIG.siteUrl}`,
        priceCurrency: "USD",
        price: "499.00",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Jayden Pileggi Functional Medicine",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Comprehensive Female Blood Test",
      description:
        "Complete blood panel for women with 100+ biomarkers including hormones, thyroid, metabolic markers, vitamins, and more. Includes 80+ page report and personal consultation.",
      image: `${SITE_CONFIG.siteUrl}/images/jayden-hero.jpg`,
      brand: {
        "@type": "Brand",
        name: "Jayden Pileggi Functional Medicine",
      },
      offers: {
        "@type": "Offer",
        url: `${SITE_CONFIG.siteUrl}`,
        priceCurrency: "USD",
        price: "499.00",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Jayden Pileggi Functional Medicine",
        },
      },
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is this different from a regular blood test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard lab tests typically measure 20-30 biomarkers and use 'normal' ranges based on population averages that include unhealthy individuals. Our comprehensive test analyzes 100+ biomarkers and compares your results to optimal ranges — the levels seen in thriving, healthy people. This approach catches early dysfunction before it becomes disease.",
        },
      },
      {
        "@type": "Question",
        name: "How does the testing process work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After ordering, you'll receive a confirmation email with instructions based on your location. Depending on where you are, you may receive a test kit or a pathology form to visit a local lab. A quick blood draw takes about 10 minutes. Your samples are then analyzed, and within 3-4 weeks, you'll receive your comprehensive 80+ page report plus a personal consultation with Jayden.",
        },
      },
      {
        "@type": "Question",
        name: "What biomarkers are included in the test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The test covers 8 major health categories: Cardiovascular Health, Blood Sugar and Metabolism, Liver Function, Thyroid and Hormones, Immune System markers, Vitamins and Minerals, Kidney Function, and Inflammation Markers — plus gender-specific hormone panels tailored to your biology.",
        },
      },
      {
        "@type": "Question",
        name: "Who is this test for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This test is for two types of people: those who feel 'off' but have been told their labs are normal — dealing with unexplained fatigue, brain fog, or weight issues — and those who are already healthy but want to optimize their performance and take their health to the next level.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to get results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From the time of your blood draw, you can expect your comprehensive report within 3-4 weeks. This includes a detailed 80+ page analysis, and you'll also schedule a personal consultation with Jayden to walk through your results together.",
        },
      },
      {
        "@type": "Question",
        name: "What happens during the consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "During your one-on-one consultation, Jayden walks you through your results in detail. He explains what each marker means, identifies priority areas for improvement, and provides a personalized action plan — including dietary recommendations, lifestyle changes, and supplement suggestions tailored to your unique results.",
        },
      },
      {
        "@type": "Question",
        name: "Can I order from outside Australia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We serve clients globally with partner labs across the USA, UK, New Zealand, and Australia. After ordering, you'll receive location-specific instructions to complete your blood draw at a lab near you.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a money-back guarantee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we stand behind our testing. If you're not satisfied with the thoroughness of your report or consultation, simply reach out within 30 days and we'll work with you to make it right.",
        },
      },
    ],
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jayden Pileggi Functional Medicine",
    url: SITE_CONFIG.siteUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "2500",
      ratingCount: "2500",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Comprehensive Blood Test",
        item: `${SITE_CONFIG.siteUrl}/#products`,
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Your Comprehensive Blood Test",
    description:
      "Four simple steps to get your comprehensive blood analysis with 100+ biomarkers.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Order Your Test Kit",
        text: "Select male or female blood test and complete your order online.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Receive Confirmation",
        text: "You'll receive a confirmation email with instructions based on your location.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Complete Your Blood Draw",
        text: "Follow your location-specific instructions to complete your blood draw.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Get Your Results",
        text: "In 3-4 weeks, receive your 80+ page report plus personal consultation.",
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {productSchemas.map((product, index) => (
        <Script
          key={index}
          id={`product-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
      ))}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="aggregate-rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
