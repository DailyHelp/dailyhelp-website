// src/app/page.tsx
import { About, Hero, HowTo } from "@/components/sections/aboutus";

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
