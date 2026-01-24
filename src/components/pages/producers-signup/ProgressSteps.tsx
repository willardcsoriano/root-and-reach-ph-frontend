// src/components/pages/producers-signup/ProgressSteps.tsx
"use client";

import { CheckCircle } from "lucide-react";

function StepItem({
  step,
  title,
  currentStep,
}: {
  step: number;
  title: string;
  currentStep: number;
}) {
  const active = currentStep >= step;

  return (
    <div className="flex items-center">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
          active ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
        }`}
      >
        {currentStep > step ? <CheckCircle size={24} /> : step}
      </div>
      <div className="ml-4">
        <p
          className={`text-sm font-semibold ${active ? "text-green-700" : "text-gray-500"}`}
        >
          Step {step}
        </p>
        <p
          className={`font-bold ${active ? "text-gray-900" : "text-gray-400"}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default function ProgressSteps({ step }: { step: number }) {
  if (step > 3) return null;

  return (
    <div className="grid grid-cols-3 gap-4 mb-12 p-4 bg-white rounded-xl shadow-md">
      <StepItem step={1} title="Personal Info" currentStep={step} />
      <StepItem step={2} title="Farm Details" currentStep={step} />
      <StepItem step={3} title="Review & Submit" currentStep={step} />
    </div>
  );
}
