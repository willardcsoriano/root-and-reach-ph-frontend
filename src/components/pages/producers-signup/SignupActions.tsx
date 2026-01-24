// src/components/pages/producers-signup/SignupActions.tsx
"use client";

import { ArrowLeft, Send, User } from "lucide-react";

interface Props {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

export default function SignupActions({ step, nextStep, prevStep }: Props) {
  if (step > 3) return null;

  return (
    <div className="flex justify-between mt-10">
      {step > 1 && (
        <button
          type="button"
          onClick={prevStep}
          className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300"
        >
          <ArrowLeft size={20} /> Previous
        </button>
      )}

      {step < 3 && (
        <button
          type="button"
          onClick={nextStep}
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 ml-auto"
        >
          Next <User size={20} />
        </button>
      )}

      {step === 3 && (
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 ml-auto"
        >
          Submit Application <Send size={20} />
        </button>
      )}
    </div>
  );
}
