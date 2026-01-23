// src/components/pages/contact-page/ContactForm.tsx
"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeUp,
  hoverCard,
  buttonHover,
  buttonTap,
} from "@/lib/motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    if (!Object.values(formData).every(Boolean)) {
      setFormStatus("error");
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
      variants={fadeUp}
      whileHover={hoverCard}
    >
      <h2 className="text-3xl font-bold text-green-800 mb-6">
        Send Us a Message
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {[
          {
            label: "Your Name",
            name: "name",
            type: "text",
            placeholder: "John Doe",
          },
          {
            label: "Your Email",
            name: "email",
            type: "email",
            placeholder: "john@example.com",
          },
          {
            label: "Subject",
            name: "subject",
            type: "text",
            placeholder: "Inquiry about products",
          },
        ].map((field) => (
          <motion.div key={field.name} variants={fadeUp}>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              required
            />
          </motion.div>
        ))}

        <motion.div variants={fadeUp}>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Type your message here..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-y transition"
            required
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={formStatus === "submitting"}
          className={`w-full flex items-center justify-center px-6 py-3 rounded-full text-white font-bold text-lg shadow-md transition-colors ${
            formStatus === "submitting"
              ? "bg-green-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
          whileHover={buttonHover}
          whileTap={buttonTap}
          variants={fadeUp}
        >
          {formStatus === "submitting" ? (
            "Sending..."
          ) : (
            <>
              <Send size={20} className="mr-2" /> Send Message
            </>
          )}
        </motion.button>

        {formStatus === "success" && (
          <motion.p
            className="text-center text-green-600 mt-4"
            variants={fadeUp}
          >
            Message sent successfully!
          </motion.p>
        )}

        {formStatus === "error" && (
          <motion.p className="text-center text-red-600 mt-4" variants={fadeUp}>
            Please fill in all fields.
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
