import HeroSection from "@/components/sections/HeroSection";
import ResearchStory from "@/components/sections/ResearchStory";
import BiorefineryJourney from "@/components/sections/BiorefineryJourney";
import ProductShowcase from "@/components/sections/ProductShowcase";
import SmartPackagingTeaser from "@/components/sections/SmartPackagingTeaser";
import SustainabilityTeaser from "@/components/sections/SustainabilityTeaser";
import HomeCTA from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ResearchStory />
      <BiorefineryJourney />
      <ProductShowcase />
      <SmartPackagingTeaser />
      <SustainabilityTeaser />
      <HomeCTA />
    </>
  );
}
