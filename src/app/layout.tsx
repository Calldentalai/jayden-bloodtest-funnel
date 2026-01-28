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
});

export const metadata: Metadata = {
  title: "Comprehensive Blood Test | Jayden Pileggi Functional Medicine",
  description:
    "Get a comprehensive blood test with 100+ biomarkers analyzed. Delivered to your home, analyzed by a Certified Functional Medicine Practitioner. Available in USA, UK, Australia & NZ.",
  keywords: [
    "blood test",
    "functional medicine",
    "biomarkers",
    "health optimization",
    "blood analysis",
    "preventative health",
  ],
  authors: [{ name: "Jayden Pileggi" }],
  openGraph: {
    title: "Comprehensive Blood Test | Jayden Pileggi Functional Medicine",
    description:
      "100+ biomarkers analyzed. Optimal ranges, not just normal. Your personalized health blueprint.",
    type: "website",
    locale: "en_US",
    siteName: "Jayden Pileggi Functional Medicine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Blood Test | Jayden Pileggi Functional Medicine",
    description:
      "100+ biomarkers analyzed. Optimal ranges, not just normal. Your personalized health blueprint.",
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
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
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
