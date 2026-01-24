// src/app/dashboard/settings/page.tsx
"use client";

import { motion } from "framer-motion";
import { pageFade, fadeUp, hoverCard } from "@/lib/motion";
import { Settings, Shield, Bell } from "lucide-react";
import BackToDashboard from "@/components/dashboard/BackToDashboard";

export default function SettingsPage() {
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
            <Settings className="text-green-600" />
            Settings
          </h1>
          <p className="text-gray-600 mt-2">
            Customize your account preferences and security options.
          </p>
        </motion.div>

        {/* Settings Sections */}
        {[
          {
            icon: <Shield />,
            title: "Security",
            items: [
              "Change Password",
              "Two-Factor Authentication",
              "Device Sessions",
            ],
          },
          {
            icon: <Bell />,
            title: "Notifications",
            items: ["Email Updates", "Order Alerts", "Promotional Messages"],
          },
        ].map((section) => (
          <motion.div
            key={section.title}
            className="bg-white p-7 rounded-2xl shadow border border-gray-100"
            variants={fadeUp}
            whileHover={hoverCard}
          >
            <div className="flex items-center gap-3 mb-4 text-green-700">
              {section.icon}
              <h2 className="text-xl font-bold text-gray-800">
                {section.title}
              </h2>
            </div>

            <ul className="space-y-3 text-gray-600">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between border-b pb-2 last:border-none"
                >
                  <span>{item}</span>
                  <span className="text-xs text-gray-400">Mock</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
