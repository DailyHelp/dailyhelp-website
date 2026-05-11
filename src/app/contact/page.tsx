import { Hero } from "@/components/sections/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - DailyHelp",
};

export default function ContactPage() {
  return (
    <main>
      <Hero />
    </main>
  );
}
