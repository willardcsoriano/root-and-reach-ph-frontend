// No need to import React or lucide-react here
// This file is just for data.

export interface Value {
  // The 'icon' property is no longer needed here,
  // as the icon will be handled in the component.
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

// Keep the data simple (strings and numbers)
export const valuesData: Value[] = [
  {
    title: "Sustainability",
    description:
      "Promoting environmentally friendly practices from farm to table.",
  },
  {
    title: "Fairness",
    description:
      "Ensuring equitable pricing for producers and transparency for consumers.",
  },
  {
    title: "Community",
    description:
      "Building strong relationships and supporting local economies.",
  },
  {
    title: "Quality",
    description:
      "Committing to the highest standards of freshness and product integrity.",
  },
  {
    title: "Empowerment",
    description:
      "Helping producers grow their businesses and consumers make informed choices.",
  },
  {
    title: "Innovation",
    description:
      "Continuously seeking new ways to improve the local food system.",
  },
];

export const teamData: TeamMember[] = [
  {
    name: "Juan Dela Cruz",
    role: "Co-Founder & CEO",
    avatar: "https://placehold.co/150x150/9ca3af/ffffff?text=JD",
    bio: "A visionary leader with a background in sustainable agriculture and technology. Juan is passionate about creating impactful solutions for local communities.",
  },
  {
    name: "Maria Santos",
    role: "Co-Founder & Head of Operations",
    avatar: "https://placehold.co/150x150/9ca3af/ffffff?text=MS",
    bio: "Maria brings extensive experience in logistics and supply chain management, ensuring that products move efficiently from farm to consumer.",
  },
  {
    name: "Lito Garcia",
    role: "Community Engagement Lead",
    avatar: "https://placehold.co/150x150/9ca3af/ffffff?text=LG",
    bio: "Lito is our bridge to the farming communities, working closely with producers to understand their needs and integrate them into the platform.",
  },
  {
    name: "Anna Reyes",
    role: "Marketing & Communications",
    avatar: "https://placehold.co/150x150/9ca3af/ffffff?text=AR",
    bio: "Anna tells the story of Root & Reach, connecting with consumers and highlighting the incredible efforts of our local producers through compelling content.",
  },
];
