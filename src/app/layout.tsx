// src/app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import Header from '@/components/ui/Header'; // Ensure this path is correct and Header.tsx has 'export default Header;'
import Footer from '@/components/ui/Footer';
import { CartProvider } from '@/contexts/CartContext'; // Import CartProvider

export const metadata = {
  title: 'Root & Reach PH',
  description: 'Rooted in Purpose. Reaching Beyond.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800 flex flex-col min-h-screen">
        <CartProvider> {/* Wrap your content with CartProvider */}
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
