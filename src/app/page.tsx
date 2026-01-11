import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  ServicesGrid,
  FeaturesGrid,
  DoctorsSection,
  Testimonials,
  CTASection,
} from "@/components/sections";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesGrid />
        <BeforeAfter />
        <FeaturesGrid />
        <Testimonials />
        <DoctorsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
