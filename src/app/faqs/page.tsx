// src/app/page.tsx

import { Contact, Hero } from "@/components/sections/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQS - DailyHelp",
};

export default function Faqs() {
  return (
    <main>
        <Hero />
        <Contact />
      {/* Add other sections below */}
    </main>
  );
}
