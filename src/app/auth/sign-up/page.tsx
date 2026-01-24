// src/app/auth/sign-up/page.tsx
// src/app/auth/sign-up/page.tsx
"use client";

import Link from "next/link";
import AuthLayout from "@/components/pages/auth/AuthLayout";
import AuthHeader from "@/components/pages/auth/AuthHeader";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <motion.div
        className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
        variants={fadeUp}
      >
        <AuthHeader
          title="Create an Account"
          subtitle="Join Root & Reach and start supporting local producers."
        />

        {/* Mock form */}
        <div className="space-y-5">
          <input
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400"
          />
          <input
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400"
          />

          <button className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition">
            Sign Up
          </button>
        </div>
      </motion.div>

      <motion.div className="text-center mt-8" variants={fadeUp}>
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link
            href="/mock"
            className="font-semibold text-green-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </motion.div>
    </AuthLayout>
  );
}
