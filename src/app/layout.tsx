import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { StructuredData } from "@/components/StructuredData";
import { ANALYTICS_CONFIG, SITE_CONFIG } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jayden-bloodtest-funnel.vercel.app"),
  title: "Comprehensive Blood Test | 100+ Biomarkers | Jayden Pileggi Functional Medicine",
  description:
    "Get a comprehensive blood test with 100+ biomarkers analyzed using optimal functional ranges. Personal consultation with a Certified Functional Medicine Practitioner. Available in USA, UK, Australia & NZ.",
  keywords: [
    "comprehensive blood test",
    "functional medicine",
    "biomarkers",
    "health optimization",
    "blood analysis",
    "preventative health",
    "thyroid testing",
    "hormone testing",
    "vitamin deficiency test",
    "optimal blood ranges",
  ],
  authors: [
    {
      name: "Jayden Pileggi",
      url: "https://www.jaydenpileggifunctionalmedicine.com/",
    },
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Comprehensive Blood Test | Jayden Pileggi Functional Medicine",
    description:
      "100+ biomarkers analyzed. Optimal ranges, not just normal. Personal consultation included. Your personalized health blueprint.",
    type: "website",
    locale: "en_US",
    siteName: "Jayden Pileggi Functional Medicine",
    url: "https://jayden-bloodtest-funnel.vercel.app",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Comprehensive Blood Test - 100+ Biomarkers Analyzed by Certified Functional Medicine Practitioner Jayden Pileggi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Blood Test | Jayden Pileggi Functional Medicine",
    description:
      "100+ biomarkers analyzed. Optimal ranges, not just normal. Personal consultation included.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource Preconnects & DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        {/* Preload hero image for LCP optimization */}
        <link rel="preload" as="image" href="/images/jayden-hero.jpg" type="image/jpeg" />

        {/* Meta Pixel Code */}
        {ANALYTICS_CONFIG.metaPixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${ANALYTICS_CONFIG.metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Google Analytics */}
        {ANALYTICS_CONFIG.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAnalyticsId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ANALYTICS_CONFIG.googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
