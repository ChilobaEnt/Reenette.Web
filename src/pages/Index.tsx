import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { SafariSection } from '@/components/sections/safari-section';
import { GolfSection } from '@/components/sections/golf-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/sections/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SafariSection />
      <GolfSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
