// src/app/page.tsx

import { Hero } from "@/components/sections/founders";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founders Corners - DailyHelp",
};

export default function FoundersCorners() {
  return (
    <main>
        <Hero />

      {/* Add other sections below */}
    </main>
  );
}
