// src/components/pages/producers-signup/steps/StepReview.tsx
"use client";

import FormSection from "../FormSection";
import { ProducerFormData } from "../types";

export default function StepReview({ data }: { data: ProducerFormData }) {
  return (
    <FormSection title="Review Your Application">
      <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
        <p>
          <strong>Full Name:</strong> {data.fullName}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Phone:</strong> {data.phone}
        </p>
        <hr />
        <p>
          <strong>Farm Name:</strong> {data.farmName}
        </p>
        <p>
          <strong>Location:</strong> {data.location}
        </p>
        <p>
          <strong>Description:</strong> {data.farmDescription}
        </p>
        <p>
          <strong>Products:</strong> {data.productTypes}
        </p>
      </div>
      <p className="text-sm text-gray-500">
        By submitting, you agree to our terms and conditions.
      </p>
    </FormSection>
  );
}
