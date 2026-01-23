"use client";

import AboutHero from "@/components/pages/about-page/AboutHero";
import MissionVisionSection from "@/components/pages/about-page/MissionVisionSection";
import OurStorySection from "@/components/pages/about-page/OurStorySection";
import OurValuesSection from "@/components/pages/about-page/OurValuesSection";
import TeamSection from "@/components/pages/about-page/TeamSection";
import CallToActionSection from "@/components/pages/about-page/CallToActionSection";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 font-inter text-gray-800">
      <AboutHero />
      <MissionVisionSection />
      <OurStorySection />
      <OurValuesSection />
      <TeamSection />
      <CallToActionSection />
    </div>
  );
};

export default AboutPage;
