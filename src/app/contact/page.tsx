// src/app/contact/page.tsx
"use client";

import ContactHero from "@/components/pages/contact-page/ContactHero";
import ContactForm from "@/components/pages/contact-page/ContactForm";
import ContactInfo from "@/components/pages/contact-page/ContactInfo";
import ContactLayout from "@/components/pages/contact-page/ContactLayout";
import CTA from "@/components/ui/CTA";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 font-inter text-gray-800">
      <ContactHero />

      <ContactLayout>
        <ContactForm />
        <ContactInfo />
      </ContactLayout>

      <CTA
        title="Ready to Connect?"
        text="Whether you're a producer, consumer, or partner, we're excited to grow together."
        buttonText="Back to Home"
        buttonLink="/"
      />
    </div>
  );
}
