import React from "react";
import Image from "next/image";
import { TeamMember } from "@/data/about-page/about-page-data";

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col items-center text-center p-6 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <Image
      src={member.avatar}
      alt={member.name}
      width={112}
      height={112}
      className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-200 shadow-md"
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/150x150/9ca3af/ffffff?text=User";
      }}
    />
    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
    <p className="text-green-700 font-semibold text-md mb-3">{member.role}</p>
    <p className="text-gray-600 text-sm line-clamp-4">{member.bio}</p>
  </div>
);

export default TeamMemberCard;
