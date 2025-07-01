// src/components/ui/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export const Header: React.FC = () => (
  <header className="bg-white shadow-sm">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <Link href="/" className="flex items-center">
        <Image src="/assets/logo.svg" alt="Root and Reach Logo" width={40} height={40} />
        <span className="ml-2 text-2xl font-semibold text-gray-800">Root &amp; Reach</span>
      </Link>
      <nav aria-label="Main navigation">
        <ul className="flex space-x-6">
          {['Home', 'About', 'Join', 'Blog'].map((label) => (
            <li key={label}>
              <Link
                href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);
