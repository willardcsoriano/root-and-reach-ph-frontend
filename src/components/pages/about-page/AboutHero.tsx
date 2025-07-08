"use client";

const AboutHero = () => (
  <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20 md:py-32 overflow-hidden rounded-b-3xl shadow-xl">
    <div className="absolute top-0 left-0 w-48 h-48 bg-green-500 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-300 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
        About Root & Reach
      </h1>
      <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
        Our journey to connect local producers with conscious consumers,
        fostering a thriving community.
      </p>
    </div>
  </section>
);

export default AboutHero;
