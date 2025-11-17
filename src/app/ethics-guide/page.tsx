// src/app/page.tsx

import { Hero } from "@/components/sections/ethicsguide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethics & Compliance Guide - DailyHelp",
};

export default function EthicsGuide() {
  return (
    <main>
        <Hero />
      {/* Add other sections below */}
    </main>
  );
}
