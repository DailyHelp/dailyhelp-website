// src/app/page.tsx

import { About, AboutUs } from "@/components/sections/howitworks";
import Hero from "@/components/sections/howitworks/Hero";

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
