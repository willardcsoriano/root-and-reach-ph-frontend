// src/app/page.tsx
import { HeroSection } from '@/components/ui/HeroSection';
import { ValueBlocks } from '@/components/ui/ValueBlocks';
import { FeaturedProducts } from '@/components/ui/FeaturedProducts';
import { MeetFarmers } from '@/components/ui/MeetFarmers';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueBlocks />
      <FeaturedProducts />
      <MeetFarmers />
    </>
  );
}
