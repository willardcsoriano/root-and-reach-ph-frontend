// src/components/about/CoreValuesBlock.tsx
import React from 'react';

const values = [
  { icon: '🌱', title: 'Sustainability' },
  { icon: '👐', title: 'Trust & Transparency' },
  { icon: '🌍', title: 'Community Empowerment' },
  { icon: '⚙️', title: 'Accessibility for All' },
];

const CoreValuesBlock: React.FC = () => (
  <section className="bg-white py-20 px-6">
    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
      What We Stand For
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {values.map(({ icon, title }) => (
        <div
          key={title}
          className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-lg transition"
        >
          <span className="text-2xl">{icon}</span>
          <span className="text-gray-800 font-medium">{title}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CoreValuesBlock;
