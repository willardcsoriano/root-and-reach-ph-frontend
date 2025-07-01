// src/components/ui/FeaturedProducts.tsx
import Image from 'next/image';
import { Button } from './Button';
import { products } from '@/data/products';

export const FeaturedProducts: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Featured Produce</h2>
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
          >
            {/* 1. Responsive image container */}
            <div className="relative w-full pt-[75%]"> 
              <Image
                src={prod.image}
                alt={prod.name}
                fill                            // makes the image absolutely fill the parent
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>

            {/* 2. Product info */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold">{prod.name}</h3>
              <p className="text-gray-600 mt-1">By {prod.farmer}</p>
              <p className="mt-2 text-lg font-bold">₱{prod.price.toFixed(2)}</p>
              <Button href={`/products/${prod.id}`} className="mt-auto w-full text-center">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
