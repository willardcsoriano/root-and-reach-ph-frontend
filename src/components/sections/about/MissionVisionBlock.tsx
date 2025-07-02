// src/components/About/MissionVisionBlock.tsx
import React from 'react';

const MissionVisionBlock: React.FC = () => (
  <section className="py-20 px-6 max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700">
          To empower local producers with a seamless, intuitive platform for selling directly to consumers.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-700">
          A vibrant Philippine marketplace built on transparency, fair value, and community.
        </p>
      </div>
    </div>
  </section>
);

export default MissionVisionBlock;
