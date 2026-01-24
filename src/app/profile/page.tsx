// src/app/profile/page.tsx
"use client";

import Link from "next/link";
import AuthLayout from "@/components/pages/auth/AuthLayout";
import AuthHeader from "@/components/pages/auth/AuthHeader";
import AuthForm from "@/components/pages/auth/AuthForm";
import SocialLogin from "@/components/pages/auth/SocialLogin";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function SignInPage() {
  return (
    <AuthLayout>
      <motion.div
        className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
        variants={fadeUp}
      >
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue to Root & Reach."
        />

        <AuthForm />

        <motion.div className="flex items-center my-8" variants={fadeUp}>
          <div className="grow border-t border-gray-200"></div>
          <span className="mx-4 text-sm text-gray-400">OR</span>
          <div className="grow border-t border-gray-200"></div>
        </motion.div>

        <SocialLogin />
      </motion.div>

      <motion.div className="text-center mt-8" variants={fadeUp}>
        <p className="text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/sign-up"
            className="font-semibold text-green-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </AuthLayout>
  );
}
