"use client";

import { teamData } from "@/data/about-page/about-page-data";
import TeamMemberCard from "./TeamMemberCard";

const TeamSection = () => (
  <section className="py-16 md:py-24 bg-green-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
        Meet the Team
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        We are a dedicated group passionate about local food, sustainable
        agriculture, and community building.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamData.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
