"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, ArrowLeft } from "lucide-react";

const SupportPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 mb-8 font-semibold"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-green-800">
              Support Center
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              We&apos;re here to help you with any questions or issues.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            <a
              href="tel:+639171234567"
              className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Phone size={28} className="text-green-600" />
              <div>
                <p className="font-bold text-lg">Call Us</p>
                <p className="text-gray-700">+63 (917) 123-4567</p>
              </div>
            </a>
            <a
              href="mailto:support@rootandreach.com"
              className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Mail size={28} className="text-green-600" />
              <div>
                <p className="font-bold text-lg">Email Us</p>
                <p className="text-gray-700">support@rootandreach.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Clock size={28} className="text-green-600" />
              <div>
                <p className="font-bold text-lg">Business Hours</p>
                <p className="text-gray-700">
                  Monday - Friday, 9:00 AM - 6:00 PM (PHT)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
