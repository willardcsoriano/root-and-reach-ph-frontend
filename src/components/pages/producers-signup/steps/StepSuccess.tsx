// src/components/pages/producers-signup/steps/StepSuccess.tsx
"use client";

import { CheckCircle } from "lucide-react";

export default function StepSuccess() {
  return (
    <div className="text-center py-12 animate-fade-in">
      <CheckCircle size={64} className="mx-auto text-green-500" />
      <h2 className="text-3xl font-bold mt-6">Application Submitted!</h2>
      <p className="mt-2 text-gray-600">
        Our team will review your application and get back to you soon.
      </p>
    </div>
  );
}
