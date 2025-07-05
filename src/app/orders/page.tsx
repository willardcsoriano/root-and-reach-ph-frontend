// src/app/orders/page.tsx
import React from 'react';
import Link from 'next/link';
import { Package, CircleDot, CheckCircle2, ArrowRight } from 'lucide-react';

// --- MOCK DATA ---
// In a real application, this would be fetched from your database for the logged-in user.
const mockOrders = [
  {
    id: 'RNR-10543',
    date: 'July 1, 2025',
    status: 'Delivered',
    totalAmount: 1100.00,
    items: [
      { name: 'Arabica Coffee Beans', quantity: 1 },
      { name: 'Hass Avocados', quantity: 2 },
    ]
  },
  {
    id: 'RNR-10598',
    date: 'July 3, 2025',
    status: 'On the Way',
    totalAmount: 350.00,
    items: [
      { name: 'Heirloom Tomatoes', quantity: 1 },
      { name: 'Fresh Basil', quantity: 1 },
      { name: 'Romaine Lettuce', quantity: 1 },
    ]
  },
  {
    id: 'RNR-10499',
    date: 'June 25, 2025',
    status: 'Delivered',
    totalAmount: 530.00,
    items: [
      { name: 'Free-Range Eggs', quantity: 2 },
      { name: 'Sweet Pineapples', quantity: 3 },
    ]
  }
];

// --- Helper component for status badges ---
const StatusBadge = ({ status }: { status: string }) => {
    const isDelivered = status === 'Delivered';
    const Icon = isDelivered ? CheckCircle2 : CircleDot;
    const colorClasses = isDelivered 
        ? 'bg-green-100 text-green-800' 
        : 'bg-blue-100 text-blue-800 animate-pulse';

    return (
        <span className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded-full ${colorClasses}`}>
            <Icon size={16} />
            {status}
        </span>
    );
};


// --- MAIN PAGE COMPONENT ---
const OrdersPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold font-inter text-gray-800 mb-8">My Orders</h1>
          
          <div className="space-y-6">
            {mockOrders.map(order => (
              <div key={order.id} className="bg-white rounded-xl shadow-md p-6 transition-shadow hover:shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  {/* Order Details */}
                  <div className="md:col-span-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                        <div className="mb-4 sm:mb-0">
                            <p className="text-sm text-gray-500">Order ID</p>
                            <p className="font-bold text-gray-800">{order.id}</p>
                        </div>
                         <div className="mb-4 sm:mb-0">
                            <p className="text-sm text-gray-500">Date Placed</p>
                            <p className="font-semibold text-gray-600">{order.date}</p>
                        </div>
                         <div>
                            <p className="text-sm text-gray-500">Total Amount</p>
                            <p className="font-semibold text-gray-600">₱{order.totalAmount.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="border-t my-4"></div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Package size={18} />
                        <p className="truncate">
                            {order.items[0].name}, {order.items[1]?.name}
                            {order.items.length > 2 && `, and ${order.items.length - 2} more item(s)`}
                        </p>
                    </div>
                  </div>

                  {/* Status and Action */}
                  <div className="md:col-span-1 text-center md:text-right">
                    <div className="mb-4">
                        <StatusBadge status={order.status} />
                    </div>
                    <Link
                      href={`/track-order/${order.id}`}
                      className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
                    >
                      <span>Track Order</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;