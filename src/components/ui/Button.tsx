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
      `inline-block w-full text-center px-4 py-2 rounded-md font-medium ` +
      `bg-green-600 hover:bg-green-700 text-white transition-colors ` +
      className
    }
    {...props}
  >
    {children}
  </Link>
);
