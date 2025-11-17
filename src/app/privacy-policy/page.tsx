// src/app/page.tsx

import { Hero } from "@/components/sections/privacypolicy";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - DailyHelp",
};

export default function EthicsGuide() {
  return (
    <main>
        <Hero />
      {/* Add other sections below */}
    </main>
  );
}
