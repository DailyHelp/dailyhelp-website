// src/app/page.tsx
import { About, Hero, HowTo } from "@/components/sections/aboutus";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - DailyHelp",
};

export default function AboutUs() {
  return (
    <main>
        <Hero />
        <About />
        <HowTo />
      {/* Add other sections below */}
    </main>
  );
}
