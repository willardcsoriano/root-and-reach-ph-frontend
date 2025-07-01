// src/components/ui/HeroSection.tsx
import { Button } from './Button';

export const HeroSection: React.FC = () => (
  <section
    className="relative bg-cover bg-center h-screen"
    style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
    aria-label="Mission statement background"
  >
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-6 text-white">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        Rooted in Purpose,<br />Reaching Beyond
      </h1>
      <p className="mt-4 max-w-lg text-lg sm:text-xl">
        Connecting communities, fostering growth, and inspiring action across every root.
      </p>
      <Button href="/join" className="mt-8">
        Join the Movement
      </Button>
    </div>
  </section>
);
