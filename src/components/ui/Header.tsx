"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Package,
  Tractor,
  MapPin,
  Info,
  Mail,
  MessageSquare,
  ShoppingCart,
  User,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  icon?: React.ReactNode;
  text: string;
  count?: number;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

// Icon-only link for the mid-size nav
const IconLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  count?: number;
  title: string;
}> = ({ href, icon, count, title }) => (
  <Link
    href={href}
    title={title}
    className="relative text-white hover:text-green-200 transition-colors duration-300 p-2"
  >
    {icon}
    {typeof count === "number" && (
      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
        {count}
      </span>
    )}
  </Link>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  const toggleMobileMenu = () => setIsMobileMenuOpen((o) => !o);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg rounded-b-xl">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
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
          <Link
            href="/"
            className="text-2xl font-bold font-inter tracking-wide"
          >
            Root &amp; Reach
          </Link>
        </div>

        {/* Full nav (≥1280px) */}
        <div className="hidden xl:flex items-center space-x-6">
          <NavLink href="/" icon={<Home size={18} />} text="Home" />
          <NavLink
            href="/products"
            icon={<Package size={18} />}
            text="Products"
          />
          <NavLink
            href="/farmers"
            icon={<Tractor size={18} />}
            text="Farmers"
          />
          <NavLink
            href="/nearby-farms"
            icon={<MapPin size={18} />}
            text="Nearby Farms"
          />
          <NavLink href="/about" icon={<Info size={18} />} text="About Us" />
          <NavLink href="/contact" icon={<Mail size={18} />} text="Contact" />
          <NavLink
            href="/orders"
            icon={<Package size={18} />}
            text="My Orders"
          />
          <NavLink
            href="/support"
            icon={<MessageSquare size={18} />}
            text="Support"
          />
          <NavLink
            href="/cart"
            icon={<ShoppingCart size={18} />}
            text="Cart"
            count={cartItemCount}
          />
          <Link
            href="/profile"
            className="flex items-center px-3 py-2 bg-white text-green-700 rounded-full hover:bg-green-100 transition-colors duration-300 shadow-md"
            title="My Account"
          >
            <User size={18} className="mr-2" />
            <span className="font-semibold">My Account</span>
          </Link>
        </div>

        {/* Icon-only nav (≥768px & <1280px) */}
        <div className="hidden md:flex xl:hidden items-center space-x-4">
          <IconLink href="/" icon={<Home size={20} />} title="Home" />
          <IconLink
            href="/products"
            icon={<Package size={20} />}
            title="Products"
          />
          <IconLink
            href="/farmers"
            icon={<Tractor size={20} />}
            title="Farmers"
          />
          <IconLink
            href="/nearby-farms"
            icon={<MapPin size={20} />}
            title="Nearby Farms"
          />
          <IconLink href="/about" icon={<Info size={20} />} title="About Us" />
          <IconLink href="/contact" icon={<Mail size={20} />} title="Contact" />
          <IconLink
            href="/orders"
            icon={<Package size={20} />}
            title="My Orders"
          />
          <IconLink
            href="/support"
            icon={<MessageSquare size={20} />}
            title="Support"
          />
          <IconLink
            href="/cart"
            icon={<ShoppingCart size={20} />}
            title="Cart"
            count={cartItemCount}
          />
          <IconLink
            href="/profile"
            icon={<User size={20} />}
            title="My Account"
          />
        </div>

        {/* Hamburger (<768px) */}
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

      {/* Mobile drawer (<768px) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-700 px-4 py-4 rounded-b-lg shadow-inner">
          <div className="flex flex-col space-y-3">
            <MobileNavLink
              href="/"
              icon={<Home size={20} />}
              text="Home"
              onClick={toggleMobileMenu}
            />
            <MobileNavLink
              href="/products"
              icon={<Package size={20} />}
              text="Products"
              onClick={toggleMobileMenu}
            />
            <MobileNavLink
              href="/farmers"
              icon={<Tractor size={20} />}
              text="Farmers"
              onClick={toggleMobileMenu}
            />
            <MobileNavLink
              href="/nearby-farms"
              icon={<MapPin size={20} />}
              text="Nearby Farms"
              onClick={toggleMobileMenu}
            />
            <MobileNavLink
              href="/about"
              icon={<Info size={20} />}
              text="About Us"
              onClick={toggleMobileMenu}
            />
            <MobileNavLink
              href="/contact"
              icon={<Mail size={20} />}
              text="Contact"
              onClick={toggleMobileMenu}
            />
            <MobileNavLink
              href="/orders"
              icon={<Package size={20} />}
              text="My Orders"
              onClick={toggleMobileMenu}
            />
            <MobileNavLink
              href="/support"
              icon={<MessageSquare size={20} />}
              text="Support"
              onClick={toggleMobileMenu}
            />
            <MobileNavLink
              href="/cart"
              icon={<ShoppingCart size={20} />}
              text={`Cart (${cartItemCount})`}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ href, icon, text, count }) => (
  <Link
    href={href}
    className="flex items-center text-white hover:text-green-200 transition-colors duration-300 font-medium text-lg group"
    title={text}
  >
    {icon && (
      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
    )}
    <span>{text}</span>
    {typeof count === "number" && (
      <span className="ml-1 text-sm font-semibold">({count})</span>
    )}
  </Link>
);

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  href,
  icon,
  text,
  onClick,
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="flex items-center text-white hover:bg-green-600 px-4 py-3 rounded-lg transition-colors duration-300 text-lg font-medium"
  >
    {icon && <span className="mr-3">{icon}</span>}
    {text}
  </Link>
);

export default Header;
