import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { EditorialIntro } from "@/components/EditorialIntro";
import { StillLifeIntegrations } from "@/components/StillLifeIntegrations";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductEditorial } from "@/components/ProductEditorial";
import { APIPreview } from "@/components/APIPreview";
import { SocialProof } from "@/components/SocialProof";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 overflow-hidden">
      <NavBar />
      <HeroSection />
      <EditorialIntro />
      <StillLifeIntegrations />
      <HowItWorks />
      <ProductEditorial />
      <APIPreview />
      <SocialProof />
      <CallToAction />
    </main>
  );
}
