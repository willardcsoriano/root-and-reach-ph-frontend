// src/app/dashboard/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeUp,
  pageFade,
  hoverCard,
  buttonHover,
  buttonTap,
} from "@/lib/motion";
import { User, ShoppingBag, Settings, Leaf } from "lucide-react";

export default function DashboardPage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gray-100 p-8"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <motion.div variants={fadeUp}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 flex items-center gap-3">
            <Leaf className="text-green-600" size={36} />
            Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Here’s a quick overview of your activity.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            { label: "Orders", value: "12", color: "text-green-700" },
            { label: "Favorite Farms", value: "5", color: "text-blue-600" },
            { label: "Products Bought", value: "38", color: "text-purple-600" },
            { label: "Impact Score", value: "92%", color: "text-orange-600" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow border border-gray-100"
              variants={fadeUp}
              whileHover={hoverCard}
            >
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className={`text-3xl font-extrabold ${stat.color}`}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            {
              href: "/dashboard/profile",
              title: "Profile",
              desc: "View and edit your account details.",
              icon: <User size={28} />,
            },
            {
              href: "/dashboard/orders",
              title: "Orders",
              desc: "Track your recent purchases and history.",
              icon: <ShoppingBag size={28} />,
            },
            {
              href: "/dashboard/settings",
              title: "Settings",
              desc: "Manage preferences and security options.",
              icon: <Settings size={28} />,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={hoverCard}
            >
              <Link
                href={item.href}
                className="block bg-white p-7 rounded-xl shadow border border-gray-100 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-3 text-green-700">
                  {item.icon}
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-500">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-green-600 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg"
          variants={fadeUp}
        >
          <div>
            <h3 className="text-2xl font-bold">Discover Local Producers 🌱</h3>
            <p className="text-green-100 mt-1">
              Explore farms and fresh products near you.
            </p>
          </div>

          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Link
              href="/products"
              className="px-6 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Browse Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
