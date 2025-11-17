// src/app/page.tsx

import { About, AboutUs } from "@/components/sections/howitworks";
import Hero from "@/components/sections/howitworks/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Dailyhelp Works - DailyHelp",
};

export default function HowItWorks() {
  return (
    <main>
        <Hero />
        <AboutUs />
        <About />
      {/* Add other sections below */}
    </main>
  );
}
