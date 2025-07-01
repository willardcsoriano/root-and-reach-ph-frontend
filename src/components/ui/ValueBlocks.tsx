// src/components/ui/ValueBlocks.tsx
import { FaLeaf, FaMoneyBillWave, FaRecycle } from 'react-icons/fa';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: <FaLeaf size={36} className="text-green-600" />,
    title: 'Farm-to-Table',
    description: 'Your produce travels less, arriving fresher and tastier.',
  },
  {
    icon: <FaMoneyBillWave size={36} className="text-yellow-500" />,
    title: 'Fair Prices',
    description: 'Eliminate middlemen so farmers and consumers both win.',
  },
  {
    icon: <FaRecycle size={36} className="text-blue-500" />,
    title: 'Sustainable',
    description: 'Reduce food waste by buying exactly what you need.',
  },
];

export const ValueBlocks: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Why Choose Root & Reach?</h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        We believe in transparency, fairness, and sustainability in every transaction.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {values.map(({ icon, title, description }) => (
          <div
            key={title}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
