import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { AboutSection } from "@/components/sections/AboutSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DesignShowcase } from "@/components/sections/DesignShowcase"; // Added import

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-['Nunito']">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AppShowcase />
        <DesignShowcase /> {/* Added DesignShowcase */}
        <AboutSection />
        <DownloadSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};