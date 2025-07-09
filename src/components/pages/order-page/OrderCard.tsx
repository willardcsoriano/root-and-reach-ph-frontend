"use client";

import React from "react";
import Link from "next/link";
import { Order, useOrders } from "@/contexts/OrderContext";
import {
  Calendar,
  Tag,
  Truck,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";

// Helper to get a color and text for the status badge
const getStatusStyles = (status: Order["status"]) => {
  switch (status) {
    case "Processing":
      return { text: "Processing", color: "bg-blue-100 text-blue-800" };
    case "Shipped":
      return { text: "On the Way", color: "bg-yellow-100 text-yellow-800" };
    case "Delivered":
      return { text: "Delivered", color: "bg-green-100 text-green-800" };
    case "Canceled":
      return { text: "Canceled", color: "bg-red-100 text-red-800" };
    default:
      return { text: "Unknown", color: "bg-gray-100 text-gray-800" };
  }
};

const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
  const { updateOrderStatus } = useOrders();
  const statusInfo = getStatusStyles(order.status);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-wrap justify-between items-center border-b pb-4 mb-4 gap-4">
        <div>
          <h2 className="font-bold text-xl text-green-700 flex items-center gap-2">
            <Tag size={20} /> Order ID: {order.id}
          </h2>
          <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
            <Calendar size={16} /> Placed on:{" "}
            {new Date(order.date).toLocaleDateString()}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full ${statusInfo.color}`}
          >
            {statusInfo.text}
          </span>
          <p className="font-bold text-xl mt-2">₱{order.total.toFixed(2)}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Items:</h3>
        <ul className="list-disc list-inside text-gray-600 pl-2 space-y-1">
          {order.items.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity})
            </li>
          ))}
        </ul>
      </div>

      {/* --- Action Buttons --- */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t">
        {order.status === "Processing" && (
          <>
            <button
              onClick={() => updateOrderStatus(order.id, "Canceled")}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-red-100 text-red-700 rounded-md hover:bg-red-200"
            >
              <XCircle size={18} /> Cancel Order
            </button>
            <button
              onClick={() => updateOrderStatus(order.id, "Shipped")}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-orange-100 text-orange-700 rounded-md hover:bg-orange-200"
            >
              Mark as Shipped (Dev) <ArrowRight size={18} />
            </button>
          </>
        )}
        {order.status === "Shipped" && (
          <>
            <Link
              href={`/track-order/${order.id}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
            >
              <Truck size={18} /> Track Order
            </Link>
            <button
              onClick={() => updateOrderStatus(order.id, "Delivered")}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-green-100 text-green-700 rounded-md hover:bg-green-200"
            >
              <CheckCircle size={18} /> Confirm Receipt
            </button>
          </>
        )}
        {order.status === "Delivered" && (
          <p className="text-sm text-gray-500 font-semibold">
            Thank you for your order!
          </p>
        )}
        {order.status === "Canceled" && (
          <p className="text-sm text-red-600 font-semibold">
            This order has been canceled.
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
