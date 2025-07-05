import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'; // Social and contact icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 rounded-t-xl shadow-inner mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand & Mission Statement */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            {/* Reusing the logo SVG from the header for consistency */}
            <svg
              className="h-8 w-8 mr-2 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M12 18s-4-2-4-6V7l4-2 4 2v5c0 4-4 6-4 6z" />
            </svg>
            <span className="text-3xl font-bold text-white tracking-wide">Root & Reach</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            Connecting you directly to the source. Fresh, local, and fair – empowering producers and delighting consumers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-5">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base">Home</Link></li>
            <li><Link href="/products" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base">Our Products</Link></li>
            <li><Link href="/how-it-works" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base">How It Works</Link></li>
            <li><Link href="/faq" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base">FAQs</Link></li>
            <li><Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base">Terms of Service</Link></li>
            <li><Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-5">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start">
              <Mail size={20} className="text-green-500 mr-3 flex-shrink-0" />
              <Link href="mailto:info@rootandreach.com" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base">info@rootandreach.com</Link>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone size={20} className="text-green-500 mr-3 flex-shrink-0" />
              <Link href="tel:+1234567890" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base">+1 (234) 567-890</Link>
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <MapPin size={20} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
              <address className="not-italic text-gray-400 text-base">
                123 Producer Lane,<br />
                Harvest City, AG 98765<br />
                Country
              </address>
            </li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-5">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <Link href="https://facebook.com/rootandreach" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
              <Facebook size={28} />
            </Link>
            <Link href="https://instagram.com/rootandreach" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
              <Instagram size={28} />
            </Link>
            <Link href="https://twitter.com/rootandreach" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
              <Twitter size={28} />
            </Link>
            <Link href="https://linkedin.com/company/rootandreach" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
              <Linkedin size={28} />
            </Link>
          </div>
          <h4 className="text-lg font-medium text-white mb-3">Stay Updated!</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-green-500 placeholder-gray-500"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-md transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Root & Reach. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
