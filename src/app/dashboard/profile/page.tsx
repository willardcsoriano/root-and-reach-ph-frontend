// src/app/dashboard/profile/page.tsx
"use client";

import { motion } from "framer-motion";
import { pageFade, fadeUp, containerVariants, hoverCard } from "@/lib/motion";
import { User, MapPin } from "lucide-react";
import BackToDashboard from "@/components/dashboard/BackToDashboard";

export default function ProfilePage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gray-100 p-8"
      variants={pageFade}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <BackToDashboard />
        {/* Header */}
        <motion.div variants={fadeUp}>
          <h1 className="text-4xl font-extrabold text-green-800 flex items-center gap-3">
            <User className="text-green-600" />
            My Profile
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your personal information and account details.
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow border border-gray-100 flex flex-col md:flex-row gap-8"
          variants={fadeUp}
          whileHover={hoverCard}
        >
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center text-4xl font-bold text-green-700">
              W
            </div>
            <button className="mt-4 text-sm text-green-600 font-semibold hover:underline">
              Change Photo
            </button>
          </div>

          {/* Info */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-semibold text-gray-800">Willie D.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold text-gray-800">willie@email.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold text-gray-800 flex items-center gap-2">
                <MapPin size={16} /> Quezon City, PH
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-semibold text-gray-800">Customer</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            { label: "Orders", value: "12" },
            { label: "Favorite Farms", value: "5" },
            { label: "Joined", value: "2025" },
          ].map((item) => (
            <motion.div
              key={item.label}
              className="bg-white hover:bg-gray-50 p-6 rounded-xl shadow border border-gray-200 hover:shadow-lg transition-colors"
              variants={fadeUp}
              whileHover={hoverCard}
            >
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-2xl font-bold text-green-700">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
