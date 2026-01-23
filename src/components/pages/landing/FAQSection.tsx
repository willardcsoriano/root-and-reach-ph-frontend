// src/components/sections/landing/FAQSection.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

/* Motion variants */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const answerVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Root & Reach ensure product freshness?",
      answer:
        "We connect you directly with local producers, meaning products travel shorter distances and are often harvested or prepared shortly before delivery or pickup. This minimizes transit time and maximizes freshness.",
    },
    {
      question: "What kind of products can I find on Root & Reach?",
      answer:
        "You'll find a wide variety of fresh produce (fruits, vegetables), artisanal goods (breads, pastries, cheeses), local meats, dairy, and more. Our selection grows as more local producers join our platform!",
    },
    {
      question: "How do producers get paid?",
      answer:
        "Producers set their own prices and receive a fair share of each sale. Our platform is designed to minimize fees, ensuring more of your money goes directly to the hardworking individuals who produce your food.",
    },
    {
      question: "Is delivery available, or do I have to pick up?",
      answer:
        "Both options are available! Each producer specifies their delivery and/or pickup options. You can choose what works best for you during the ordering process.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <motion.div
        className="container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6"
          variants={fadeUp}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          variants={fadeUp}
        >
          Find quick answers to common questions about Root & Reach.
        </motion.p>

        <motion.div className="max-w-4xl mx-auto" variants={containerVariants}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="mb-4 bg-gray-450 rounded-xl shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  {isOpen ? (
                    <ChevronUp size={24} className="text-green-600" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-500" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      variants={answerVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="px-6 pb-6 pt-2 text-gray-700 text-base leading-relaxed overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
