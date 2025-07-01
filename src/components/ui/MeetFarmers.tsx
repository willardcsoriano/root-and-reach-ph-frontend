// src/components/ui/MeetFarmers.tsx
import Image from 'next/image';
import { farmers } from '@/data/farmers';

export const MeetFarmers: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Meet Our Farmers</h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Get to know the people growing your food.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {farmers.map((f) => (
          <div
            key={f.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <Image
              src={f.image}
              alt={f.name}
              width={120}
              height={120}
              className="rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{f.name}</h3>
            <p className="text-green-600">{f.location}</p>
            <p className="mt-2 text-gray-600 text-sm">{f.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
