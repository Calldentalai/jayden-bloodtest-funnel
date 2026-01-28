import { Header } from "@/components/Header";
import { StickyCTA } from "@/components/StickyCTA";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Biomarkers } from "@/components/sections/Biomarkers";
import { SampleReport } from "@/components/sections/SampleReport";
import { AboutSection } from "@/components/sections/AboutSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { ProductOptions } from "@/components/sections/ProductOptions";
import { DiscoveryCall } from "@/components/sections/DiscoveryCall";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <StickyCTA />
      <Hero />
      <VideoSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Biomarkers />
      <SampleReport />
      <AboutSection />
      <Testimonials />
      <ProductOptions />
      <DiscoveryCall />
      <FAQ />
      <Footer />
    </main>
  );
}
