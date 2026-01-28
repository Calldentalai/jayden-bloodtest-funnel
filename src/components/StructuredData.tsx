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
    areaServed: ["United States", "United Kingdom", "Australia", "New Zealand"],
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
      brand: {
        "@type": "Brand",
        name: "Jayden Pileggi Functional Medicine",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "499",
        availability: "https://schema.org/InStock",
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
      brand: {
        "@type": "Brand",
        name: "Jayden Pileggi Functional Medicine",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "499",
        availability: "https://schema.org/InStock",
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
        name: "What makes this blood test different from standard lab tests?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard labs use ranges based on sick populations. We use optimal functional ranges based on thriving individuals, catching issues before they become problems.",
        },
      },
      {
        "@type": "Question",
        name: "How many biomarkers are tested?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our comprehensive panel tests over 100 biomarkers including thyroid markers, sex hormones, vitamins, minerals, metabolic markers, inflammation markers, and more.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I get the blood test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The test kit is shipped to your home. You then visit a local partner lab for a quick blood draw. We serve clients in the USA, UK, Australia, and New Zealand.",
        },
      },
      {
        "@type": "Question",
        name: "What do I receive with my results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You receive an 80+ page comprehensive report with all biomarkers analyzed, plus a personal consultation with a Certified Functional Medicine Practitioner.",
        },
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
    </>
  );
}
