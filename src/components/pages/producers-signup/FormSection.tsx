// src/components/pages/producers-signup/FormSection.tsx
"use client";

import React from "react";

export default function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-green-800 mb-6 border-l-4 border-green-500 pl-4">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
