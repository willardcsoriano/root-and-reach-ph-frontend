"use client"; // This directive marks the component as a Client Component

import React, { useState } from 'react';
import { Menu, X, Home, Package, Info, Mail, User, ShoppingCart, Tractor, MapPin } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

// Define interface for NavLink component props
interface NavLinkProps {
  href: string;
  icon?: React.ReactNode;
  text: string;
  count?: number; // ADDED: Optional prop specifically for a count
}

// Define interface for MobileNavLink component props
interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

// Header component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount(); // Get the count once

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg rounded-b-xl">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand Section */}
        <div className="flex items-center">
          <svg className="h-8 w-8 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 18s-4-2-4-6V7l4-2 4 2v5c0 4-4 6-4 6z" />
          </svg>
          <a href="/" className="text-2xl font-bold font-inter tracking-wide">
            Root & Reach
          </a>
        </div>

        {/* Desktop/Tablet Navigation Links */}
        <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
          <NavLink href="/" icon={<Home size={18} />} text="Home" />
          <NavLink href="/products" icon={<Package size={18} />} text="Products" />
          <NavLink href="/farmers" icon={<Tractor size={18} />} text="Farmers" />
          <NavLink href="/nearby-farms" icon={<MapPin size={18} />} text="Nearby Farms" />
          <NavLink href="/about" icon={<Info size={18} />} text="About Us" />
          <NavLink href="/contact" icon={<Mail size={18} />} text="Contact" />
          {/* MODIFIED: Cart Link now uses the 'count' prop */}
          <NavLink
            href="/cart"
            icon={<ShoppingCart size={18} />}
            text="Cart"
            count={cartItemCount}
          />
          {/* My Account Link */}
          <a
            href="/profile"
            className="flex items-center px-3 py-2 lg:px-4 bg-white text-green-700 rounded-full hover:bg-green-100 transition-colors duration-300 shadow-md"
            title="My Account" // This provides the hover text
          >
            <User size={18} className="mr-0 lg:mr-2" />
            <span className="font-semibold hidden lg:inline">My Account</span>
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300" aria-label="Toggle navigation menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-green-700 px-4 py-4 rounded-b-lg shadow-inner">
          <div className="flex flex-col space-y-3">
            <MobileNavLink href="/" icon={<Home size={20} />} text="Home" onClick={toggleMobileMenu} />
            <MobileNavLink href="/products" icon={<Package size={20} />} text="Products" onClick={toggleMobileMenu} />
            {/* MODIFIED: Mobile cart link text */}
            <MobileNavLink href="/cart" icon={<ShoppingCart size={20} />} text={`Cart (${cartItemCount})`} onClick={toggleMobileMenu} />
            {/* ... other mobile links */}
          </div>
        </div>
      )}
    </header>
  );
};

// --- KEY CHANGES ARE IN THIS COMPONENT ---
const NavLink: React.FC<NavLinkProps> = ({ href, icon, text, count }) => (
  <a
    href={href}
    className="flex items-center text-white hover:text-green-200 transition-colors duration-300 font-medium text-lg group"
    title={text} // EXPLANATION: This attribute creates the hover tooltip
  >
    {icon && <span className="mr-0 lg:mr-2 group-hover:scale-110 transition-transform duration-300">{icon}</span>}
    
    {/* The text label, which hides on medium screens */}
    <span className="hidden lg:inline">{text}</span>

    {/* The count, which stays visible but gets a margin when the text appears */}
    {typeof count !== 'undefined' && (
      <span className="ml-1 text-sm font-semibold">
        ({count})
      </span>
    )}
  </a>
);


// No changes needed for MobileNavLink, but included for completeness
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