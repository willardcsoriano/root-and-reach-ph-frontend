"use client"; // This directive marks the component as a Client Component

import React from 'react';
import {
  Leaf,
  Handshake,
  Heart,
  Lightbulb,
  Users,
  Award,
  Globe,
  ArrowRight,
  Link
} from 'lucide-react'; // Icons for various sections
import Image from 'next/image';

// --- Interface for Team Member Props ---
interface TeamMemberProps {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

// --- About Us Page Component ---
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20 md:py-32 overflow-hidden rounded-b-3xl shadow-xl">
        {/* Background organic shapes for visual interest */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-green-500 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-300 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            About Root & Reach
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Our journey to connect local producers with conscious consumers, fostering a thriving community.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-green-50 p-8 rounded-xl shadow-md border border-green-100 flex flex-col items-center">
              <Lightbulb size={60} className="text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower local farmers and artisans by providing a direct, transparent, and fair marketplace for their goods, while connecting consumers to fresh, high-quality, sustainably sourced products.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl shadow-md border border-green-100 flex flex-col items-center">
              <Globe size={60} className="text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To cultivate a vibrant, resilient, and equitable local food ecosystem that benefits communities, supports sustainable practices, and nourishes both people and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image

              src="https://placehold.co/600x400/84cc16/ffffff?text=Our+Story"
              alt="People working in a farm"
              className="rounded-3xl shadow-xl w-full h-auto object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-in-out"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Error'; }}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
              Our Journey So Far
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Root & Reach was born from a simple idea: that good food should be accessible, and those who produce it should be fairly compensated. We saw a disconnect between bustling city markets and the hardworking local farms, and we set out to build a bridge.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Starting as a small initiative, we&apos;ve grown into a thriving platform connecting hundreds of producers with thousands of consumers across Metro Manila and nearby provinces. Every order tells a story of community, sustainability, and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
            Values That Guide Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Every decision at Root & Reach is driven by our core principles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Leaf size={48} className="text-green-600" />}
              title="Sustainability"
              description="Promoting environmentally friendly practices from farm to table."
            />
            <ValueCard
              icon={<Handshake size={48} className="text-green-600" />}
              title="Fairness"
              description="Ensuring equitable pricing for producers and transparency for consumers."
            />
            <ValueCard
              icon={<Heart size={48} className="text-green-600" />}
              title="Community"
              description="Building strong relationships and supporting local economies."
            />
             <ValueCard
              icon={<Award size={48} className="text-green-600" />}
              title="Quality"
              description="Committing to the highest standards of freshness and product integrity."
            />
             <ValueCard
              icon={<Users size={48} className="text-green-600" />}
              title="Empowerment"
              description="Helping producers grow their businesses and consumers make informed choices."
            />
             <ValueCard
              icon={<Lightbulb size={48} className="text-green-600" />}
              title="Innovation"
              description="Continuously seeking new ways to improve the local food system."
            />
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
            Meet the Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We are a dedicated group passionate about local food, sustainable agriculture, and community building.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <TeamMember
              name="Juan Dela Cruz"
              role="Co-Founder & CEO"
              avatar="https://placehold.co/150x150/9ca3af/ffffff?text=JD"
              bio="A visionary leader with a background in sustainable agriculture and technology. Juan is passionate about creating impactful solutions for local communities."
            />
            <TeamMember
              name="Maria Santos"
              role="Co-Founder & Head of Operations"
              avatar="https://placehold.co/150x150/9ca3af/ffffff?text=MS"
              bio="Maria brings extensive experience in logistics and supply chain management, ensuring that products move efficiently from farm to consumer."
            />
            <TeamMember
              name="Lito Garcia"
              role="Community Engagement Lead"
              avatar="https://placehold.co/150x150/9ca3af/ffffff?text=LG"
              bio="Lito is our bridge to the farming communities, working closely with producers to understand their needs and integrate them into the platform."
            />
            <TeamMember
              name="Anna Reyes"
              role="Marketing & Communications"
              avatar="https://placehold.co/150x150/9ca3af/ffffff?text=AR"
              bio="Anna tells the story of Root & Reach, connecting with consumers and highlighting the incredible efforts of our local producers through compelling content."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 to-green-900 text-white rounded-t-3xl shadow-xl">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
            Join Our Growing Community!
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-12">
            Become a part of the Root & Reach family, whether as a conscious consumer or a dedicated producer.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Get In Touch <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

// --- Sub-Components for the AboutPage ---

// Value Card Component
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out group">
    <div className="flex justify-center mb-6 group-hover:animate-bounce-once">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

// Team Member Card Component
const TeamMember: React.FC<TeamMemberProps> = ({ name, role, avatar, bio }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col items-center text-center p-6 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <Image

      src={avatar}
      alt={name}
      className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-200 shadow-md"
      onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x150/9ca3af/ffffff?text=User'; }}
    />
    <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
    <p className="text-green-700 font-semibold text-md mb-3">{role}</p>
    <p className="text-gray-600 text-sm line-clamp-4">{bio}</p>
  </div>
);