import { AIAutomation } from '@/components/sections/ai-automation';
import { Hero } from '@/components/sections/hero';
import { Industries } from '@/components/sections/industries';
import { PortfolioPreview } from '@/components/sections/portfolio-preview';
import { Process } from '@/components/sections/process';
import { Services } from '@/components/sections/services';
import { TechShowcase } from '@/components/sections/tech-showcase';
import { Testimonials } from '@/components/sections/testimonials';
import { WhyChooseUs } from '@/components/sections/why-choose-us';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechShowcase />
      <Services />
      <Industries />
      <AIAutomation />
      <PortfolioPreview />
      <Process />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
