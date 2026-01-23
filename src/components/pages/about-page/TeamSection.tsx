// src/components/pages/about-page/TeamSection.tsx
"use client";

import { teamData } from "@/data/about-page/about-page-data";
import TeamMemberCard from "./TeamMemberCard";
import { motion } from "framer-motion";
import { containerVariants, fadeUp } from "@/lib/motion";

const TeamSection = () => (
  <section className="py-16 md:py-24 bg-green-50">
    <motion.div
      className="container mx-auto px-6 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6"
        variants={fadeUp}
      >
        Meet the Team
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
        variants={fadeUp}
      >
        We are a dedicated group passionate about local food...
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
      >
        {teamData.map((member) => (
          <motion.div key={member.name} variants={fadeUp}>
            <TeamMemberCard member={member} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default TeamSection;
