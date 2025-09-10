// src/app/(admin)/page.tsx
import React from "react";
import Link from "next/link";

export default function AdminHome() {
  return (
    <div>
      <p>This is the Rackets & Returns admin frontend. Use the Members tab to add and preview members locally.</p>
      <div className="mt-6">
        <Link href="/members" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">Go to Members</Link>
      </div>
    </div>
  );
}
