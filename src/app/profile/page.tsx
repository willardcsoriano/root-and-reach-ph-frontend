"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogIn, KeyRound, Mail, AlertTriangle } from "lucide-react";

// A simple SVG for the Google icon
const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.306 14.691c-1.645 3.113-2.646 6.691-2.646 10.519c0 1.258.125 2.492.352 3.684l7.63-7.63C10.153 19.467 8.356 16.6 6.306 14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.32-4.522 2.04-7.219 2.04c-5.216 0-9.676-3.337-11.26-7.96l-7.63 7.63C8.163 40.024 15.59 44 24 44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611 20.083L43.595 20L42 20H24v8h11.303a12.031 12.031 0 0 1-4.07 5.574l6.19 5.238C39.993 35.133 44 29.833 44 24c0-1.341-.138-2.65-.389-3.917z"
    ></path>
  </svg>
);

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const result = await signIn("credentials", {
      redirect: false, // Important: handle redirect manually
      email,
      password,
    });

    setIsLoading(false);

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    } else if (result?.ok) {
      router.push("/profile"); // Redirect to profile page on success
      router.refresh(); // Refresh to update session state in the header
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/profile" }); // Redirect to profile after Google login
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-green-800">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-2">
              Sign in to continue to Root & Reach.
            </p>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleCredentialsSignIn} className="space-y-6">
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="relative">
              <KeyRound
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                <AlertTriangle size={18} />
                <p>{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:bg-green-400 transition-colors"
            >
              <LogIn size={20} />
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-sm text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <GoogleIcon />
            Sign In with Google
          </button>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/sign-up"
              className="font-semibold text-green-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
