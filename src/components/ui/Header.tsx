"use client"; // This directive marks the component as a Client Component

import React, { useState } from 'react';
import { Menu, X, Home, Package, Info, Mail, User, ShoppingCart } from 'lucide-react'; // Importing icons from lucide-react, added ShoppingCart
import { useCart } from '@/contexts/CartContext'; // Import useCart hook

// Define interface for NavLink component props
interface NavLinkProps {
  href: string;
  icon?: React.ReactNode; // icon can be any React node (e.g., Lucide icon component)
  text: string;
  showCount?: boolean; // Optional prop to indicate if item count should be shown
}

// Define interface for MobileNavLink component props
interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void; // Mobile links also have an onClick handler to close the menu
}

// Header component for the Root and Reach application
const Header = () => {
  // State to manage the visibility of the mobile navigation menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartItemCount } = useCart(); // Use the useCart hook to get item count

  // Function to toggle the mobile navigation menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg rounded-b-xl">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand Section */}
        <div className="flex items-center">
          {/* Using a simple SVG for the logo to avoid external image dependencies */}
          <svg
            className="h-8 w-8 mr-2 text-white"
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
          <a href="/" className="text-2xl font-bold font-inter tracking-wide">
            Root & Reach
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" icon={<Home size={18} />} text="Home" />
          <NavLink href="/products" icon={<Package size={18} />} text="Products" />
          <NavLink href="/about" icon={<Info size={18} />} text="About Us" />
          <NavLink href="/contact" icon={<Mail size={18} />} text="Contact" />
          {/* Cart Link */}
          <NavLink href="/cart" icon={<ShoppingCart size={18} />} text={`Cart (${getCartItemCount()})`} showCount={true} />
          {/* My Account Link */}
          <a
            href="/profile"
            className="flex items-center px-4 py-2 bg-white text-green-700 rounded-full hover:bg-green-100 transition-colors duration-300 shadow-md"
          >
            <User size={18} className="mr-2" />
            <span className="font-semibold">My Account</span>
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu (Conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-700 px-4 py-4 rounded-b-lg shadow-inner">
          <div className="flex flex-col space-y-3">
            <MobileNavLink href="/" icon={<Home size={20} />} text="Home" onClick={toggleMobileMenu} />
            <MobileNavLink href="/products" icon={<Package size={20} />} text="Products" onClick={toggleMobileMenu} />
            <MobileNavLink href="/about" icon={<Info size={20} />} text="About Us" onClick={toggleMobileMenu} />
            <MobileNavLink href="/contact" icon={<Mail size={20} />} text="Contact" onClick={toggleMobileMenu} />
            {/* Mobile Cart Link */}
            <MobileNavLink href="/cart" icon={<ShoppingCart size={20} />} text={`Cart (${getCartItemCount()})`} onClick={toggleMobileMenu} />
            <MobileNavLink href="/profile" icon={<User size={20} />} text="My Account" onClick={toggleMobileMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

// Helper component for desktop navigation links
const NavLink: React.FC<NavLinkProps> = ({ href, icon, text }) => (
  <a
    href={href}
    className="flex items-center text-white hover:text-green-200 transition-colors duration-300 font-medium text-lg group"
  >
    {icon && <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{icon}</span>}
    {text}
  </a>
);

// Helper component for mobile navigation links
const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, icon, text, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center text-white hover:bg-green-600 px-4 py-3 rounded-lg transition-colors duration-300 text-lg font-medium"
  >
    {icon && <span className="mr-3">{icon}</span>}
    {text}
  </a>
);

export default Header;
