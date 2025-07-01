// src/components/ui/Card.tsx
"use client";

import React, { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
      {children}
    </div>
  );
}
