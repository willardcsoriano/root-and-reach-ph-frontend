"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

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
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus("error");
      alert("Please fill in all fields.");
      return;
    }
    try {
      console.log("Form Data Submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold text-green-800 mb-6">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="john.doe@example.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Inquiry about products"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-y"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full flex items-center justify-center px-6 py-3 rounded-full text-white font-bold text-lg shadow-md transition-colors ${formStatus === "submitting" ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
          disabled={formStatus === "submitting"}
        >
          {formStatus === "submitting" ? (
            "Sending..."
          ) : (
            <>
              <Send size={20} className="mr-2" /> Send Message
            </>
          )}
        </button>
        {formStatus === "success" && (
          <p className="text-center text-green-600 mt-4">
            Message sent successfully!
          </p>
        )}
        {formStatus === "error" && (
          <p className="text-center text-red-600 mt-4">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
