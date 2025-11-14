// src/app/page.tsx
import { AboutUsPreview, HowToPreview, OurServices, ProfessionalGallery } from "@/components/sections/home";
import Hero from "@/components/sections/home/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProfessionalGallery />
      <AboutUsPreview />
      <OurServices />
      <HowToPreview />
      {/* Add other sections below */}
    </main>
  );
}
