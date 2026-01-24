// src/components/pages/auth/SocialLogin.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, buttonHover, buttonTap } from "@/lib/motion";
import { signIn } from "next-auth/react";

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691c-1.645 3.113-2.646 6.691-2.646 10.519c0 1.258.125 2.492.352 3.684l7.63-7.63C10.153 19.467 8.356 16.6 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.32-4.522 2.04-7.219 2.04c-5.216 0-9.676-3.337-11.26-7.96l-7.63 7.63C8.163 40.024 15.59 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083L43.595 20L42 20H24v8h11.303a12.031 12.031 0 0 1-4.07 5.574l6.19 5.238C39.993 35.133 44 29.833 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);

export default function SocialLogin() {
  return (
    <motion.button
      onClick={() => signIn("google", { callbackUrl: "/profile" })}
      className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      variants={fadeUp}
      whileHover={buttonHover}
      whileTap={buttonTap}
    >
      <GoogleIcon />
      Sign In with Google
    </motion.button>
  );
}
