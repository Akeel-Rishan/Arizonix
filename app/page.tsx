import { AIAutomation } from '@/components/sections/ai-automation';
import { Hero } from '@/components/sections/hero';
import { Industries } from '@/components/sections/industries';
import { Services } from '@/components/sections/services';
import { TechShowcase } from '@/components/sections/tech-showcase';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechShowcase />
      <Services />
      <Industries />
      <AIAutomation />
    </main>
  );
}
