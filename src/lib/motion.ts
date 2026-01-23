// src/lib/motion.ts
import { Variants } from "framer-motion";

/* =========================================================
   CONTAINERS (stagger animations)
========================================================= */
export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/* =========================================================
   PAGE TRANSITIONS
========================================================= */
export const pageFade: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* =========================================================
   ENTRANCE ANIMATIONS
========================================================= */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* =========================================================
   HOVER / INTERACTION EFFECTS (NOT Variants)
   Use with whileHover / whileTap
========================================================= */
import { TargetAndTransition } from "framer-motion";

export const hoverCard: TargetAndTransition = {
  scale: 1.03,
  y: -4,
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export const hoverImage = {
  scale: 1.08,
  transition: { duration: 0.3 }, // cubic-bezier
};

export const buttonHover = {
  scale: 1.05,
};

export const buttonTap = {
  scale: 0.97,
};

/* =========================================================
   TAGS & LIST ITEMS
========================================================= */
export const tagPop: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
