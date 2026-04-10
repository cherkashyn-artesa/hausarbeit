import HeroSection from "./HeroSection";
import WhyBetterSection from "./WhyBetterSection";
import TrustSection from "./TrustSection";
import PricingSection from "./PricingSection";
import ComparisonSection from "./ComparisonSection";
import HowItWorksSection from "./HowItWorksSection";
import TestimonialsSection from "./TestimonialsSection";
import UniversitiesSection from "./UniversitiesSection";
import FeaturesSection from "./FeaturesSection";
import FaqSection from "./FaqSection";
import SiteFooter from "./SiteFooter";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <WhyBetterSection />
        <TrustSection />
        <PricingSection />
        <ComparisonSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <UniversitiesSection />
        <FeaturesSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
