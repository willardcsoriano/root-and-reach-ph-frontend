// src/components/ui/HeroSection.tsx
import { Button } from "./Button";

export const HeroSection: React.FC = () => (
  <section
    className="relative bg-cover bg-center h-[80vh]"
    style={{ backgroundImage: "url('/assets/farm-heroasdasdas.jpg')" }}
    aria-label="Fresh produce background"
  >
    <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
    <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-6 text-white">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        Farm Fresh to Your Doorstep
      </h1>
      <p className="mt-4 max-w-lg text-lg sm:text-xl">
        Connect directly with local farmers, cut out the middleman, and enjoy
        the freshest produce—every time.
      </p>
      <Button href="/products" className="mt-8">
        Shop Now
      </Button>
    </div>
  </section>
);
