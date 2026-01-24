// src/components/pages/auth/AuthForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, KeyRound, LogIn, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeUp,
  buttonHover,
  buttonTap,
} from "@/lib/motion";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      router.push("/mock");
    }, 800);
  };

  return (
    <motion.form
      onSubmit={handleSignIn}
      className="space-y-7"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="relative" variants={fadeUp}>
        <Mail
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </motion.div>

      <motion.div className="relative" variants={fadeUp}>
        <KeyRound
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </motion.div>

      {error && (
        <motion.div
          className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg"
          variants={fadeUp}
        >
          <AlertTriangle size={18} />
          {error}
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:bg-green-400 transition-colors"
        variants={fadeUp}
        whileHover={buttonHover}
        whileTap={buttonTap}
      >
        <LogIn size={20} />
        {isLoading ? "Signing In..." : "Sign In"}
      </motion.button>
    </motion.form>
  );
}
