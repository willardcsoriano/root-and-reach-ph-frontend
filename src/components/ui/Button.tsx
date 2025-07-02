// src/components/ui/Button.tsx
import Link from 'next/link';
import React from 'react';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-block w-full text-center px-4 py-2 rounded-md font-medium transition-colors ';
  const variantStyles =
    variant === 'primary'
      ? 'bg-green-600 hover:bg-green-700 text-white'
      : 'bg-white hover:bg-gray-100 text-green-600 border border-green-600';

  return (
    <Link
      href={href}
      className={`${baseStyles}${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};
