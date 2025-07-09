import React from "react";
import FAQSection from "@/components/pages/landing/FAQSection";
import CTA from "@/components/ui/CTA";

const FAQPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* The actual FAQ content, reused as a component */}
      <FAQSection />

      {/* Reusable Call to Action */}
      <CTA
        title="Still Have Questions?"
        text="Our team is ready to help you with any questions or concerns you might have."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
};

export default FAQPage;
