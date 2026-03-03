// src/components/pages/support-page/SupportItem.tsx

"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, hoverCard } from "@/lib/motion";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function SupportItem({ icon, title, description, href }: Props) {
  const Wrapper = href ? "a" : "div";

  return (
    <motion.div variants={fadeUp} whileHover={hoverCard}>
      <Wrapper
        {...(href ? { href } : {})}
        className="flex items-center gap-4 p-4 border rounded-lg bg-white transition-colors"
      >
        {icon}
        <div>
          <p className="font-bold text-lg text-gray-900">{title}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </Wrapper>
    </motion.div>
  );
}
