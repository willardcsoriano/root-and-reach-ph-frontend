// src/components/sections/about/TeamBlock.tsx
import React from 'react'

const team = [
  {
    name: 'Ana Reyes',
    role: 'Product Designer',
    avatarUrl: '/avatars/ana.jpg',
  },
  {
    name: 'Carlos Dela Cruz',
    role: 'Community Manager',
    avatarUrl: '/avatars/carlos.jpg',
  },
  // …add more team members here
]

const TeamBlock: React.FC = () => (
  <section className="py-20 px-6">
    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
      Meet the Team
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {team.map((member) => (
        <div
          key={member.name}
          className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={member.avatarUrl}
            alt={member.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-medium text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default TeamBlock
