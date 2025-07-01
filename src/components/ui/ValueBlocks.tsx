// src/components/ui/ValueBlocks.tsx
import { FaLeaf, FaHandsHelping, FaGlobe } from 'react-icons/fa';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: <FaLeaf size={36} />,
    title: 'Community Roots',
    description: 'Building strong foundations through collective effort and support.',
  },
  {
    icon: <FaHandsHelping size={36} />,
    title: 'Collaborative Growth',
    description: 'Empowering each other to reach new heights together.',
  },
  {
    icon: <FaGlobe size={36} />,
    title: 'Global Reach',
    description: 'Extending our impact to communities everywhere.',
  },
];

export const ValueBlocks: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        These principles guide everything we do—from local meetups to global initiatives.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {values.map(({ icon, title, description }) => (
          <div key={title} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="text-primary mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
