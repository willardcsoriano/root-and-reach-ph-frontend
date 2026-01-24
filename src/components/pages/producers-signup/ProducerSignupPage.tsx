// src/components/pages/producers-signup/ProducerSignupPage.tsx
"use client";

import React, { useState } from "react";
import ProgressSteps from "./ProgressSteps";
import StepPersonalInfo from "./steps/StepPersonalInfo";
import StepFarmDetails from "./steps/StepFarmDetails";
import StepReview from "./steps/StepReview";
import StepSuccess from "./steps/StepSuccess";
import SignupActions from "./SignupActions";
import { ProducerFormData } from "./types";

export default function ProducerSignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ProducerFormData>({
    fullName: "",
    email: "",
    phone: "",
    farmName: "",
    location: "",
    farmDescription: "",
    productTypes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    nextStep();
  };

  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">
            Become a Partner
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Join our community of local producers.
          </p>
        </div>

        <ProgressSteps step={step} />

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <StepPersonalInfo data={formData} onChange={handleChange} />
            )}
            {step === 2 && (
              <StepFarmDetails data={formData} onChange={handleChange} />
            )}
            {step === 3 && <StepReview data={formData} />}
            {step === 4 && <StepSuccess />}

            <SignupActions
              step={step}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
