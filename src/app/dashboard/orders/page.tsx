// src/app/dashboard/orders/page.tsx
"use client";

import { motion } from "framer-motion";
import { pageFade, fadeUp, containerVariants, hoverCard } from "@/lib/motion";
import { ShoppingBag } from "lucide-react";
import BackToDashboard from "@/components/dashboard/BackToDashboard";

export default function OrdersPage() {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:bg-gray-50 transition-colors"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <BackToDashboard />
        {/* Header */}
        <motion.div variants={fadeUp}>
          <h1 className="text-4xl font-extrabold text-green-800 flex items-center gap-3">
            <ShoppingBag className="text-green-600" />
            My Orders
          </h1>
          <p className="text-gray-600 mt-2">
            View your recent purchases and order history.
          </p>
        </motion.div>

        {/* Orders List */}
        <motion.div
          className="space-y-5"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            {
              id: "#RR-1024",
              date: "Jan 12, 2026",
              status: "Delivered",
              total: "₱1,240",
            },
            {
              id: "#RR-1023",
              date: "Dec 28, 2025",
              status: "Processing",
              total: "₱820",
            },
          ].map((order) => (
            <motion.div
              key={order.id}
              className="bg-white p-6 rounded-xl shadow border border-gray-100 flex flex-col md:flex-row justify-between gap-4"
              variants={fadeUp}
              whileHover={hoverCard}
            >
              <div>
                <p className="font-bold text-gray-800">{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>

              <div className="flex items-center gap-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
                <span className="font-bold text-gray-800">{order.total}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
