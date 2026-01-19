"use client";

import React from "react";
import Link from "next/link";
import { useOrders } from "@/contexts/OrderContext";
import { Package, Trash2 } from "lucide-react";
import OrderCard from "@/components/pages/order-page/OrderCard";

const MyOrdersPage = () => {
  const { orders, clearOrders } = useOrders(); // Get clearOrders from the hook

  const handleClearOrders = () => {
    // Add a confirmation before deleting
    if (
      window.confirm(
        "Are you sure you want to delete all your orders? This action cannot be undone.",
      )
    ) {
      clearOrders();
    }
  };

  if (orders.length === 0) {
    return (
      <div className="text-center py-20 md:py-32">
        <Package size={64} className="mx-auto text-gray-300" />
        <h1 className="mt-6 text-3xl font-bold text-gray-800">No Orders Yet</h1>
        <p className="mt-2 text-gray-500">
          You haven&apos;t placed any orders with us. Let&apos;s change that!
        </p>
        <Link
          href="/products"
          className="mt-8 inline-block bg-green-600 text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-green-700"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Container for the title and the new button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">My Orders</h1>
          <button
            onClick={handleClearOrders}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
          >
            <Trash2 size={16} /> Clear All Orders
          </button>
        </div>

        <div className="space-y-6">
          {[...orders].reverse().map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
