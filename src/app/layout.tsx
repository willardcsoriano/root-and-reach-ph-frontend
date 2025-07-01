// src/app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { CartProvider } from '@/contexts/CartContext';

export const metadata = {
  title: 'Root & Reach PH',
  description: 'Rooted in Purpose. Reaching Beyond.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
