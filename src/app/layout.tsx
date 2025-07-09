// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { OrderProvider } from "@/contexts/OrderContext";

export const metadata = {
  title: "Root & Reach PH",
  description: "Rooted in Purpose. Reaching Beyond.",
  viewport: "width=device-width, initial-scale=1",
};
// This is the one, correct RootLayout component
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800 flex flex-col min-h-screen">
        <CartProvider>
          <OrderProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </OrderProvider>
        </CartProvider>
      </body>
    </html>
  );
}
