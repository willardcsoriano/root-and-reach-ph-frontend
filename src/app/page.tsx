"use client"; // This directive marks the component as a Client Component

import Image from "next/image";
import React, { useState } from "react";
import {
  ArrowRight,
  Leaf,
  Handshake,
  Heart,
  Truck,
  ShoppingCart,
  Award,
  ChevronDown,
  ChevronUp,
  UserCheck,
  Factory,
  MessageCircle,
  MapPin,
  Clock,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

// --- Prop Interfaces for Sub-Components ---

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WorkStepProps {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  link: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

// --- Main HomePage Component ---
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Featured Products/Categories Section */}
      <FeaturedProductsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default HomePage;

// --- Sub-Components for the HomePage ---

// 1. Hero Section Component
const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-green-500 to-green-700 text-white py-20 md:py-32 overflow-hidden rounded-b-3xl shadow-xl">
    {/* Background organic shapes for visual interest */}
    <div className="absolute top-0 left-0 w-48 h-48 bg-green-400 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-300 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-blue-300 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Rooted in Purpose, <br className="hidden md:inline" />
          Reaching Beyond.
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Connecting you directly to the heart of local produce. Fresh, fair,
          and empowering.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore Products <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full shadow-lg hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out overflow-hidden">
          <Image
            src="https://placehold.co/600x400/84cc16/ffffff?text=Fresh+Produce"
            alt="Fresh produce"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

// 2. About Us Section Component
const AboutSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
        Our Mission: Connecting Communities
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        At Root & Reach, we believe in the power of direct connections. We
        bridge the gap between dedicated local producers and conscious
        consumers, fostering a sustainable ecosystem where quality, fairness,
        and community thrive.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AboutCard
          icon={<Leaf size={48} className="text-green-600" />}
          title="Fresh & Local"
          description="Direct from farm to table, ensuring unparalleled freshness and supporting local economies."
        />
        <AboutCard
          icon={<Handshake size={48} className="text-green-600" />}
          title="Fair & Transparent"
          description="Producers receive fair compensation, and consumers get transparent pricing and sourcing."
        />
        <AboutCard
          icon={<Heart size={48} className="text-green-600" />}
          title="Empowering Communities"
          description="Building stronger local food systems and fostering a sense of community around good food."
        />
      </div>
    </div>
  </section>
);

// Helper for AboutSection
const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out group">
    <div className="flex justify-center mb-6 group-hover:animate-bounce-once">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

// 3. How It Works Section Component
const HowItWorksSection = () => (
  <section className="py-16 md:py-24 bg-green-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-12">
        Simple Steps to Freshness
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <WorkStep
          step="1"
          icon={<ShoppingCart size={48} className="text-white" />}
          title="Discover & Select"
          description="Browse a curated selection of fresh produce, artisanal goods, and more from local producers."
        />
        <WorkStep
          step="2"
          icon={<Truck size={48} className="text-white" />}
          title="Order & Connect"
          description="Place your order directly with the producer. Enjoy transparent communication and delivery options."
        />
        <WorkStep
          step="3"
          icon={<Award size={48} className="text-white" />}
          title="Enjoy & Support"
          description="Receive high-quality, fresh products and feel good knowing you're supporting local businesses."
        />
      </div>
    </div>
  </section>
);

// Helper for HowItWorksSection
const WorkStep: React.FC<WorkStepProps> = ({
  step,
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-6">
      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full border-4 border-white shadow-md">
        {step}
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-base max-w-xs">{description}</p>
  </div>
);

// 4. Featured Products/Categories Section Component
const FeaturedProductsSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
        Our Bestsellers
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        Discover the freshest and most popular items directly from our local
        producers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          image="https://placehold.co/400x300/84cc16/ffffff?text=Organic+Vegetables"
          title="Organic Seasonal Vegetables"
          description="Farm-fresh, chemical-free vegetables harvested daily."
          price="₱150/kg"
          link="/products/vegetables"
        />
        <ProductCard
          image="https://placehold.co/400x300/facc15/ffffff?text=Artisanal+Bread"
          title="Artisanal Sourdough Bread"
          description="Hand-baked with natural starters for a perfect crust."
          price="₱250/loaf"
          link="/products/bread"
        />
        <ProductCard
          image="https://placehold.co/400x300/34d399/ffffff?text=Local+Honey"
          title="Pure Local Honey"
          description="Sweet, raw honey from local bee farms, rich in flavor."
          price="₱300/jar"
          link="/products/honey"
        />
      </div>
      <div className="mt-12">
        <Link
          href="/products"
          className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          View All Products <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </div>
  </section>
);

// Helper for FeaturedProductsSection
const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  link,
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <Image
      src={image}
      alt={title}
      width={400}
      height={300}
      className="w-full h-48 object-cover"
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/400x300/cccccc/333333?text=Image+Unavailable";
      }}
    />
    <div className="p-6 text-left">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-green-700 font-bold text-lg">{price}</span>
        <Link
          href={link}
          className="text-green-600 hover:text-green-800 font-semibold flex items-center"
        >
          Details <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  </div>
);

// 5. Why Choose Us Section Component
const WhyChooseUsSection = () => (
  <section className="py-16 md:py-24 bg-gray-100">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
        Why Choose Root & Reach?
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        We&apos;re more than just a marketplace; we&apos;re a movement towards a
        better, more connected food system.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<UserCheck size={40} className="text-green-600" />}
          title="Direct from Producers"
          description="No middlemen. Get your goods straight from the hands that grew or made them."
        />
        <FeatureCard
          icon={<MapPin size={40} className="text-green-600" />}
          title="Hyper-Local Sourcing"
          description="Support your community and reduce your carbon footprint by buying locally."
        />
        <FeatureCard
          icon={<DollarSign size={40} className="text-green-600" />}
          title="Fair Prices"
          description="Benefit from fair prices for consumers and equitable earnings for producers."
        />
        <FeatureCard
          icon={<Award size={40} className="text-green-600" />}
          title="Guaranteed Quality"
          description="Our producers are vetted for quality, ensuring you receive only the best."
        />
        <FeatureCard
          icon={<Clock size={40} className="text-green-600" />}
          title="Seasonal Freshness"
          description="Enjoy produce at its peak, aligned with natural growing seasons."
        />
        <FeatureCard
          icon={<MessageCircle size={40} className="text-green-600" />}
          title="Community Focused"
          description="Join a growing community passionate about sustainable living and local support."
        />
      </div>
    </div>
  </section>
);

// Helper for WhyChooseUsSection
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

// 6. Testimonials Section Component
const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 to-green-900 text-white rounded-t-3xl shadow-xl">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
        What Our Community Says
      </h2>
      <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-12">
        Hear from happy consumers and thriving producers who are part of the
        Root & Reach family.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialCard
          quote="Root & Reach has transformed the way I buy groceries! The produce is incredibly fresh, and I love knowing exactly where my food comes from. Supporting local farmers has never been easier."
          name="Maria S."
          role="Happy Consumer"
          avatar="https://placehold.co/100x100/9ca3af/ffffff?text=MS"
        />
        <TestimonialCard
          quote="As a small farmer, Root & Reach has been a game-changer. I can connect directly with customers, get fair prices for my hard work, and focus on what I do best – growing amazing food!"
          name="Mang Tonyo"
          role="Local Producer"
          avatar="https://placehold.co/100x100/9ca3af/ffffff?text=MT"
        />
      </div>
    </div>
  </section>
);

// Helper for TestimonialsSection
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatar,
}) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800 text-left flex flex-col items-center md:items-start transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <Image
      src={avatar}
      alt={name}
      width={100}
      height={100}
      className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-green-200 shadow-md"
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/100x100/9ca3af/ffffff?text=User";
      }}
    />
    <p className="text-lg italic mb-6 text-center md:text-left">
      &quot;{quote}&quot;
    </p>
    <p className="text-lg italic mb-6 text-center md:text-left">
      &quot;{quote}&quot;
    </p>
    <div className="font-semibold text-center md:text-left">
      <p className="text-green-700 text-xl">{name}</p>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  </div>
);

// 7. Call to Action Section Component
const CallToActionSection = () => (
  <section className="py-16 md:py-24 bg-green-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
        Join the Root & Reach Movement!
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        Whether you&apos;re a consumer seeking fresh, local goods or a producer
        looking to connect directly with your market, Root & Reach is for you.
        Whether you&apos;re a consumer seeking fresh, local goods or a producer
        looking to connect directly with your market, Root & Reach is for you.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Factory size={60} className="text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            For Producers
          </h3>
          <p className="text-gray-600 mb-6">
            Expand your reach, get fair prices, and simplify your sales process.
          </p>
          <Link
            href="/producers/signup"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-md hover:bg-green-700 transition-colors duration-300"
          >
            Register as a Producer <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <ShoppingCart size={60} className="text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            For Consumers
          </h3>
          <p className="text-gray-600 mb-6">
            Access fresh, high-quality local products directly from the source.
          </p>
          <Link
            href="/consumer/signup"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-md hover:bg-green-700 transition-colors duration-300"
          >
            Start Shopping Now <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// 8. FAQ Section Component
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
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Find quick answers to common questions about Root & Reach.
        </p>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-gray-50 rounded-xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={24} className="text-green-600" />
                ) : (
                  <ChevronDown size={24} className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 pt-2 text-gray-700 text-base leading-relaxed animate-fade-in"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
