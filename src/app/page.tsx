// src/app/page.tsx
import { HeroSection } from '@/components/ui/HeroSection';
import { ValueBlocks } from '@/components/ui/ValueBlocks';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueBlocks />
      {/* Future: LatestArticles, FeaturedEvents, Testimonials, etc. */}
    </>
  );
}
