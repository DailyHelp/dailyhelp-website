// src/app/page.tsx

import { Hero } from "@/components/sections/termsofuse";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - DailyHelp",
};


export default function TermsofUse() {
  return (
    <main>
        <Hero />
      {/* Add other sections below */}
    </main>
  );
}
