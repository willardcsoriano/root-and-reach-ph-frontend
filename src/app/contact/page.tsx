"use client";

import ContactHero from "@/components/pages/contact-page/ContactHero";
import ContactForm from "@/components/pages/contact-page/ContactForm";
import ContactInfo from "@/components/pages/contact-page/ContactInfo";
import CTA from "@/components/ui/CTA"; // Using the reusable CTA

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      <ContactHero />

      <div className="container mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>

      <CTA
        title="Ready to Connect?"
        text="Whether you're a producer, consumer, or partner, we're excited to grow together."
        buttonText="Back to Home" // Changed text
        buttonLink="/" // Changed link
      />
    </div>
  );
};

export default ContactPage;
