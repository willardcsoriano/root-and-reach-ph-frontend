// src/app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import Header from '@/components/ui/Header'; // Correct: default import
import Footer from '@/components/ui/Footer'; // Fixed: changed to default import
import { CartProvider } from '@/contexts/CartContext'; // Assuming this is a named export

export const metadata = {
  title: 'Root & Reach PH',
  description: 'Rooted in Purpose. Reaching Beyond.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800 flex flex-col min-h-screen"> {/* Added flex-col and min-h-screen for sticky footer */}
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main> {/* Added flex-grow to push footer down */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}