// src/components/ui/Button.tsx
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className = '',
  ...props
}) => (
  <Link
    href={href}
    className={
      `inline-block px-6 py-3 rounded-md font-medium transition-colors ` +
      `bg-primary hover:bg-primary-dark text-white ${className}`
    }
    {...props}
  >
    {children}
  </Link>
);