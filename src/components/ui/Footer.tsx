import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 sm:px-8 shadow-inner">
      {/* 
        grid-cols-1       → up to 639px: 1 column
        sm:grid-cols-2    → 640–1279px: 2 columns
        xl:grid-cols-4    → ≥1280px: 4 columns
      */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10">
        {/* Brand & Mission (spans both cols until xl) */}
        <div className="sm:col-span-2 xl:col-span-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start mb-4">
            {/* — ROOT & REACH COCONUT LOGO — */}
            <svg
              className="h-8 w-8 mr-2 text-yellow-800"
              viewBox="0 0 64 64"
              fill="none"
            >
              <circle cx="32" cy="32" r="28" fill="currentColor" />
              <circle cx="22" cy="24" r="4" fill="#FFF" fillOpacity="0.8" />
              <circle cx="32" cy="20" r="4" fill="#FFF" fillOpacity="0.8" />
              <circle cx="42" cy="24" r="4" fill="#FFF" fillOpacity="0.8" />
            </svg>
            <span className="text-3xl font-bold text-white tracking-wide">
              Root &amp; Reach
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            Connecting you directly to the source. Fresh, local, and fair –
            empowering producers and delighting consumers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold text-white mb-5">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold text-white mb-5">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-center sm:justify-start">
              <Mail size={18} className="text-green-500 mr-3 flex-shrink-0" />
              <Link
                href="mailto:info@rootandreach.com"
                className="text-gray-400 hover:text-green-400 text-sm"
              >
                info@rootandreach.com
              </Link>
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <Phone size={18} className="text-green-500 mr-3 flex-shrink-0" />
              <Link
                href="tel:+639171234567"
                className="text-gray-400 hover:text-green-400 text-sm"
              >
                +63 (917) 123-4567
              </Link>
            </li>
            <li className="flex items-start justify-center sm:justify-start">
              <MapPin
                size={18}
                className="text-green-500 mr-3 flex-shrink-0 mt-1"
              />
              <address className="not-italic text-gray-400 text-sm leading-snug">
                123 Producer Lane,
                <br />
                Quezon City, Metro Manila
              </address>
            </li>
          </ul>
        </div>

        {/* Social & Newsletter (spans both cols until xl) */}
        <div className="sm:col-span-2 xl:col-span-1 text-center sm:text-left">
          <h3 className="text-xl font-semibold text-white mb-5">
            Connect With Us
          </h3>
          <div className="flex justify-center sm:justify-start space-x-4 mb-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              <Linkedin size={24} />
            </Link>
          </div>

          <h4 className="text-lg font-medium text-white mb-3">Stay Updated!</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-green-500"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Root &amp; Reach Philippines. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
